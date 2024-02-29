import React, { useEffect, useState } from "react";
import { StateType } from "../redux/root-reducer";
import { useParams } from "react-router-dom";
import { getAlbumAction } from "../redux/album_/albumSlice";
import { useDispatch, useSelector } from "react-redux";

// custom CSS
import './home.css'

import SideBarArtist from '../components/sideBarArtist';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { song_type } from "../interfaces/interfaces";
import CreateSongPopupForm from "../components/newSongPopupForm";
import DeleteSongPopupForm from "../components/deleteSongPopupForm";
import SongCardMorePopupForm from "../components/updateSongPopupForm";

export default function AlbumPage(){
    type ParamsType = {
        artistId?: string;
        albumId?: string;
    }

    const payload_ = useSelector((state: StateType) => state.albums);

    const { artistId, albumId }: ParamsType = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAlbumAction(albumId as string));
    }, [albumId]);

    const [showNewSongPopup, setShowNewSongPopup] = useState(false);

    const handleShowNewPopup = () => setShowNewSongPopup(true);
    const handleCloseNewSongPopup = () => {
        dispatch(getAlbumAction(albumId as string));
        setShowNewSongPopup(false);
    }
    const [selectedSong, setSelectedSong] = useState<song_type | null>(null);

    const [showDeleWarn, setShowDeleWarn] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const songs_ = payload_.album.data?.songs;

    const handleDeleteWarnPopup = (song: song_type) => {
        setSelectedSong(song)
        setShowDeleWarn(true);
    };

    const handleCloseWarnPopup = () => {
        dispatch(getAlbumAction(albumId as string));
        setShowDeleWarn(false)
    };

    const handleUpdatePopup = (album: song_type) => {
        setSelectedSong(album)
        setShowUpdateForm(true);
    };

    const handleCloseUpdatePopup = () => {
        dispatch(getAlbumAction(albumId as string));
        setShowUpdateForm(false)
    };


    const songs_card = songs_?.map(song => (
        <Card>
            <Card.Body  className="indigenous_style single_song">
                <div className="indigenous_style single_song_info">
                    <Card.Text className="indigenous_style single_item">{song.title}</Card.Text>
                    <Card.Text className="indigenous_style single_item">{song.genre}</Card.Text>  
                    <Card.Text className="indigenous_style single_item">{(song.duration).toString()}</Card.Text>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleUpdatePopup(song)}>Update</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteWarnPopup(song)}>Delete</Dropdown.Item>
                        <DeleteSongPopupForm show={showDeleWarn && selectedSong === song} handleClose={handleCloseWarnPopup} albumId={payload_.album.data?._id as string} songId={song._id} />
                        <SongCardMorePopupForm show={showUpdateForm && selectedSong === song } handleClose={handleCloseUpdatePopup} song_u={song} albumId={payload_.album.data?._id as string} />
                        {/* <DeleteWarnPopupForm show={showSingleDeleWarn && selectedSong === single} handleClose={handleCloseSingleWarnPopup} itemId={single._id} what={deleted_items.single} /> */}
                        {/* <SingleCardMorePopupForm show={showSingleUpdateForm && selectedSong === single} handleClose={handleCloseSingleUpdatePopup} single_u={single}/> */}
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>

            {/* <Card.Body>
                <Card.Text>{song.title}  {song.genre}  {song.duration.toString()}</Card.Text>
            </Card.Body> */}
        </Card>
    ))
    const about_album_card = (
        <Card className="bg-dark text-white ">
            <Card.Img src={"https://imgur.com/RDxhZsI.png"} alt="Card image" /> 
            <Card.ImgOverlay className='indigenous_style artist_card_overlay'>
                <div className="indigenous_style artist_card_top">
                    <div></div>
                    <Dropdown >
                        <Dropdown.Toggle className="indigenous_style artist_card_icon_btn">
                            
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {}}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
                            <Dropdown.Item onClick={handleShowNewPopup}>New Song</Dropdown.Item>
                            <CreateSongPopupForm show={showNewSongPopup} handleClose={handleCloseNewSongPopup} artistId={artistId as string} albumId={albumId as string} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="indigenous_style artist_card_bottom">
                    <Card.Title>
                        {payload_.album.data?.title}
                    </Card.Title>
                    <Card.Text>
                        Relased at: {payload_.album.data?.release_date.toString().substr(0,10)}
                    </Card.Text>
                    {/* {JSON.stringify(payload_)} */}
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
                        {about_album_card}
                    </div>
                    {/* {JSON.stringify(payload_.album.data)} */}
                    <>
                        Songs
                        <div className="indigenous_style singles">
                            {songs_card}
                        </div>
                    </>
                </div>
            </div>
        </>
        // <div>
        //     {JSON.stringify(payload_.album.data)}
        // </div>
    )
}