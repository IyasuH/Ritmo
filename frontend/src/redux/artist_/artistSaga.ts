import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {call, put, takeLatest } from "redux-saga/effects"
import { getAllArtistsErrorAction, getAllArtistsSuccessAction, getArtistErrorAction, getArtistSuccessAction } from "./artistSlice";
import { createArtistErrorAction, createArtistSuccessAction} from "./artistSlice";
import { artist_type } from "../../interfaces/interfaces";


// Generator functions - where they will pause when I call yield to return value(to handle the asyn API callbacks)

function* getArtistSaga({payload: id}: PayloadAction<string>) {
    try{
        const response: AxiosResponse<artist_type> = yield axios.get(`/api/getArtist/${id}`)
        yield put(getArtistSuccessAction(response.data))
    } catch (error){
        yield put(getArtistErrorAction(error as string));
    }
}

function* createArtistSaga({payload: artist}: PayloadAction<String>){
    try{
        const response: AxiosResponse<artist_type> = yield axios.post('/api/newArtist', artist)
        yield put(createArtistSuccessAction(response.data));
    } catch (error){
        yield put(createArtistErrorAction(error as string));
    }
}

function* listArtistSaga(){
    try{
        const response: AxiosResponse<[artist_type]> = yield axios.get('/api/listArtists')
        yield put(getAllArtistsSuccessAction(response.data));
    } catch (error){
        yield put(getAllArtistsErrorAction(error as string));
    }
}


export function* watchGetArtist(){
    yield takeLatest('artists/getArtistAction', getArtistSaga)
}

export function* watchCreateArtist() {
    yield takeLatest('artists/craeteArtistAction', createArtistSaga)
}

export function* watchListArtists() {
    yield takeLatest('artists/getAllArtistsAction', listArtistSaga)
}