import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
    getNumberOfArtistsSongsSuccessAction,
    getNumberOfArtistsSongsErrorAction,
    // 
    getNumberOfArtitsAlbumSuccessAction,
    getNumberOfArtitsAlbumErrorAction,
} from "./artistStatSlice";

import {
    artist_number_Songs_type,
    artist_album_number_type,
} from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

function* artistsNumberOfSongs({payload: artist_id}: PayloadAction<string>) {
    try{
        const response: AxiosResponse<artist_number_Songs_type> = yield axios.get(`/api/NoSongArtist/${artist_id}`)
        yield put(getNumberOfArtistsSongsSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfArtistsSongsErrorAction(error as string))
    }
}

function* artistsAlbumNumber({payload: artist_id}: PayloadAction<string>) {
    try{
        const response: AxiosResponse<artist_album_number_type> = yield axios.get(`/api/NoAlbumArtist/${artist_id}`)
        yield put(getNumberOfArtitsAlbumSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfArtitsAlbumErrorAction(error as string))
    }
}


export function* watchArtNumSongs(){
    yield takeLatest('artistStastics/getNumberOfArtistsSongsAction', artistsNumberOfSongs)
}

export function* watchArtNumAlbums(){
    yield takeLatest('artistStastics/getNumberOfArtitsAlbumAction', artistsAlbumNumber)
}