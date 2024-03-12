import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { 
    createAlbumSuccessAction,
    createAlbumErrorAction,
    deleteAlbumSuccessAction,
    deleteAlbumErrorAction,
    updateAlbumSuccessAction,
    updateArtistErrorAction,
    getAlbumSuccessAction,
    getAlbumErrorAction
 } from "./albumSlice";

 import { album_type } from "../../interfaces/interfaces";
import { BASE_URL } from "../config";

 function* getAlbumSaga({payload: id}: PayloadAction<string>) {
    try{
        const response: AxiosResponse<album_type> = yield axios.get(`${BASE_URL}/api/getAlbum/${id}`)
        yield put(getAlbumSuccessAction(response.data))
    } catch (error){
        yield put(getAlbumErrorAction(error as string));
    }
}
 
 function* createAlbumSaga({payload: [album, artist_id]}: PayloadAction<[album_type, string]>){
    try{
        const response: AxiosResponse<album_type> = yield axios.post(`${BASE_URL}/api/newAlbum/${artist_id}`, album) // i have to pass artist_id as a parameter
        yield put(createAlbumSuccessAction(response.data));
    } catch (error){
        yield put(createAlbumErrorAction(error as string));
    }
 }

 function* deleteAlbumSaga({payload: id}: PayloadAction<string>){
    try{
        const response: AxiosResponse<album_type> = yield axios.delete(`${BASE_URL}/api/deleteAlbum/${id}`)
        yield put(deleteAlbumSuccessAction(response.data));
    } catch (error) {
        yield put(deleteAlbumErrorAction(error as string));
    }
 }

function* updateAlbumSaga({payload: album}: PayloadAction<album_type>){
    try{
        // 
        const response: AxiosResponse<album_type> = yield axios.put(`${BASE_URL}/api/updateAlbum/${album._id}`, album)
        yield put(updateAlbumSuccessAction(response.data));
    }catch (error){
        // 
        yield put(updateArtistErrorAction(error as string));
    }
}

export function* watchGetAlbum(){
    yield takeLatest('albums/getAlbumAction', getAlbumSaga)
}

export function* watchCreateAlbum(){
    yield takeLatest('albums/createAlbumAction', createAlbumSaga)
}

export function* watchDeleteAlbum() {
    yield takeLatest('albums/deleteAlbumAction', deleteAlbumSaga)
}

export function* watchUpdateAlbum() {
    yield takeLatest('albums/updateAlbumAction', updateAlbumSaga)
}
