import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { Alert, Button, Dropdown } from "react-bootstrap";
import { IoMdMore } from 'react-icons/io';
import { getAllArtistsAction } from "../redux/artist_/artistSlice";

// custom CSS
import './artistCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../redux/root-reducer';

import ArtistCardMorePopupForm from './Input/updateaArtistPopupForm';
import { SquareCard, CardFooterStyle, CardGrid, CardInfo, CardTextStyle, AroundCardImg, CardImg } from './Card/card.style';

import { artist_type } from '../interfaces/interfaces';
import DeleteWarnPopupForm, { deleted_items } from './deleteWarnPopup';

const ArtistCard  = () => {
    const payload_ = useSelector((state: StateType)=>state.artists);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArtistsAction());
    },[]);
    var artists = payload_.artist_list.data;
    // console.log("[INFO] artist list payload: ", JSON.stringify(payload_.artist_list.data))

    const [showMorePopup, setShowMorePopUp] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);

    const [showDeleWarn, setShowDeleWarn] = useState(false);

    const [selectedArtist, setSelectedArtist] = useState<artist_type | null>(null);

    const handleMoreButtonClick = () => {
        setShowDropdown(!showDropdown);
    }

    const handleShowMorePopup = (artist: artist_type) => {
        setSelectedArtist(artist);
        setShowMorePopUp(true);
    };

    const handleCloseShowMorePopup = () =>{
        // [?] This will call getAllArtistAction() every time update popUp is closed which I think is expensive
        dispatch(getAllArtistsAction());
        setShowMorePopUp(false)
    };

    const handleDeleteWarnPopup = (artist: artist_type) => {
        setSelectedArtist(artist);
        setShowDeleWarn(true);
    };

    const handleCloseWarnPopup = () => {
        dispatch(getAllArtistsAction());
        setShowDeleWarn(false);
    };

    // const [isDown, setDown] = useState(false);
    // const toggleIsDown = () => {
    //     setDown(!isDown)
    // }
    interface ArtistCardProps{
        artist: artist_type;
    }
    const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
        const [imageLoadError, setImageLoadError] = useState(false);

        const handleImageLoadError = () =>{
            setImageLoadError(true);
        };

        return (
        <>
            <SquareCard
                key={artist._id}
                backgroundColor={"#f5f5f5"}
            >
                <AroundCardImg>
                    <Link to={`/artist/${artist._id}`}>
                        {imageLoadError ? (
                            <CardImg src="https://imgur.com/Lf76JRO.png" alt='defult image' />
                        ):(
                            <CardImg src={artist.img_url} alt='artist image' onError={handleImageLoadError}  />
                        )}
                    </Link>
                </AroundCardImg>
                <CardFooterStyle>
                    <CardInfo>
                        <CardTextStyle>
                            <strong>{artist.full_name}</strong>
                        </CardTextStyle>
                        <CardTextStyle>Albums: {artist.single.length}</CardTextStyle>
                    </CardInfo>

                    {/* <CustomDropdown display={({ isDown }) => (isDown ? 'block' : 'none')}>
                        <CustDropdownBtn onClick={toggleIsDown}>
                            <span>▼</span>
                        </CustDropdownBtn>
                        <CustDropdownCont>
                            <a href='#'>Update</a>
                            <a href='#'>Delete</a>
                        </CustDropdownCont>
                    </CustomDropdown> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            {/* <IoMdMore /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleShowMorePopup(artist)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(artist)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </CardFooterStyle>
            </SquareCard>
            <DeleteWarnPopupForm show={showDeleWarn && selectedArtist === artist} handleClose={handleCloseWarnPopup} itemId={artist._id} what={deleted_items.artist} />
            <ArtistCardMorePopupForm show={showMorePopup && selectedArtist === artist} handleClose={handleCloseShowMorePopup} artist_u={artist}/>
        </>

    );
    }

    const artistCard_ = artists?.map((artist: artist_type) => (
        <ArtistCard artist={artist}/>
      ));

    return (
        <CardGrid>{artistCard_}</CardGrid>
    )    
}

export default ArtistCard;
