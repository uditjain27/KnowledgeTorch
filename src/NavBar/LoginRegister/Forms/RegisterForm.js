import React, { Fragment, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import InputField from '../InputField';
import {RegisterUser} from './../../../store/loginAPICalling';

const RegisterForm = (props) => {

    const userRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();

    const history = useHistory();
    const dispatch = useDispatch();


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
            if (userRef.current.value === '' || passRef.current.value === '' || rePassRef.current.value ==='') {
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

                console.log(props);
                //alert("Registered Successfully"); 
                dispatch(RegisterUser({
                    userName : userRef.current.value,
                    password : passRef.current.value,    
                }));
                //setTimeout(() => {
                    console.log("new Page");
                    //history.push('/profile');
                    props.toggleModalView();
                //}, 3000);
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
        if(rePassRef.current.value !== ''){
            Dispatch({type:'validate', feild: 'repass'});
        }
        console.log("reducer");
    }

    const f5 = function (e) {
        e.preventDefault();
        Dispatch({ type: 'cred' });
        //alert('ppppppppppp');
    }


    return (
        <React.StrictMode>
            <h1>Register</h1>
            <form onSubmit={f5}>
                <InputField label="UserName / Email" type='email' ref={userRef} onFocus={f1} onBlur={f2} />
                {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
                <InputField label="Password" type='password' ref={passRef} onFocus={f3} onBlur={f4} />
                {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
                <InputField label="Re-Enter Password" type='password' ref={rePassRef} onFocus={()=>Dispatch({ type: 'remove', feild: 'repass' })} onBlur={()=>Dispatch({ type: 'validate', feild: 'repass' })} />
                {reducer.rePassErrorState && <div>{reducer.rePassErrorMsg}</div>}
                <button className='btn_submit' type='submit'>Register</button>
            </form>
            <span onClick={props.toggleFormView} className='change-content'>Already Registered!! Login</span>
        </React.StrictMode>
    );
}

export default RegisterForm;