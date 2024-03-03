import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
    getNumberOfAlbumsSongsErrorAction,
    getNumberOfAlbumsSongsSuccessAction,
} from "./albumStatSlice";

import { album_songs_number } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
  
function* albumsSongNumber({payload: [artist_id, album_id]}: PayloadAction<[string, string]>){
    try{
        const response: AxiosResponse<album_songs_number> = yield axios.get(`/api/NoSongAlubm/artist/${artist_id}/album/${album_id}`)
        yield put(getNumberOfAlbumsSongsSuccessAction(response.data));
    } catch (error){
        yield put(getNumberOfAlbumsSongsErrorAction(error as string))
    }
}

export function* watchAlbumSongNum(){
    yield takeLatest('albumStastics/getNumberOfAlbumsSongsAction', albumsSongNumber)
}