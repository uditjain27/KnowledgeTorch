import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import searchedDocsSlice from "./searchedDocs-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        loginStore : loginSlice.reducer,
        searchedDocsStore : searchedDocsSlice.reducer,
        uiStore : uiSlice.reducer
    }
});

export default store;