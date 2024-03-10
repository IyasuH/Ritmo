import React, { useEffect, useState } from "react";
import { StateType } from "../redux/root-reducer";
import { useParams } from "react-router-dom";
import { getAlbumAction } from "../redux/album_/albumSlice";
import { useDispatch, useSelector } from "react-redux";

// custom CSS
import './home.css'

import { Dropdown } from 'react-bootstrap';
import { song_type } from "../interfaces/interfaces";
import CreateSongPopupForm from "../components/Input/newSongPopupForm";
import DeleteSongPopupForm from "../components/deleteSongPopupForm";
import SongCardMorePopupForm from "../components/Input/updateSongPopupForm";
import SideBarAlbum from "../components/sideBarAlbum";
import { CardContainer } from "../components/Card/card.style";
import { MainbarComp } from '../components/MainBar/mainbar.style';

import { LineCard, LineCardSingles, LineCardInfo, CardItem } from "../components/Card/card.style";
import { HeroCard, HeroCardItem, HeroCardProps } from "../components/heroCard/heroCard.style";

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

    const AlbumHeroCard: React.FC<HeroCardProps> =({
        base_color,
        color_1,
        color_2,
    }) => (
        <div>
            <HeroCard
                base_color={base_color}
                color_1={color_1}
                color_2={color_2}
            >
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">        
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* <Dropdown.Item onClick={() => {}}>Update</Dropdown.Item>
                        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item> */}
                        <Dropdown.Item onClick={handleShowNewPopup}>New Song</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <HeroCardItem>
                    <h3><b>
                        {payload_.album.data?.title}
                    </b></h3>
                    <p>
                        Relased at: {payload_.album.data?.release_date.toString().substr(0,10)}
                    </p>
                </HeroCardItem>
            </HeroCard>
            <CreateSongPopupForm show={showNewSongPopup} handleClose={handleCloseNewSongPopup} artistId={artistId as string} albumId={albumId as string} />
        </div>
    )
    const artist_hero_color = [
        {
            'base_color': '#757575',
            'color_1': '#cddc39',
        },
        {
            'base_color': '#757575',
            'color_1': '#8bc34a',
        },
        {
            'base_color': '#757575',
            'color_1': '#7a49cf',
        },
        {
            'base_color': '#757575',
            'color_1': '#009688',
        },
        {
            'base_color': '#757575',
            'color_1': '#ff9800',
        },
        {
            'base_color': '#ffffff',
            'color_1': '#3f51b5',
        },
        {
            'base_color': '#ffffff',
            'color_1': '#e6316d'
        }
    ]

    function tocolor(str_val:string) {
        var hash=0;
        // if (str_val.length === 0) re
        for (var i=0; i<str_val.length; i++){
            hash = str_val.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }
        hash = ((hash % artist_hero_color.length) + artist_hero_color.length)%artist_hero_color.length;
        return artist_hero_color[hash];
    }

    return (
        <MainbarComp>
            <SideBarAlbum artist_Id={artistId || ''} album_Id={albumId || ''} />
            <CardContainer>
                <AlbumHeroCard
                    base_color={tocolor(payload_.album.data?.title || '').base_color}
                    color_1={tocolor(payload_.album.data?.title || '').color_1}
                    color_2="#9e9e9e"
                />
                <>
                    Songs
                    <div>
                        {songs_card}
                    </div>
                </>
            </CardContainer>
        </MainbarComp>
    )
}