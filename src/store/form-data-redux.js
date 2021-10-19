import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];
const getDataToUpload = function(data){
    console.log("Uploaded");
}
const slice = createSlice({
    name: dataSlice,
    initialState: initialState,
    reducers : {
        getData : getDataToUpload
    }
});

const store = configureStore({
    reducer : slice.reducer
});

export const counterActions = slice.actions;

export default store;