import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { single_type } from "../../interfaces/interfaces";

import {
    createSingleSuccessAction,
    createSingleErrorAction,
    // 
    updateSingleSuccessAction,
    updateSingleErrorAction,
    // 
    deleteSingleSuccessAction,
    deleteSingleErrorAction,
} from "./singleSlice";

function* createSingleSaga({payload: [single, artist_id]}: PayloadAction<[single_type, string]>){
    try{
        const response: AxiosResponse<single_type> = yield axios.post(`/api/newSingle/${artist_id}`, single);
        yield put(createSingleSuccessAction(response.data));
    }catch (error){
        yield put(createSingleErrorAction(error as string));
    }
}

function* updateSingleSaga({payload: single}: PayloadAction<single_type>){
    try{
        // 
        const response: AxiosResponse<single_type> = yield axios.put(`/api/updateSingle/${single._id}`, single)
        yield put(updateSingleSuccessAction(response.data));
    }catch (error){
        // 
        yield put(updateSingleErrorAction(error as string));
    }
}

function* deleteSingleSaga({payload: id}: PayloadAction<string>){
    try{
        const response: AxiosResponse<single_type> = yield axios.delete(`/api/deleteSingle/${id}`)
        yield put(deleteSingleSuccessAction(response.data));
    } catch (error) {
        yield put(deleteSingleErrorAction(error as string));
    }
 }


export function* watchCreateSingle(){
    yield takeLatest('singles/createSingleAction', createSingleSaga)
}

export function* watchUpdateSingle(){
    yield takeLatest('singles/updateSingleAction', updateSingleSaga)
}

export function* watchDeleteSingle(){
    yield takeLatest('singles/deleteSingleAction', deleteSingleSaga)
}
