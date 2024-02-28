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

import ArtistCardMorePopupForm from './updateaAtistPopupForm';
// import ArtistDeleteWarnPopupForm from './deleteArtistWarnPopup';
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

    const artistCard_ = artists?.map(artist => (
        <div className="col-md-3">
            <Card key={artist._id} 
                // style={{ width: '18rem' }}
                className="indigenous_style artist_card">
                <Link to={`/artist/${artist._id}`}>
                    <div className="text-center indigenous_style artist_image">
                        <Card.Img variant="top" src={artist.img_url} style={{ height: '100%', width: 'auto' }} />
                    </div>
                </Link>
                <Card.Footer className="indigenous_style artist_compt">
                    <div className="indigenous_style artist_summ">
                        <Card.Text>
                            <strong>{artist.full_name}</strong>
                        </Card.Text>
                        <Card.Text>Albums: {artist.single.length}</Card.Text>
                        {/* <Card.Text>Single songs: {artist.albums.length}</Card.Text>
                        <Card.Text>
                            50 songs
                        </Card.Text> */}
                    </div>
                    {/* <Button variant="secondary" style={{ height: '50%', width: '15%' }} onClick={handleMoreButtonClick}>
                        <IoMdMore />
                    </Button> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            {/* <IoMdMore /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleShowMorePopup(artist)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(artist)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* for some reason this popups are making the background screen to be blank invetegate  */}
                    <ArtistCardMorePopupForm show={showMorePopup && selectedArtist === artist} handleClose={handleCloseShowMorePopup} artist_u={artist}/>
                    <DeleteWarnPopupForm show={showDeleWarn && selectedArtist === artist} handleClose={handleCloseWarnPopup} itemId={artist._id} what={deleted_items.artist} />
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>{artistCard_}</>
    )    
}

export default ArtistCard;
