import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumStasticsStateType, album_songs_number } from "../../interfaces/interfaces";

const albumStatInitState: AlbumStasticsStateType = {
    albumsNumberOfSongs: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const albumStatSlice = createSlice({
    name: "albumStastics",
    initialState: albumStatInitState,
    reducers: {
        getNumberOfAlbumsSongsAction: (state: AlbumStasticsStateType, {payload: [artist_Id, album_Id]}: PayloadAction<[string, string]>) => {
            state.albumsNumberOfSongs.isLoading = true;
            state.albumsNumberOfSongs.errors = '';
        },
        getNumberOfAlbumsSongsSuccessAction: (state: AlbumStasticsStateType, {payload: totalNumberOfSongs}: PayloadAction<album_songs_number>) => {
            state.albumsNumberOfSongs.isLoading = false;
            state.albumsNumberOfSongs.data = totalNumberOfSongs;
        },
        getNumberOfAlbumsSongsErrorAction: (state: AlbumStasticsStateType, {payload: error}: PayloadAction<string>) => {
            state.albumsNumberOfSongs.isLoading = false;
            state.albumsNumberOfSongs.errors = error;
        },

    }
});

export const {
    getNumberOfAlbumsSongsAction,
    getNumberOfAlbumsSongsSuccessAction,
    getNumberOfAlbumsSongsErrorAction,
    // 
} = albumStatSlice.actions;

export default albumStatSlice.reducer;