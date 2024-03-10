import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfAlbumsAction, getNumberOfArtistsAction, getNumberOfGenresAction, getNumberOfSongsAction } from "../redux/stastics_/stasticSlice";
import { StateType } from "../redux/root-reducer";
import { StasticCard, StasticValue } from "./Card/card.style";
import { StatCard } from "./Card/card.style";

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
            <StasticCard>
                Total Number of Songs
                <StasticValue>{totalNumberOfSongs.data?.total}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Single Songs
                <StasticValue>{totalNumberOfSongs.data?.single_songs}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Album Songs
                <StasticValue>{totalNumberOfSongs.data?.albums_songs}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Artists
                <StasticValue>{totalNumberOfArtists.data?.artists_number}</StasticValue>
            </StasticCard>
            <StasticCard>
                Total Number of Albums
                <StasticValue>{totalNumberOfAlbums.data?.album_number}</StasticValue>
            </StasticCard>
            <div>
                Number of Songs for each genre
                <div>
                    {Object.entries(totalNumberOfGenres.data as object).map(([genre_name, genre_value]) => {
                        return (
                            <StasticCard>
                                {genre_name} <StasticValue>{genre_value}</StasticValue>
                            </StasticCard>
                        );
                    })}
                </div>
            </div>
        </StatCard>
    )
}
export default StatisticCardComponent;