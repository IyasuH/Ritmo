import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { artist_type, ArtistStateType, artist_form_type } from "../../interfaces/interfaces";

const artistInitalState: ArtistStateType = {
    artist: {
        data: null,
        isLoading: false,
        errors: '',
    },
    artist_create: {
        data: null,
        isLoading: false,
        errors: '',
    },
    artist_list: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const artistsSlice = createSlice({
    name: "artists",
    initialState: artistInitalState,
    reducers: 
        // to get one artist
        {
        getArtistAction: (state: ArtistStateType, {payload: id}: PayloadAction<string>) => {
            state.artist.isLoading = true;
            state.artist.errors = '';
        },
        getArtistSuccessAction: (state: ArtistStateType, {payload: artist}: PayloadAction<artist_type>) => {
            state.artist.isLoading = false;
            state.artist.data = artist;
        },
        getArtistErrorAction: (state: ArtistStateType, {payload: error}: PayloadAction<string>) => {
            state.artist.isLoading = false;
            state.artist.errors = error;
        },
        // to create new artist
        craeteArtistAction: (state: ArtistStateType, {payload: artist_create}: PayloadAction<artist_form_type>) => {
            state.artist_create.isLoading = true;
            state.artist_create.errors ='';
        },
        createArtistSuccessAction: (state: ArtistStateType, {payload: artist_create}: PayloadAction<artist_form_type>) => {
            // when create new arrist is a success it will return the artist
            state.artist_create.isLoading = false;
            state.artist_create.data = artist_create;
        },
        createArtistErrorAction: (state: ArtistStateType, {payload: error}: PayloadAction<string>) => {
            state.artist_create.isLoading = false;
            state.artist_create.errors = error;
        },
        // This reducers are just to manage the state of the forms
        // setForm: (state: ArtistStateType, {payload: artist_create}: PayloadAction<artist_form_type>) => {
        //     state.artist_create.data = artist_create;
        // },
        // clearForm: (state: ArtistStateType) => {
        //     state.artist_create.data = null;
        // }
        // to list all artists
        getAllArtistsAction: (state: ArtistStateType) => {
            state.artist_list.isLoading = true;
            state.artist_list.errors = '';
        },
        getAllArtistsSuccessAction: (state: ArtistStateType, {payload: artist_list}: PayloadAction<[artist_type]>) => {
            state.artist_list.isLoading = false;
            state.artist_list.data = artist_list;
        },
        getAllArtistsErrorAction: (state: ArtistStateType, {payload: error}: PayloadAction<string>) => {
            state.artist_list.isLoading = false;
            state.artist_list.errors = error;
        },

    }
});

export const {
    getArtistAction,
    getArtistSuccessAction,
    getArtistErrorAction,
    // 
    craeteArtistAction,
    createArtistSuccessAction,
    createArtistErrorAction,
    // setForm,
    // clearForm,
    getAllArtistsAction,
    getAllArtistsSuccessAction,
    getAllArtistsErrorAction
} = artistsSlice.actions;

export default artistsSlice.reducer;
