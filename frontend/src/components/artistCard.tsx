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
// import ArtistDeleteWarnPopupForm from './deleteArtistWarnPopup';
import { artist_type } from '../interfaces/interfaces';
import DeleteWarnPopupForm, { deleted_items } from './deleteWarnPopup';
import { CardFooterStyle, CardGrid, CardInfo, CardStyle, CardTextStyle, AroundCardImg, CardImg } from './styled_components/card.style';

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
            <CardStyle key={artist._id}>
                <AroundCardImg>
                    <Link to={`/artist/${artist._id}`}>
                        {imageLoadError ? (
                            <CardImg src="https://imgur.com/Lf76JRO.png" alt='unable to load defult image' />
                        ):(
                            <CardImg src={artist.img_url} alt='' onError={handleImageLoadError}  />
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
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            {/* <IoMdMore /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleShowMorePopup(artist)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(artist)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <DeleteWarnPopupForm show={showDeleWarn && selectedArtist === artist} handleClose={handleCloseWarnPopup} itemId={artist._id} what={deleted_items.artist} />
                </CardFooterStyle>                
            </CardStyle>
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
