import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLogin: false,
        token: '',
        userName: '',
        setLocalStorage: ''
    },
    reducers: {
        setIsLogin: function (state, action) {
            state.isLogin = true;
            state.token = action.payload.token;
            state.userName = action.payload.userName;
        },

        setLogout: function (state, action) {
            state.isLogin = false;
            state.token = '';
        }
    }
});

export const LoginActions = loginSlice.actions;

export default loginSlice;