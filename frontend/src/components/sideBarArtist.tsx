import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// custom CSS
import './SideBarHome.css';
import { StateType } from '../redux/root-reducer';
import { getNumberOfArtistsSongsAction, getNumberOfArtitsAlbumAction } from '../redux/artists_stastics/artistStatSlice';
import { useDispatch, useSelector } from 'react-redux';
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
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Platform Statistics</Card.Title>
                    <Card.Text>Total Number of songs: <mark>{artistsNumberOfSongs.data?.total}</mark></Card.Text>
                    <Card.Text>Total Number of Single Songs: <mark>{artistsNumberOfSongs.data?.single_songs}</mark></Card.Text>
                    <Card.Text>Total Number of Album Songs: <mark>{artistsNumberOfSongs.data?.albums_songs}</mark></Card.Text>
                    <Card.Text>Total Number of albums: <mark>{artistsNumberOfAlbums.data?.totalAlbums}</mark></Card.Text>
                    <>Can also define for genres</>
            </Card.Body>
            {/* {JSON.stringify({"totalNumberOfGenres": totalNumberOfGenres})} */}
        </Card>
    )
    return (
        <div className="indigenous_style sidebarComponents">
            <img src="" alt="" />
            {/* < StatisticCardComponent/> */}
            {artistStatCard}
            <div className="col-md-1 indigenous_style button_container">
                <Button variant="primary" className="indigenous_style button_1">Artist</Button>
                <Button variant="primary" className="indigenous_style button_1">Album</Button>
                <Button variant="primary" className="indigenous_style button_1">Genre</Button>
                <Button variant="primary" className="indigenous_style button_1">Songs</Button>
            </div>
        </div>
    )
}

export default SideBarArtist;