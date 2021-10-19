import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLoign: false,
        isLogout: true,
        user_name : '',
        password : '',
        userData: {
            user_college: '',
            user_phone_no: ''
        }
    },
    reducers: {
        setUserData: function (state, action) {
            state.user_name = action.payload.name;
            state.password = action.payload.pass;
            //state.userData.user_college = action.payload.college;
            //state.userData.user_phone_no = action.payload.contactNo;
            console.log(state);
            console.log(action.payload);
            console.log(state);
        },

        setIsLogin : function( state, action){
            state.isLoign = action.payload.isLoign;
            state.isLogout = !action.payload.isLoign;
        }
    }
});

export const LoginActions = loginSlice.actions;

export default loginSlice;