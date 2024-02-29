import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { song_type, SongStateType, song_form_type } from "../../interfaces/interfaces";

const songInitalState : SongStateType = {
    song: {
        data: null,
        isLoading: false,
        errors: '',
    },
    song_create: {
        data: null,
        isLoading: false,
        errors: '',
    },
    song_delete: {
        data: null,
        isLoading: false,
        errors: '',
    },
    song_update: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const songSlice = createSlice({
    name: "songs",
    initialState: songInitalState,
    reducers: {
        // 
        // to get one song
        getSongAction: (state: SongStateType, {payload: [artist_id, album_id, song_id]}: PayloadAction<[string, string, string]>) => {
            state.song.isLoading = true;
            state.song.errors = '';
        },
        getSongSuccessAction: (state: SongStateType, {payload: song}: PayloadAction<song_type>) => {
            state.song.isLoading = false;
            state.song.data = song;
        },
        getSongErrorAction: (state: SongStateType, {payload: error}: PayloadAction<string>) => {
            state.song.isLoading = false;
            state.song.errors = error;
        },

        // create new song
        createSongAction: (state: SongStateType, {payload: [song_create, artist_id, album_id]}: PayloadAction<[song_form_type, string, string]>) => {
            state.song_create.isLoading = true;
            state.song_create.errors = '';
        },
        createSongSuccessAction: (state: SongStateType, {payload: song_create}: PayloadAction<song_form_type>) => {
            // when create new song is a success it will return the song
            state.song_create.isLoading = false;
            state.song_create.data = song_create;
        },
        createSongErrorAction: (state: SongStateType, {payload: error}: PayloadAction<string>) => {
            state.song_create.isLoading = false;
            state.song_create.errors = error;
        },

        // to delete song
        deleteSongAction: (state: SongStateType, {payload: [album_id, song_id]}: PayloadAction<[string, string]>) => {
            state.song_delete.isLoading = true;
            state.song_delete.errors = '';
        },
        deleteSongSuccessAction: (state: SongStateType, {payload: song_delete}: PayloadAction<song_type>) => {
            state.song_delete.isLoading = false;
            state.song_delete.data = song_delete;
        },
        deleteSongErrorAction: (state: SongStateType, {payload: error}: PayloadAction<string>) => {
            state.song_delete.isLoading = false;
            state.song_delete.errors = error;
        },
        // to update song
        updateSongAction: (state: SongStateType, {payload: [song_update, album_id]}: PayloadAction<[song_type, string]>) => {
            state.song_update.isLoading = true;
            state.song_update.errors = '';
        },
        updateSongSuccessAction: (state: SongStateType, {payload: song_update}: PayloadAction<song_type>) =>{
            state.song_update.isLoading = true;
            state.song_update.data = song_update;
        },
        updateSongErrorAction: (state: SongStateType, {payload: error}: PayloadAction<string>) => {
            state.song_update.isLoading = false;
            state.song_update.errors = error;
        },

    }
});
export const {
    // 
    getSongAction,
    getSongSuccessAction,
    getSongErrorAction,
    // 
    createSongAction,
    createSongSuccessAction,
    createSongErrorAction,
    // 
    deleteSongAction,
    deleteSongSuccessAction,
    deleteSongErrorAction,
    // 
    updateSongAction,
    updateSongSuccessAction,
    updateSongErrorAction
} = songSlice.actions;

export default songSlice.reducer;