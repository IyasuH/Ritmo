import React, { useEffect, useState } from "react";
import { StateType } from "../redux/root-reducer";
import { useParams } from "react-router-dom";
import { getAlbumAction } from "../redux/album_/albumSlice";
import { useDispatch, useSelector } from "react-redux";

// custom CSS
import './home.css'

import { Card, Dropdown } from 'react-bootstrap';
import { song_type } from "../interfaces/interfaces";
import CreateSongPopupForm from "../components/Input/newSongPopupForm";
import DeleteSongPopupForm from "../components/deleteSongPopupForm";
import SongCardMorePopupForm from "../components/Input/updateSongPopupForm";
import SideBarAlbum from "../components/sideBarAlbum";

import { MainbarComp } from '../components/MainBar/mainbar.style';

import { LineCard, LineCardSingles, LineCardInfo, CardItem } from "../components/Card/card.style";

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


    // this function is used to convert second values to minute:seconds
    function  convertSecondsToMinutesAndSeconds(seconds: Number): string {
        var minutes = Math.floor(seconds.valueOf() / 60); 
        var remainingSeconds = seconds.valueOf() % 60; 

        var formattedTime = minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
      
        return formattedTime;
      }

    const songs_card = songs_?.map(song => (
        <div>
            <LineCard>
                <LineCardSingles>
                    <LineCardInfo>
                        <CardItem>{song.title}</CardItem>
                        <CardItem>{song.genre}</CardItem>
                        <CardItem>{(convertSecondsToMinutesAndSeconds(song.duration)).toString()}</CardItem>
                    </LineCardInfo>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleUpdatePopup(song)}>Update</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteWarnPopup(song)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </LineCardSingles>
            </LineCard>
            <DeleteSongPopupForm show={showDeleWarn && selectedSong === song} handleClose={handleCloseWarnPopup} albumId={payload_.album.data?._id as string} songId={song._id} />
            <SongCardMorePopupForm show={showUpdateForm && selectedSong === song } handleClose={handleCloseUpdatePopup} song_u={song} albumId={payload_.album.data?._id as string} />
        </div>
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
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <CreateSongPopupForm show={showNewSongPopup} handleClose={handleCloseNewSongPopup} artistId={artistId as string} albumId={albumId as string} />
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
        <MainbarComp>
            <SideBarAlbum artist_Id={artistId || ''} album_Id={albumId || ''} />
            <div className="indigenous_style main_child">
                <div className="container row indigenous_style albums">
                    {about_album_card}
                </div>
                {/* {JSON.stringify(payload_.album.data)} */}
                <>
                    Songs
                    <div>
                        {songs_card}
                    </div>
                </>
            </div>
        </MainbarComp>
    )
}