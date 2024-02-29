import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { total_number_Songs_type, BasicStasticsStateType } from "../../interfaces/interfaces";

 const staticTnitialState :  BasicStasticsStateType = {
    totalNumberOfSongs: {
        data: null,
        isLoading: true,
        errors: ""
    }
 }