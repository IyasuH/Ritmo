import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArtistStasticsStateType, artist_number_Songs_type, artist_album_number_type } from "../../interfaces/interfaces";

const artsistStatInitState: ArtistStasticsStateType = {
    artistsNumberOfSongs: {
        data: null,
        isLoading: false,
        errors: '',
    },
    artistsNumberOfAlbums: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const artistStatSlice = createSlice({
    name: "artistStastics",
    initialState: artsistStatInitState,
    reducers: {
        // to get Artist's songs stastics
        getNumberOfArtistsSongsAction: (state: ArtistStasticsStateType, {payload: artist_id}: PayloadAction<string>) => {
            state.artistsNumberOfSongs.isLoading = true;
            state.artistsNumberOfSongs.errors = '';
        },
        getNumberOfArtistsSongsSuccessAction: (state: ArtistStasticsStateType, {payload: totalNumberOfSongs}: PayloadAction<artist_number_Songs_type>) => {
            state.artistsNumberOfSongs.isLoading = false;
            state.artistsNumberOfSongs.data = totalNumberOfSongs;
        },
        getNumberOfArtistsSongsErrorAction: (state: ArtistStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.artistsNumberOfSongs.isLoading = false;
            state.artistsNumberOfSongs.errors = error;
        },
        // to get Artist's albums stastics
        getNumberOfArtitsAlbumAction: (state: ArtistStasticsStateType, {payload: artist_id}: PayloadAction<string>) => {
            state.artistsNumberOfAlbums.isLoading = true;
            state.artistsNumberOfAlbums.errors = '';
        },
        getNumberOfArtitsAlbumSuccessAction: (state: ArtistStasticsStateType, {payload: totalNumberOfSongs}: PayloadAction<artist_album_number_type>) => {
            state.artistsNumberOfAlbums.isLoading = false;
            state.artistsNumberOfAlbums.data = totalNumberOfSongs;
        },
        getNumberOfArtitsAlbumErrorAction: (state: ArtistStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.artistsNumberOfAlbums.isLoading = false;
            state.artistsNumberOfAlbums.errors = error;
        },
    }
});

export const {
    getNumberOfArtistsSongsAction,
    getNumberOfArtistsSongsSuccessAction,
    getNumberOfArtistsSongsErrorAction,
    // 
    getNumberOfArtitsAlbumAction,
    getNumberOfArtitsAlbumSuccessAction,
    getNumberOfArtitsAlbumErrorAction,
} = artistStatSlice.actions;

export default artistStatSlice.reducer;