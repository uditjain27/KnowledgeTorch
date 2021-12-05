import { Fragment, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginUser } from "../store/loginAPICalling";
/* import PreLoader2 from "../../../UI/PreLoader2"; */

import svg from './img/log.svg';
import svg2 from './img/register.svg';
import Login from "./Login";

import classes from './Login.module.css';
import Register from "./Register";

const Login_Register = (props) => {

  const signup = function (e) {
    const container = document.querySelector("#container");
    container.classList.add(`${classes.sign_up_mode}`);
  }

  const signin = function (e) {
    const container = document.querySelector("#container");
    container.classList.remove(`${classes.sign_up_mode}`);
  }

  return (
    <Fragment>
      <div className={classes.container} id="container">
        <div className={classes.forms_container}>
          <div className={classes.signin_signup}>
            <Login/>
            <Register/>
          </div>
        </div>

        <div className={classes.panels_container}>
          <div className={`${classes.panel} ${classes.left_panel}`}>
            <div className={classes.content}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className={`${classes.btn} ${classes.transparent}`} id="sign-up-btn" onClick={signup}>
                Sign up
              </button>
            </div>
            <img src={svg} className={classes.image} alt="" />
          </div >
          <div className={`${classes.panel} ${classes.right_panel}`}>
            < div className={
              classes.content}>
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className={`${classes.btn} ${classes.transparent}`} id="sign-in-btn" onClick={signin}>
                Sign in
              </button >
            </div >
            <img src={svg2} className={classes.image} alt="" />
          </div >
        </div >
      </div >
    </Fragment >
  );
}

export default Login_Register;