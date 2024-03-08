import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { IoMdMore } from 'react-icons/io';
import '../components/artistCard.css'
import { BsThreeDotsVertical } from 'react-icons/bs';

// custom CSS
import './home.css'

import { album_type, artist_type, single_type, song_type } from '../interfaces/interfaces';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getArtistAction } from '../redux/artist_/artistSlice';
import { StateType } from '../redux/root-reducer';
import SideBarArtist from '../components/sideBarArtist';
import CreateAlbumPopupForm from '../components/Input/newAlbumPopupForm';
import CreateSinglePopupForm from '../components/Input/newSinglePopupForm';
import DeleteWarnPopupForm, { deleted_items } from '../components/deleteWarnPopup';
import AlbumCardMorePopupForm from '../components/Input/updateAlbumPopupForm';
import SingleCardMorePopupForm from '../components/Input/updateSInglePopupForm';

import { SquareCard, CardFooterStyle, CardGrid, CardInfo, CardTextStyle, AroundCardImg, CardImg } from '../components/Card/card.style';
import { LineCard, LineCardSingles, LineCardInfo, CardItem } from "../components/Card/card.style";
import { MainbarComp } from '../components/MainBar/mainbar.style';

export default function ArtistPage(){
    type ParamsType = {
        artistId?: string;
    }
    // here i used useSelector to reacd data from the Redux store when there is change to store it will compare values and re-renders
    const payload_ = useSelector((state: StateType) => state.artists);

    const { artistId } = useParams<ParamsType>();
    // useDispatch is used to triger and changes to the store 
    const dispatch  = useDispatch();

    const [selectedAlbum, setSelectedAlbum] = useState<album_type | null>(null);
    const [selectedSingle, setSelectedSingle] = useState<single_type | null>(null);

    const [showDeleWarn, setShowDeleWarn] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showSingleDeleWarn, setShowSingleDeleWarn] = useState(false);
    const [showSingleUpdateForm, setShowSingleUpdateForm] = useState(false);
    

    useEffect(() => {
        dispatch(getArtistAction( artistId as string)); // here i am considering artistId will not be undefined or other types 
    }, [artistId]);

    const handleDeleteWarnPopup = (album: album_type) => {
        setSelectedAlbum(album)
        setShowDeleWarn(true);
    };

    const handleUpdatePopup = (album: album_type) => {
        setSelectedAlbum(album)
        setShowUpdateForm(true);
    };

    const handleSingleUpdatePopup = (single: single_type) => {
        setSelectedSingle(single)
        setShowSingleUpdateForm(true);
    };

    const handleCloseSingleUpdatePopup = () => {
        dispatch(getArtistAction( artistId as string));
        setShowSingleUpdateForm(false)
    };

    
    const handleCloseWarnPopup = () => {
        // [?] calling dispatch everytime seems expensive
        dispatch(getArtistAction( artistId as string));
        setShowDeleWarn(false)
    };

    const handleCloseUpdatePopup = () => {
        dispatch(getArtistAction( artistId as string));
        setShowUpdateForm(false)
    };

    const handleDeleteSingleWarnPopup = (single: single_type) => {
        setSelectedSingle(single);
            setShowSingleDeleWarn(true);
        };
    
    const handleCloseSingleWarnPopup = () => {
        dispatch(getArtistAction( artistId as string));
        setShowSingleDeleWarn(false);
    };
    

    // const artist_: artist_type = payload_.artist.data as unknown as artist_type || [];
    const albums_: album_type[]  = payload_.artist.data?.albums as unknown as album_type[] || [];
    const singles = payload_.artist.data?.single;
    const [imageLoadError, setImageLoadError] = useState(false);
    const handleImageLoadError = () =>{
        setImageLoadError(true);
    };

    const albumCard_ = albums_?.map(albm => (
        // <div className="col-md-3">
        <div>
            <SquareCard
                key={albm._id}
                backgroundColor={"#f5f5f5"}
            >
                <AroundCardImg>
                    <Link to={`/album/${payload_.artist.data?._id}/${albm._id}`}>
                        {imageLoadError ? (
                            <CardImg src="https://imgur.com/Lf76JRO.png" alt='defult image' />
                        ):(
                            <CardImg src={albm.cover_img_url} alt='album image' onError={handleImageLoadError}  />
                        )}
                    </Link>
                </AroundCardImg>
                <CardFooterStyle>
                    <CardInfo>
                        <CardTextStyle>
                            <strong>{albm.title}</strong>
                        </CardTextStyle>
                        <CardTextStyle>Songs: {(albm.songs as Array<song_type>).length}</CardTextStyle>
                    </CardInfo>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            {/* <IoMdMore /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleUpdatePopup(albm)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(albm)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </CardFooterStyle>
            </SquareCard>

            <DeleteWarnPopupForm show={showDeleWarn && selectedAlbum === albm} handleClose={handleCloseWarnPopup} itemId={albm._id} what={deleted_items.album} />
            <AlbumCardMorePopupForm show={showUpdateForm && selectedAlbum === albm} handleClose={handleCloseUpdatePopup} album_u={albm} />
        </div>
    ))
    // this function is used to convert second values to minute:seconds
    function  convertSecondsToMinutesAndSeconds(seconds: Number): string {
        var minutes = Math.floor(seconds.valueOf() / 60); 
        var remainingSeconds = seconds.valueOf() % 60; 

        var formattedTime = minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
      
        return formattedTime;
      }

    const single_card = singles?.map(single => (
        <div>
            <LineCard>
                <LineCardSingles>
                    <LineCardInfo>
                        <CardItem>{single.title}</CardItem>
                        <CardItem>{single.genre}</CardItem>
                        <CardItem>{(convertSecondsToMinutesAndSeconds(single.duration)).toString()}</CardItem>
                    </LineCardInfo>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleSingleUpdatePopup(single)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteSingleWarnPopup(single)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </LineCardSingles>
            </LineCard>
            <DeleteWarnPopupForm show={showSingleDeleWarn && selectedSingle === single} handleClose={handleCloseSingleWarnPopup} itemId={single._id} what={deleted_items.single} />
            <SingleCardMorePopupForm show={showSingleUpdateForm && selectedSingle === single} handleClose={handleCloseSingleUpdatePopup} single_u={single}/>
        </div>
    ))
    const [showNewAlbumPopup, setShowNewAlbumPopup] = useState(false);

    const [showNewSinglePopup, setShowNewSinglePopup] = useState(false);

    const handleShowNewSinglePopup = () => setShowNewSinglePopup(true);
    const handleCloseNewSinglePopup = () => {
        setShowNewSinglePopup(false);
         // dispite this it is loading - i think the thing is that i have to wait some time before calling dipatch to see the update
        dispatch(getArtistAction( artistId as string));
    }

    const handleShowNewAlbumPopup = () => setShowNewAlbumPopup(true);
    const handleCloseNewAlbumPopup = () => {
        setShowNewAlbumPopup(false);
        dispatch(getArtistAction( artistId as string));
    }

    const about_artist_card = (
        <Card className="bg-dark text-white ">
            <Card.Img src={"https://imgur.com/RDxhZsI.png"} alt="Card image" /> 
            <Card.ImgOverlay className='indigenous_style artist_card_overlay'>
                <div className="indigenous_style artist_card_top">
                    <div>
                    </div>
                    <Dropdown >
                        <Dropdown.Toggle className="indigenous_style artist_card_icon_btn">
                            
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {}}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
                            <Dropdown.Item onClick={handleShowNewAlbumPopup}>New Album</Dropdown.Item>
                            <Dropdown.Item onClick={handleShowNewSinglePopup}>New Single</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <CreateAlbumPopupForm show={showNewAlbumPopup} handleClose={handleCloseNewAlbumPopup} artistId={payload_.artist.data?._id as string} />
                <CreateSinglePopupForm show={showNewSinglePopup} handleClose={handleCloseNewSinglePopup} artistId={payload_.artist.data?._id as string}/>
                <div className="indigenous_style artist_card_bottom">
                    <Card.Title>{payload_.artist.data?.full_name}</Card.Title>
                    <Card.Text>
                        {payload_.artist.data?.bio}
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
      )

    return (
        <MainbarComp>
            <SideBarArtist artist_Id={artistId || ''} />
            <div className="indigenous_style main_child">
                <div className="container row indigenous_style albums">
                    {about_artist_card}
                </div>
                <>
                    <b>Albums</b>
                    <CardGrid>
                        {albumCard_}
                    </CardGrid>
                </>
                <>
                    Singles
                    <div>
                        {single_card}
                    </div>
                </>
            </div>
        </MainbarComp>
    )
}
