import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects"
import { BASE_URL } from "../config";
// import { artist_type } from "../../interfaces/interfaces";
import { getAllArtistsErrorAction,
    getAllArtistsSuccessAction,
    getArtistErrorAction,
    getArtistSuccessAction,
    createArtistErrorAction,
    createArtistSuccessAction,
    updateArtistSuccessAction,
    updateArtistErrorAction,
    deleteArtistSuccessAction,
    deleteArtistErrorAction } from "./artistSlice";

// import { createArtistErrorAction, createArtistSuccessAction} from "./artistSlice";
import { artist_type } from "../../interfaces/interfaces";


// Generator functions - where they will pause when I call yield to return value(to handle the asyn API callbacks)

function* getArtistSaga({payload: id}: PayloadAction<string>) {
    try{
        const response: AxiosResponse<artist_type> = yield axios.get(`${BASE_URL}/api/getArtist/${id}`)
        yield put(getArtistSuccessAction(response.data))
    } catch (error){
        yield put(getArtistErrorAction(error as string));
    }
}

function* createArtistSaga({payload: artist}: PayloadAction<artist_type>){
    try{
        const response: AxiosResponse<artist_type> = yield axios.post(`${BASE_URL}/api/newArtist`, artist)
        yield put(createArtistSuccessAction(response.data));
    } catch (error){
        yield put(createArtistErrorAction(error as string));
    }
}

function* listArtistSaga(){
    try{
        const response: AxiosResponse<[artist_type]> = yield axios.get(`${BASE_URL}/api/listArtists`)
        yield put(getAllArtistsSuccessAction(response.data));
    } catch (error){
        yield put(getAllArtistsErrorAction(error as string));
    }
}

function* updateArtistSaga({payload: artist}: PayloadAction<artist_type>){
    try{
        const response: AxiosResponse<artist_type> = yield axios.put(`${BASE_URL}/api/updateArtist/${artist._id}`, artist)
        yield put(updateArtistSuccessAction(response.data));
    }catch (error){
        yield put(updateArtistErrorAction(error as string));
    }
}

function* deleteArtistSaga({payload: id}: PayloadAction<string>){
    try{
        const response: AxiosResponse<artist_type> = yield axios.delete(`${BASE_URL}/api/deleteArtist/${id}`)
        yield put(deleteArtistSuccessAction(response.data))
    } catch (error){
        yield put(deleteArtistErrorAction(error as string));
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

export function* watchUpdateArtist() {
    yield takeLatest ('artists/updateArtistAction', updateArtistSaga)
}

export function* watchDeleteArtist() {
    yield takeLatest ('artists/deleteArtistAction', deleteArtistSaga)
}