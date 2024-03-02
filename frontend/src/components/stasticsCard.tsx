import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfAlbumsAction, getNumberOfArtistsAction, getNumberOfGenresAction, getNumberOfSongsAction } from "../redux/stastics_/stasticSlice";
import { StateType } from "../redux/root-reducer";

const StatisticCardComponent: React.FC = () => {
    const { totalNumberOfSongs, totalNumberOfArtists, totalNumberOfAlbums, totalNumberOfGenres } = useSelector((state: StateType) => state.stastics);
    // This component is for side Statics card for both Platform and Artist Stastics
    // so the header should be passed and also the list of stastics
    // the function should accept two things hedaers name, and array of statstics 
    const dispatch  = useDispatch();
    useEffect(() => {
        dispatch(getNumberOfSongsAction());
        dispatch(getNumberOfArtistsAction());
        dispatch(getNumberOfAlbumsAction());
        dispatch(getNumberOfGenresAction());
    }, [])
    console.log("[INFO] songs", totalNumberOfSongs)
    console.log("[INFO] artists", totalNumberOfArtists)
    console.log("[INFO] albums", totalNumberOfAlbums)
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Platform Statistics</Card.Title>
                    <Card.Text>Total Number of Songs: <mark>{totalNumberOfSongs.data?.total}</mark></Card.Text>
                        <Card.Text>Total Number of Single Songs: <mark>{totalNumberOfSongs.data?.single_songs}</mark></Card.Text>
                        <Card.Text>Total Number of Album Songs: <mark>{totalNumberOfSongs.data?.albums_songs}</mark></Card.Text>
                    <Card.Text>Total Number of Songs for each genre:</Card.Text>
                    {Object.entries(totalNumberOfGenres.data as object).map(([genre_name, genre_value]) => {
                        return (
                            <Card.Text>{genre_name}<mark>{genre_value}</mark></Card.Text>
                        );
                    })}
                    <Card.Text>Total Number of Artists: <mark>{totalNumberOfArtists.data?.artists_number}</mark></Card.Text>
                    <Card.Text>Total Number of Albums: <mark>{totalNumberOfAlbums.data?.album_number}</mark></Card.Text>
            </Card.Body>
            {/* {JSON.stringify({"totalNumberOfGenres": totalNumberOfGenres})} */}
        </Card>        
    )
}
export default StatisticCardComponent;