import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
    getNumberOfSongsSuccessAction,
    getNumberOfSongsErrorAction,
    // 
    getNumberOfArtistsSuccessAction,
    getNumberOfArtistsErrorAction,
    // 
    getNumberOfAlbumsSuccessAction,
    getNumberOfAlbumsErrorAction,
    //
    getNumberOfGenresSuccessAction,
    getNumberOfGenresErrorAction,
} from "./stasticSlice";

import {
    total_number_Songs_type,
    total_number_artist_type,
    total_number_album_type,
    total_number_genre_type
} from "../../interfaces/interfaces";

function* totNumberOfSongs(){
    try{
        const response: AxiosResponse<total_number_Songs_type> = yield axios.get('/api/totalNumberOfSongs/')
        yield put(getNumberOfSongsSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfSongsErrorAction(error as string))
    }
}

function* totNumberOfArtists(){
    try{
        const response: AxiosResponse<total_number_artist_type> = yield axios.get('/api/totalNumberOfArtists/')
        yield put(getNumberOfArtistsSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfArtistsErrorAction(error as string))
    }
}

function* totNumberOfAlbums(){
    try{
        const response: AxiosResponse<total_number_album_type> = yield axios.get('/api/totalNumberOfAlbums/')
        yield put(getNumberOfAlbumsSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfAlbumsErrorAction(error as string))
    }
}

function* totNumberOfGenres(){
    try{
        const response: AxiosResponse<total_number_genre_type> = yield axios.get('/api/numberSongsGenres/')
        yield put(getNumberOfGenresSuccessAction(response.data));

    }catch(error){
        yield put(getNumberOfGenresErrorAction(error as string))
    }

}

export function* watchTotNumSong(){
    yield takeLatest('stastics/getNumberOfSongsAction', totNumberOfSongs)
}

export function* watchTotNumArtist(){
    yield takeLatest('stastics/getNumberOfArtistsAction', totNumberOfArtists)
}

export function* watchTotNumAlbum(){
    yield takeLatest('stastics/getNumberOfAlbumsAction', totNumberOfAlbums)
}

export function* watchTotNumGenre(){
    yield takeLatest('stastics/getNumberOfGenresAction', totNumberOfGenres)
}