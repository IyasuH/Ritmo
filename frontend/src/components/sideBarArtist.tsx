import React, { useEffect } from "react";
// custom CSS
import './SideBarHome.css';
import { StateType } from '../redux/root-reducer';
import { getNumberOfArtistsSongsAction, getNumberOfArtitsAlbumAction } from '../redux/artists_stastics/artistStatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StasticCard, StasticValue } from "./Card/card.style";
import { StatCard } from "./Card/card.style";
import { SidebarComp } from "./Sidebar/sidebar.style";
import SideButton from "./sideButtons";

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
        </StatCard>
    )
    return (
        <SidebarComp>
            {artistStatCard}
            < SideButton/>
        </SidebarComp>
    )
}

export default SideBarArtist;