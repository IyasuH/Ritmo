import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";


import {
    getSongSuccessAction,
    getSongErrorAction,
    // 
    createSongSuccessAction,
    createSongErrorAction,

    deleteSongSuccessAction,
    deleteSongErrorAction,
    // 
    updateSongSuccessAction,
    updateSongErrorAction

} from "./songSlice";

import { song_type } from "../../interfaces/interfaces";
import { BASE_URL } from "../config";

function* createSongSaga({payload: [song, artist_id, album_id]}: PayloadAction<[song_type, string, string]>){
    try{
        // 
        const response: AxiosResponse<song_type> = yield axios.post(`${BASE_URL}/api/newSong/artist/${artist_id}/album/${album_id}`, song) // i have to pass artist_id and album_id as a parameter
        yield put(createSongSuccessAction(response.data));        
    } catch (error) {
        yield put(createSongErrorAction(error as string));
    }
}

function* deleteSongSaga({payload: [albumId, songId]}: PayloadAction<[string, string]>){
    try{
        const response: AxiosResponse<song_type> = yield axios.delete(`${BASE_URL}/api/deleteSong/album/${albumId}/songs/${songId}`)
        yield put(deleteSongSuccessAction(response.data));
    } catch (error) {
        yield put(deleteSongErrorAction(error as string));
    }
 }

 function* updateSongSaga({payload: [song, albumId]}: PayloadAction<[song_type, string]>){
    try{
        // 
        const response: AxiosResponse<song_type> = yield axios.put(`${BASE_URL}/api/updateSong/album/${albumId}/songs/${song._id}`, song)
        yield put(updateSongSuccessAction(response.data));
    }catch (error){
        // 
        yield put(updateSongErrorAction(error as string));
    }
}


export function* watchCreateSong(){
    yield takeLatest('songs/createSongAction', createSongSaga)
}

export function* watchDeleteSong(){
    yield takeLatest('songs/deleteSongAction', deleteSongSaga)
}

export function* watchUpdateSong(){
    yield takeLatest('songs/updateSongAction', updateSongSaga)
}
