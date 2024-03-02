import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { total_number_Songs_type, total_number_artist_type, total_number_album_type, total_number_genre_type, BasicStasticsStateType } from "../../interfaces/interfaces";

 const staticTnitialState :  BasicStasticsStateType = {
    totalNumberOfSongs: {
        data: null,
        isLoading: true,
        errors: ""
    },
    totalNumberOfArtists: {
        data: null,
        isLoading: true,
        errors: ""
    },
    totalNumberOfAlbums: {
        data: null,
        isLoading: true,
        errors: ""
    },
    totalNumberOfGenres: {
        data: {},
        isLoading: true,
        errors: ""
    },
 }

 export const stasticsSlice = createSlice({
    name: "stastics",
    initialState: staticTnitialState,
    reducers: {
        // to get stastics
        getNumberOfSongsAction: (state: BasicStasticsStateType) => {
            state.totalNumberOfSongs.isLoading = true;
            state.totalNumberOfSongs.errors = '';
        },
        getNumberOfSongsSuccessAction: (state: BasicStasticsStateType, {payload: totalNumberOfSongs}: PayloadAction<total_number_Songs_type>) => {
            state.totalNumberOfSongs.isLoading = false;
            state.totalNumberOfSongs.data = totalNumberOfSongs;
        },
        getNumberOfSongsErrorAction: (state: BasicStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.totalNumberOfSongs.isLoading = false;
            state.totalNumberOfSongs.errors = error;
        },

        // Number of artist
        getNumberOfArtistsAction: (state: BasicStasticsStateType) => {
            state.totalNumberOfArtists.isLoading = true;
            state.totalNumberOfArtists.errors = '';
        },
        getNumberOfArtistsSuccessAction: (state: BasicStasticsStateType, {payload: totalNumberOfArtists}: PayloadAction<total_number_artist_type>) => {
            state.totalNumberOfArtists.isLoading = false;
            state.totalNumberOfArtists.data = totalNumberOfArtists;
        },
        getNumberOfArtistsErrorAction: (state: BasicStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.totalNumberOfArtists.isLoading = false;
            state.totalNumberOfArtists.errors = error;
        },

        // Number of album
        getNumberOfAlbumsAction: (state: BasicStasticsStateType) => {
            state.totalNumberOfAlbums.isLoading = true;
            state.totalNumberOfAlbums.errors = '';
        },
        getNumberOfAlbumsSuccessAction: (state: BasicStasticsStateType, {payload: totalNumberOfAlbums}: PayloadAction<total_number_album_type>) => {
            state.totalNumberOfAlbums.isLoading = false;
            state.totalNumberOfAlbums.data = totalNumberOfAlbums;
        },
        getNumberOfAlbumsErrorAction: (state: BasicStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.totalNumberOfAlbums.isLoading = false;
            state.totalNumberOfAlbums.errors = error;
        },

        // Number of genres
        getNumberOfGenresAction: (state: BasicStasticsStateType) => {
            state.totalNumberOfGenres.isLoading = true;
            state.totalNumberOfGenres.errors = '';
        },
        getNumberOfGenresSuccessAction: (state: BasicStasticsStateType, {payload: totalNumberOfGenres}: PayloadAction<total_number_genre_type>) => {
            state.totalNumberOfGenres.isLoading = false;
            state.totalNumberOfGenres.data = totalNumberOfGenres;
        },
        getNumberOfGenresErrorAction: (state: BasicStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.totalNumberOfGenres.isLoading = false;
            state.totalNumberOfGenres.errors = error;
        },
    }
 });

 export const {
    getNumberOfSongsAction,
    getNumberOfSongsSuccessAction,
    getNumberOfSongsErrorAction,
    // 
    getNumberOfArtistsAction,
    getNumberOfArtistsSuccessAction,
    getNumberOfArtistsErrorAction,
    // 
    getNumberOfAlbumsAction,
    getNumberOfAlbumsSuccessAction,
    getNumberOfAlbumsErrorAction,
    //
    getNumberOfGenresAction,
    getNumberOfGenresSuccessAction,
    getNumberOfGenresErrorAction,
 } = stasticsSlice.actions;

 export default stasticsSlice.reducer;