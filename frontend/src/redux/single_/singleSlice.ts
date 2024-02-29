import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { single_type, SingleStateType, single_form_type } from "../../interfaces/interfaces";

const singeInitalState: SingleStateType = {
    single: {
        data: null,
        isLoading: false,
        errors: '',
    },
    single_create: {
        data: null,
        isLoading: false,
        errors: '',
    },
    single_delete: {
        data: null,
        isLoading: false,
        errors: '',
    },
    single_update: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const singleSlice = createSlice({
    name: "singles",
    initialState: singeInitalState,
    reducers: {
        createSingleAction: (state: SingleStateType, {payload: [single_create, artist_id ]}: PayloadAction<[single_form_type, string ]>) => {
            state.single_create.isLoading = true;
            state.single_create.errors = '';
        },
        createSingleSuccessAction: (state: SingleStateType, {payload: single_create}: PayloadAction<single_form_type>) => {
            // when create new song is a success it will return the song
            state.single_create.isLoading = false;
            state.single_create.data = single_create;
        },
        createSingleErrorAction: (state: SingleStateType, {payload: error}: PayloadAction<string>) => {
            state.single_create.isLoading = false;
            state.single_create.errors = error;
        },

        // to delete single
        deleteSingleAction: (state: SingleStateType, {payload: id}: PayloadAction<string>) => {
            state.single_delete.isLoading = true;
            state.single_delete.errors = '';
        },
        deleteSingleSuccessAction: (state: SingleStateType, {payload: single_delete}: PayloadAction<single_type>) => {
            state.single_delete.isLoading = false;
            state.single_delete.data = single_delete;
        },
        deleteSingleErrorAction: (state: SingleStateType, {payload: error}: PayloadAction<string>) => {
            state.single_delete.isLoading = false;
            state.single_delete.errors = error;
        },
        // to update single
        updateSingleAction: (state: SingleStateType, {payload: single_update}: PayloadAction<single_type>) => {
            state.single_update.isLoading = true;
            state.single_update.errors = '';
        },
        updateSingleSuccessAction: (state: SingleStateType, {payload: single_update}: PayloadAction<single_type>) =>{
            state.single_update.isLoading = true;
            state.single_update.data = single_update;
        },
        updateSingleErrorAction: (state: SingleStateType, {payload: error}: PayloadAction<string>) => {
            state.single_update.isLoading = false;
            state.single_update.errors = error;
        },

    }
});

export const {
    createSingleAction,
    createSingleSuccessAction,
    createSingleErrorAction,
    // 
    updateSingleAction,
    updateSingleSuccessAction,
    updateSingleErrorAction,
    // 
    deleteSingleAction,
    deleteSingleSuccessAction,
    deleteSingleErrorAction,
} = singleSlice.actions;

export default singleSlice.reducer;