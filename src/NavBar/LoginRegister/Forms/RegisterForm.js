import React, { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { URL } from "../../../store/helper";
import { LoginActions } from "../../../store/login-slice";
import InputField from '../InputField';
import { RegisterUser } from './../../../store/loginAPICalling';
import PreLoader2 from "../../../UI/PreLoader2";
import classes from './Form.module.css';

const RegisterForm = (props) => {

    const userRef = useRef();
    const userRRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();

    const isLoading = useSelector((state) => state.uiStore.isLoading);

    const history = useHistory();
    const dispatch = useDispatch();

    /* const RequestRegister = async (data) => {
        const response = await fetch(
            `${URL}/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.userName,
                    password: data.password,
                    name: data.userName,
                    email: data.email
                })
            }
        );

        if (!response.ok) {
            throw new Error('register failed.');
        };
        const d = await response.json();
        return d;
    };

    const RequestLogin = async (data) => {
        const response = await fetch(
            `${URL}/authenticate`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.userName,
                    password: data.password
                })
            }
        );

        if (!response.ok) {
            throw new Error('Login failed.');
        };
        const d = await response.json();
        return d;
    };

    const RegisterUser = async (data) => {
        try {
            
            await RequestRegister(data);
            const f = await RequestLogin(data);
            dispatch(LoginActions.setIsLogin({
                token: f.jwt
            }));
            
        } catch (e) {
            
            alert(e);
        }
    } */

    const func = (state, action) => {

        if (action.feild === 'user' && action.type === 'validate') {
            const user = userRef.current.value;
            if (!(user.includes('@') && user.includes('.'))) {
                return {
                    ...state,
                    userErrorState: true
                };
            };
            return state;
        }

        else if (action.feild === 'user' && action.type === 'remove') {
            return {
                ...state,
                userErrorState: false
            };
        }

        else if (action.feild === 'pass' && action.type === 'validate') {
            const pass = passRef.current.value;
            if (!(pass.toUpperCase() !== pass && pass.toLowerCase() !== pass)) {
                return {
                    ...state,
                    passErrorState: true
                };
            };
            return state;
        }

        else if (action.feild === 'pass' && action.type === 'remove') {
            return {
                ...state,
                passErrorState: false
            };
        }

        else if (action.feild === 'repass' && action.type === 'validate') {
            if (passRef.current.value !== rePassRef.current.value) {
                return {
                    ...state,
                    rePassErrorState: true,
                }
            }
            else
                return {
                    ...state,
                    rePassErrorState: false,
                }
        }
        else if (action.feild === 'repass' && action.type === 'remove') {
            return {
                ...state,
                rePassErrorState: false
            };
        }

        else if (action.type === 'cred') {
            console.log("Reached dispatch");
            if (userRef.current.value === '' || passRef.current.value === '' || rePassRef.current.value === '') {
                return {
                    ...state,
                    userErrorState: userRef.current.value === '' ? true : false,
                    passErrorState: passRef.current.value === '' ? true : false,
                    rePassErrorState: rePassRef.current.value === '' ? true : false,
                }
            }
            else if (!state.userErrorState &&
                !state.passErrorState &&
                !state.rePassErrorState &&
                userRef.current.value !== "" &&
                passRef.current.value !== "" &&
                rePassRef.current.value !== "") {
                props.toggleModalView();
                return state;
            }
        }
        console.log("Success");
        return state;
    };


    const [reducer, Dispatch] = useReducer(func, {
        userErrorState: false,
        userErrorMsg: 'Invalid userName',
        passErrorState: false,
        passErrorMsg: 'password must be 8 character long',
        rePassErrorState: false,
        rePassErrorMsg: "Password doesn't match"
    });


    const f1 = function () {
        Dispatch({ type: 'remove', feild: 'user' });
        console.log("reducer");
    }
    const f2 = function () {
        Dispatch({ type: 'validate', feild: 'user' });
        console.log("reducer");
    }
    const f3 = function () {
        Dispatch({ type: 'remove', feild: 'pass' });
        console.log("reducer");
    }

    const f4 = function () {
        Dispatch({ type: 'validate', feild: 'pass' });
        if (rePassRef.current.value !== '') {
            Dispatch({ type: 'validate', feild: 'repass' });
        }
        console.log("reducer");
    }

    const f5 = async function (e) {
        e.preventDefault();
        const username = userRRef.current.value;
        const emailid = userRef.current.value;
        const pass = passRef.current.value;
        Dispatch({ type: 'cred' });
        dispatch(RegisterUser({
            email: emailid,
            userName: username,
            password: pass,
        }));
        console.log(username, emailid);
        history.push(`/profile`);//?edit=${true}&user=${username}&email=${emailid}
        console.log(username, emailid);
        //alert('ppppppppppp');
    }


    return (
        <React.StrictMode>
            {isLoading && <PreLoader2></PreLoader2>}
            <h1>Register</h1>
            <form onSubmit={f5}>
                <InputField label="UserName" type='text' ref={userRRef} />
                {/* {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>} */}
                <InputField label="Email" type='email' ref={userRef} onFocus={f1} onBlur={f2} />
                {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
                <InputField label="Password" type='password' ref={passRef} onFocus={f3} onBlur={f4} />
                {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
                <InputField label="Re-Enter Password" type='password' ref={rePassRef} onFocus={() => Dispatch({ type: 'remove', feild: 'repass' })} onBlur={() => Dispatch({ type: 'validate', feild: 'repass' })} />
                {reducer.rePassErrorState && <div>{reducer.rePassErrorMsg}</div>}
                <button className={classes.btn_submit} type='submit'>Register</button>
            </form>
            <span onClick={props.toggleFormView} className={classes.change_content}>Already Registered!! Login</span>
        </React.StrictMode>
    );
}

export default RegisterForm;