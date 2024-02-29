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
import CreateAlbumPopupForm from '../components/newAlbumPopupForm';
import CreateSinglePopupForm from '../components/newSinglePopupForm';
import DeleteWarnPopupForm, { deleted_items } from '../components/deleteWarnPopup';
import AlbumCardMorePopupForm from '../components/updateAlbumPopupForm';
import SingleCardMorePopupForm from '../components/updateSInglePopupForm';

export default function ArtistPage(){
    type ParamsType = {
        artistId?: string;
    }
    // here i used useSelector to reacd data from the Redux store when there is change to store it will compare values and re-renders
    const payload_ = useSelector((state: StateType) => state.artists);

    const { artistId }: ParamsType = useParams();
    // useDispatch is used to triger and changes to the store 
    const dispatch  = useDispatch();

    const [selectedAlbum, setSelectedAlbum] = useState<album_type | null>(null);
    const [selectedSingle, setSelectedSingle] = useState<single_type | null>(null);

    const [showDeleWarn, setShowDeleWarn] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showSingleDeleWarn, setShowSingleDeleWarn] = useState(false);
    const [showSingleUpdateForm, setShowSingleUpdateForm] = useState(false);
    
    // 
    // const [showNewSinglePopup, setShowNewSinglePopup] = useState(false);


    useEffect(() => {
        dispatch(getArtistAction( artistId as string)); // here i am considering artistId will not be undefined or other types 
    }, [artistId]);
    // }, [artistId]);

    // const handleShowNewPopup = () => setShowNewSinglePopup(true);
    // const handleCloseNewSongPopup = () => {
    //     dispatch(getArtistAction(artistId as string));
    //     setShowNewSinglePopup(false);
    // }

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
    const albumCard_ = albums_?.map(albm => (
        <div className="col-md-3">
            {/* {consoloe.log("[INFO] albums title",albm.title)}; */}
            <Card key={albm._id} style={{ width: '18rem' }} className="indigenous_style artist_card">
                <Link to={`/album/${payload_.artist.data?._id}/${albm._id}`}>
                    <div className="text-center">
                        <Card.Img variant="top" src={albm.cover_img_url} style={{ height: '100%', width: 'auto' }} />
                    </div>
                </Link>
                <Card.Footer className="indigenous_style artist_compt">
                    <div className="indigenous_style artist_summ">
                        <Card.Text>
                            {albm.title as string}
                            {/* {(albm.songs as Array<song_type>).length} */}
                        </Card.Text>
                        <Card.Text>
                            {/* {typeof albm.songs} */}
                            {(albm.songs as Array<song_type>).length}
                        </Card.Text>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            {/* <IoMdMore /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleUpdatePopup(albm)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(albm)}>Delete</Dropdown.Item>
                            <AlbumCardMorePopupForm show={showUpdateForm && selectedAlbum === albm} handleClose={handleCloseUpdatePopup} album_u={albm} />
                            <DeleteWarnPopupForm show={showDeleWarn && selectedAlbum === albm} handleClose={handleCloseWarnPopup} itemId={albm._id} what={deleted_items.album} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Footer>
            </Card>
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
        <Card>
            <Card.Body  className="indigenous_style single_song">
            {/* <Card.Text>{single.title}</Card.Text> */}
                <div className="indigenous_style single_song_info">
                    <Card.Text className="indigenous_style single_item">{single.title}</Card.Text>
                    <Card.Text className="indigenous_style single_item">{single.genre}</Card.Text>  
                    <Card.Text className="indigenous_style single_item">{(convertSecondsToMinutesAndSeconds(single.duration)).toString()}</Card.Text>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleSingleUpdatePopup(single)}>Update</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteSingleWarnPopup(single)}>Delete</Dropdown.Item>
                        
                        {/* <AlbumCardMorePopupForm show={showUpdateForm && selectedAlbum === albm} handleClose={handleCloseUpdatePopup} album_u={albm} /> */}
                        <DeleteWarnPopupForm show={showSingleDeleWarn && selectedSingle === single} handleClose={handleCloseSingleWarnPopup} itemId={single._id} what={deleted_items.single} />
                        <SingleCardMorePopupForm show={showSingleUpdateForm && selectedSingle === single} handleClose={handleCloseSingleUpdatePopup} single_u={single}/>
                        {/* <DeleteWarnPopupForm show={showDeleWarn && selectedAlbum === albm} handleClose={handleCloseWarnPopup} itemId={albm._id} what={deleted_items.album} /> */}
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            {/* {JSON.stringify(single)} */}
        </Card>
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
            {/* <Card.Img src={payload_.artist.data?.img_url || "https://imgur.com/RDxhZsI.png"} alt="Card image" /> */}
            {/* have to set max_width, and height */}
            <Card.Img src={"https://imgur.com/RDxhZsI.png"} alt="Card image" /> 
            <Card.ImgOverlay className='indigenous_style artist_card_overlay'>
                <div className="indigenous_style artist_card_top">
                    {/* <Button variant="outline-light"> */}
                        {/* <BsThreeDotsVertical /> */}
                        <div></div>
                        <Dropdown >
                            <Dropdown.Toggle className="indigenous_style artist_card_icon_btn">
                                
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {}}>Update</Dropdown.Item>
                                <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
                                <Dropdown.Item onClick={handleShowNewAlbumPopup}>New Album</Dropdown.Item>
                                <CreateAlbumPopupForm show={showNewAlbumPopup} handleClose={handleCloseNewAlbumPopup} artistId={payload_.artist.data?._id as string} />
                                <Dropdown.Item onClick={handleShowNewSinglePopup}>New Single</Dropdown.Item>
                                <CreateSinglePopupForm show={showNewSinglePopup} handleClose={handleCloseNewSinglePopup} artistId={payload_.artist.data?._id as string}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    {/* </Button> */}
                </div>
                <div className="indigenous_style artist_card_bottom">
                    <Card.Title>{payload_.artist.data?.full_name}</Card.Title>
                    <Card.Text>
                        {payload_.artist.data?.bio}
                    </Card.Text>
                    {/* converting Date to string was being error */}
                    {/* <Card.Text>{payload_.artist.data?.dob.toDateString()}</Card.Text> */}
                </div>
            </Card.ImgOverlay>
        </Card>
      )

    return (
        <>
            <div className="indigenous_style home_parent">
                <div className="indigenous_style side_main">
                    <SideBarArtist/>
                </div>
                <div className="indigenous_style main_child">
                    <div className="container row indigenous_style albums">
                        {about_artist_card}
                    </div>
                    <>
                        Albums
                        <div className="container row indigenous_style albums">
                            {albumCard_}
                        </div>
                    </>
                    <>
                        Singles
                        <div className="indigenous_style singles">
                            {single_card}
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}
