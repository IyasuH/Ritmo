import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// custom CSS
import './SideBarHome.css';
import { StateType } from '../redux/root-reducer';
import { getNumberOfAlbumsSongsAction } from '../redux/albums_stastics/albumStatSlice';
import { OtherButton, OtherButtonContainer } from "./Button/button.style";
import { useDispatch, useSelector } from 'react-redux';

import { StasticCard, StasticValue } from "./Card/card.style";
import { StatCard } from "./Card/card.style";
import { SidebarComp } from "./Sidebar/sidebar.style";
import LogoComponent from "./logo";

interface SideBarAlbumProps {
    artist_Id: string;
    album_Id: string;
  }
const SideBarAlbum: React.FC<SideBarAlbumProps> = ({ artist_Id, album_Id }) => {
    const { albumsNumberOfSongs } = useSelector((state: StateType) => state.albumStastics)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNumberOfAlbumsSongsAction([artist_Id, album_Id]));
    }, [artist_Id, album_Id])
    const albumStatCard =(
        <StatCard>
            <h4>Platform Statistics</h4>
            <StasticCard>
                Total Number of songs
                <StasticValue>{albumsNumberOfSongs.data?.songCount}</StasticValue>
            </StasticCard>
        </StatCard>
    )
    return (
        <SidebarComp>
            < LogoComponent/>
            {/* < StatisticCardComponent/> */}
            {albumStatCard}
            <OtherButtonContainer>
                <OtherButton>Artist</OtherButton>
                <OtherButton>Album</OtherButton>
                <OtherButton>Genre</OtherButton>
                <OtherButton>Songs</OtherButton>
            </OtherButtonContainer>
        </SidebarComp>
    )
}

export default SideBarAlbum;