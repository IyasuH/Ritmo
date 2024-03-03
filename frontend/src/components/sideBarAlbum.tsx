import Card from 'react-bootstrap/Card';
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// custom CSS
import './SideBarHome.css';
import { StateType } from '../redux/root-reducer';
import { getNumberOfAlbumsSongsAction } from '../redux/albums_stastics/albumStatSlice';
import { useDispatch, useSelector } from 'react-redux';
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
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Platform Statistics</Card.Title>
                    <Card.Text>Total Number of songs: <mark>{albumsNumberOfSongs.data?.songCount}</mark></Card.Text>
            </Card.Body>
            {/* {JSON.stringify({"totalNumberOfGenres": totalNumberOfGenres})} */}
        </Card>
    )
    return (
        <div className="indigenous_style sidebarComponents">
            <img src="" alt="" />
            {/* < StatisticCardComponent/> */}
            {albumStatCard}
            <div className="col-md-1 indigenous_style button_container">
                <Button variant="primary" className="indigenous_style button_1">Artist</Button>
                <Button variant="primary" className="indigenous_style button_1">Album</Button>
                <Button variant="primary" className="indigenous_style button_1">Genre</Button>
                <Button variant="primary" className="indigenous_style button_1">Songs</Button>
            </div>
        </div>
    )
}

export default SideBarAlbum;