import { Fragment, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from '../InputField';
import { LoginUser } from "../../../store/loginAPICalling";
import classes from './Form.module.css';
import PreLoader2 from "../../../UI/PreLoader2";

const LoginForm = (props) => {
    const userRef = useRef();
    const passRef = useRef();

    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.loginStore.isLogin);

    const isLoading = useSelector((state) => state.uiStore.isLoading);
    const func = (state, action) => {

        /* if (action.feild === 'user' && action.type === 'validate') {
            const user = userRef.current.value;
            if (!(user.includes('@') && user.includes('.'))) {
                return {
                    ...state,
                    userErrorState : true
                };
            };
            return state;
        };

        if (action.feild === 'user' && action.type === 'remove') {
            return {
                ...state,
                userErrorState : false
            };
        }; */

        if (action.feild === 'pass' && action.type === 'validate') {
            const pass = passRef.current.value;
            if (!(pass.toUpperCase() !== pass && pass.toLowerCase() !== pass)) {
                return {
                    ...state,
                    passErrorState: true
                };
            };
            return state;
        };

        if (action.feild === 'pass' && action.type === 'remove') {
            return {
                ...state,
                passErrorState: false
            };
        };

        if (action.type === 'cred') {
            if (userRef.current.value === '' || passRef.current.value === '') {
                return {
                    ...state,
                    userErrorState: userRef === '' ? true : false,
                    passErrorState: passRef === '' ? true : false,
                }
            }
            if (!state.userErrorState && !state.passErrorState) {
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
        passErrorMsg: 'password must be 8 character long'
    });



    const ForgotPasswordHandler = function () {
        console.log('Forgot Password');
    };


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
        console.log("reducer");
    }

    const f5 = function (e) {
        e.preventDefault();
        Dispatch({ type: 'cred' });
        dispatch(LoginUser({
            userName: userRef.current.value,
            password: passRef.current.value,
        }));
        {/*isLogin && (() => {props.toggleModalView()})
    */}
    }
    useEffect(() => { props.toggleModalView(!isLogin) }, [isLogin])

    return (
        <Fragment>
            {isLoading && <PreLoader2 />}
            {!isLoading && <Fragment><h1>Login</h1>
            <form onSubmit={f5}>
                <InputField label="UserName" type='text' ref={userRef} />
                {/* <InputField label="UserName / Email" type='email' ref={userRef} onFocus={f1} onBlur={f2} /> */}
                {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
                <InputField label="Password" type='password' ref={passRef} onFocus={f3} onBlur={f4} />
                {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
                <div onClick={ForgotPasswordHandler} className={classes.forgot_password}>Forgot Password</div>
                <button className={classes.btn_submit} type='submit'>Login</button>
            </form> </Fragment>}
            <span onClick={props.toggleFormView} className={classes.change_content}>New User?? Create Account</span>
        </Fragment>
    );
}

export default LoginForm;