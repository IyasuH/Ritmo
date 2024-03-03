import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfAlbumsAction, getNumberOfArtistsAction, getNumberOfGenresAction, getNumberOfSongsAction } from "../redux/stastics_/stasticSlice";
import { StateType } from "../redux/root-reducer";
import { StatCard, CardTextStyle } from "./styled_components/card.style";

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
    return (
        <StatCard>
            <h4>Platform Statistics</h4>
            <p>Total Number of Songs: {totalNumberOfSongs.data?.total}</p>
            <p>Total Number of Single Songs: {totalNumberOfSongs.data?.single_songs}</p>
            <p>Total Number of Album Songs: {totalNumberOfSongs.data?.albums_songs}</p>
            <p>Total Number of Artists: {totalNumberOfArtists.data?.artists_number}</p>
            <p>Total Number of Albums:  {totalNumberOfAlbums.data?.album_number}</p>
            <p>Number of Songs for each genre:</p>
            {Object.entries(totalNumberOfGenres.data as object).map(([genre_name, genre_value]) => {
                return (
                    <CardTextStyle>{genre_name} {genre_value}</CardTextStyle>
                );
            })}
        </StatCard>        
    )
}
export default StatisticCardComponent;