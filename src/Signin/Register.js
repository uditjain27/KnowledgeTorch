import { Fragment, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RegisterUser } from "../store/loginAPICalling";
import classes from './Login.module.css';

const Register = () => {
  const userRef = useRef();
    const userRRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();

    const isLoading = useSelector((state) => state.uiStore.isLoading);

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
      history.push(`/home`);//?edit=${true}&user=${username}&email=${emailid}
      console.log(username, emailid);
  }

  return (
    <form action="#" className={classes.sign_up_form} onSubmit={f5}>
      <h2 className={classes.title}>Sign up</h2>
      <div className={classes.input_field}>
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" ref={userRRef}/>
      </div>
      <div className={classes.input_field}>
        <i class="fas fa-envelope"></i>
        <input type="email" placeholder="Email" ref={userRef} onFocus={f1} onBlur={f2} />
      </div>
      {reducer.userErrorState && <div>{reducer.userErrorMsg}</div>}
      <div className={classes.input_field}>
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" ref={passRef} onFocus={f3} onBlur={f4}/>
      </div>
      {reducer.passErrorState && <div>{reducer.passErrorMsg}</div>}
      <div className={classes.input_field}>
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Re-Enter Password" ref={rePassRef} onFocus={() => Dispatch({ type: 'remove', feild: 'repass' })} onBlur={() => Dispatch({ type: 'validate', feild: 'repass' })} />
      </div>
      {reducer.rePassErrorState && <div>{reducer.rePassErrorMsg}</div>}
      <button type="submit" className={classes.btn} value="Sign up" >SignUp</button>
      <p className={classes.social_text}>Or Sign up with social platforms</p>
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

export default Register;