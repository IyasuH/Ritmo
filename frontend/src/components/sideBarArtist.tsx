import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// custom CSS
import './SideBarHome.css';
import { StateType } from '../redux/root-reducer';
import { getNumberOfArtistsSongsAction, getNumberOfArtitsAlbumAction } from '../redux/artists_stastics/artistStatSlice';
import { OtherButton, OtherButtonContainer } from "./Button/button.style";
import { useDispatch, useSelector } from 'react-redux';
import { StasticCard, StasticValue } from "./Card/card.style";
import { StatCard } from "./Card/card.style";
import { SidebarComp } from "./Sidebar/sidebar.style";
import LogoComponent from "./logo";

interface SideBarArtistProps {
    artist_Id: string;
  }
const SideBarArtist: React.FC<SideBarArtistProps> = ({ artist_Id }) => {
    const {artistsNumberOfSongs, artistsNumberOfAlbums } = useSelector((state: StateType) => state.artistStastics)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNumberOfArtistsSongsAction(artist_Id as string));
        dispatch(getNumberOfArtitsAlbumAction(artist_Id as string));
    }, [])
    const artistStatCard =(
        <StatCard>
            <h4>Artist Statistics</h4>
            <StasticCard>
                Total Number of songs
                <StasticValue>{artistsNumberOfSongs.data?.total}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Single Songs
                <StasticValue>{artistsNumberOfSongs.data?.single_songs}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Album Songs
                <StasticValue>{artistsNumberOfSongs.data?.albums_songs}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of albums
                <StasticValue>{artistsNumberOfAlbums.data?.totalAlbums}</StasticValue>
            </StasticCard>
            {/* <>Can also define for genres</> */}
            {/* {JSON.stringify({"totalNumberOfGenres": totalNumberOfGenres})} */}
        </StatCard>
    )
    return (
        <SidebarComp>
            < LogoComponent/>
            {/* < StatisticCardComponent/> */}
            {artistStatCard}
            <OtherButtonContainer>
                <OtherButton>Artist</OtherButton>
                <OtherButton>Album</OtherButton>
                <OtherButton>Genre</OtherButton>
                <OtherButton>Songs</OtherButton>
            </OtherButtonContainer>
        </SidebarComp>
    )
}

export default SideBarArtist;