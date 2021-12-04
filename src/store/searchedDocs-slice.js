import { createSlice } from "@reduxjs/toolkit";


const searchedDocsSlice = createSlice({
    name: 'searchedDocsSlice',
    initialState: {
        list : [],
        keyword : ''
    },
    reducers: {
        setList : function( state, action){
            state.list = action.payload.list;
            state.keyword = action.payload.keyword;
            console.log(state.list);
        }
    }
});

export const searchedDocsActions = searchedDocsSlice.actions;

export default searchedDocsSlice;