import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLogin: false,
        token: '',
        userName: '',
        role : '',
    },
    reducers: {
        setIsLogin: function (state, action) {
            state.isLogin = true;
            state.token = action.payload.token;
            state.userName = action.payload.userName;
            state.role = action.payload.role;
        },

        setLogout: function (state, action) {
            state.isLogin = false;
            state.token = '';
            state.userName = '';
            state.role = '';
        }
    }
});

export const LoginActions = loginSlice.actions;

export default loginSlice;