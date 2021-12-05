import { Fragment, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginUser } from "../store/loginAPICalling";
import classes from './Login.module.css';

const Login = (props) => {

  const userRef = useRef();
  const passRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.loginStore.isLogin);

  const isLoading = useSelector((state) => state.uiStore.isLoading);

  const func = (state, action) => {
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

  const f5 = function async(e) {
    e.preventDefault();
    Dispatch({ type: 'cred' });
    dispatch(LoginUser({
      userName: userRef.current.value,
      password: passRef.current.value,
    }));
    history.replace('/home');
  }


  return (
    <form action="#" className={classes.sign_in_form} onSubmit={f5}>
      <h2 className={classes.title}>Sign in</h2>
      <div className={classes.input_field}>
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" ref={userRef} />
      </div>
      {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
      <div className={classes.input_field}>
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" ref={passRef} />
      </div>
      {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
      <div onClick={ForgotPasswordHandler} className={classes.forgot_password}>Forgot Password</div>
      <button type="submit" value="Login" className={`${classes.btn} ${classes.solid}`}>Login</button>
      <p className={classes.social_text}>Or Sign in with social platforms</p>
      <div className={classes.social_media}>
        <a href="#" className={classes.social_icon}>
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" className={classes.social_icon}>
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" className={classes.social_icon}>
          <i class="fab fa-google"></i>
        </a>
        <a href="#" className={classes.social_icon}>
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default Login;