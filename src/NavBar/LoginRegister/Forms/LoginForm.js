import { Fragment, useReducer, useRef } from "react";
import InputField from '../InputField';

const LoginForm = (props) => {
    const userRef = useRef();
    const passRef = useRef();    


    const func = (state, action) => {

        if (action.feild === 'user' && action.type === 'validate') {
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
        };

        if (action.feild === 'pass' && action.type === 'validate') {
            const pass = passRef.current.value;
            if (!(pass.toUpperCase() !== pass && pass.toLowerCase() !== pass)) {
                return {
                    ...state,
                    passErrorState : true
                };
            };
            return state;
        };

        if (action.feild === 'pass' && action.type === 'remove') {
            return {
                ...state,
                passErrorState : false
            };
        };

        if (action.type === 'cred') {
            if(userRef.current.value === '' || passRef.current.value===''){
                return{
                    ...state,
                    userErrorState : userRef === '' ? true : false,
                    passErrorState : passRef === '' ? true : false,
                }
            }
            if(!state.userErrorState && !state.passErrorState){
                alert("SuccessFul Login");
                setTimeout(()=>{
                   console.log(props);
                   props.toggleModalView();
                },3000);
            }
            return state;
        }
        console.log("Success");
        return state;
    };


    const [reducer, Dispatch] = useReducer(func, {
        userErrorState: false,
        userErrorMsg : 'Invalid userName',
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
    const f3 = function(){
        Dispatch({ type: 'remove', feild: 'pass' });
        console.log("reducer");
    }

    const f4 = function(){
        Dispatch({ type: 'validate', feild: 'pass' });
        console.log("reducer");
    }

    const f5=function(e){
        e.preventDefault();
        Dispatch({ type: 'cred' });
        console.log(reducer);
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={f5}>
                <InputField label="UserName / Email" type='email' ref={userRef} onFocus={f1} onBlur={f2} />
                {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
                <InputField label="Password" type='password' ref={passRef} onFocus={f3} onBlur={f4} />
                {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
                <div onClick={ForgotPasswordHandler} className='forgot-password'>Forgot Password</div>
                <button className='btn_submit' type='submit'>Login</button>
            </form>
            <span onClick={props.toggleFormView} className='change-content'>New User?? Create Account</span>
        </Fragment>
    );
}

export default LoginForm;