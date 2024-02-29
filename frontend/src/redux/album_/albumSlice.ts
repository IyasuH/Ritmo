import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { album_type, AlbumStateType, album_form_type } from "../../interfaces/interfaces";


const albumInitalState: AlbumStateType = {
    album: {
        data: null,
        isLoading: false,
        errors: '',
    },
    album_create: {
        data: null,
        isLoading: false,
        errors: '',
    },
    album_delete: {
        data: null,
        isLoading: false,
        errors: '',
    },
    album_update: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const albumSlice = createSlice({
    name: "albums",
    initialState: albumInitalState,
    reducers: 
        {
        // to get one album
        getAlbumAction: (state: AlbumStateType, {payload: id}: PayloadAction<string>) => {
            state.album.isLoading = true;
            state.album.errors = '';
        },
        getAlbumSuccessAction: (state: AlbumStateType, {payload: album}: PayloadAction<album_type>) => {
            state.album.isLoading = false;
            state.album.data = album;
        },
        getAlbumErrorAction: (state: AlbumStateType, {payload: error}: PayloadAction<string>) => {
            state.album.isLoading = false;
            state.album.errors = error;
        },
    
        // create new album
        createAlbumAction: (state: AlbumStateType, {payload: [album_create, artist_id]}: PayloadAction<[album_form_type, string]>) => {
            state.album_create.isLoading = true;
            state.album_create.errors = '';
        },
        createAlbumSuccessAction: (state: AlbumStateType, {payload: album_create}: PayloadAction<album_form_type>) => {
            // when create new album is a success it will return the album
            state.album_create.isLoading = false;
            state.album_create.data = album_create;
        },
        createAlbumErrorAction: (state: AlbumStateType, {payload: error}: PayloadAction<string>) => {
            state.album_create.isLoading = false;
            state.album_create.errors = error;
        },
        // to delete album
        deleteAlbumAction: (state: AlbumStateType, {payload: id}: PayloadAction<string>) => {
            state.album_delete.isLoading = true;
            state.album_delete.errors = '';
        },
        deleteAlbumSuccessAction: (state: AlbumStateType, {payload: album_delete}: PayloadAction<album_type>) => {
            state.album_delete.isLoading = false;
            state.album_delete.data = album_delete;
        },
        deleteAlbumErrorAction: (state: AlbumStateType, {payload: error}: PayloadAction<string>) => {
            state.album_delete.isLoading = false;
            state.album_delete.errors = error;
        },
        // to update album
        updateAlbumAction: (state: AlbumStateType, {payload: album_update}: PayloadAction<album_type>) => {
            state.album_update.isLoading = true;
            state.album_update.errors = '';
        },
        updateAlbumSuccessAction: (state: AlbumStateType, {payload: album_update}: PayloadAction<album_type>) =>{
            state.album_update.isLoading = true;
            state.album_update.data = album_update;
        },
        updateArtistErrorAction: (state: AlbumStateType, {payload: error}: PayloadAction<string>) => {
            state.album_update.isLoading = false;
            state.album_update.errors = error;
        },


    }
});

export const {
    createAlbumAction,
    createAlbumSuccessAction,
    createAlbumErrorAction,
    // 
    deleteAlbumAction,
    deleteAlbumSuccessAction,
    deleteAlbumErrorAction,
    // 
    updateAlbumAction,
    updateAlbumSuccessAction,
    updateArtistErrorAction,
    // 
    getAlbumAction,
    getAlbumSuccessAction,
    getAlbumErrorAction
} = albumSlice.actions;

export default albumSlice.reducer;