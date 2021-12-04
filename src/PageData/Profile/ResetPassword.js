import { database } from "faker";
import { Fragment, useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { URL } from "../../store/helper";
import { AuthContext } from "../../store/login-context";
import { LoginActions } from "../../store/login-slice";
import { UISliceActions } from "../../store/ui-slice";
import classes from './ResetPassword.module.css';

const ResetPassword = (props) => {
  const currPass = useRef();
  const newPass = useRef();
  const confirmNewPass = useRef();

  const [showError, toggleShowError] = useState(false);
  const token = useSelector((state) => state.loginStore.token);

  const showErrorHandler = () => {
    toggleShowError(true);
  }
  const hideErrorHandler = () => {
    toggleShowError(false);
  }

  const checkPass = function () {
    const pass1 = newPass.current.value;
    const pass2 = confirmNewPass.current.value;
    if (pass1 !== pass2) {
      showErrorHandler();
      return false;
    }
    return true;
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const ctx = useContext(AuthContext);

  const setNewPass = async (data) => {
    dispatch(UISliceActions.setLoading());
    const response = await fetch(`${URL}/users/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        oldPassword: data.oldPassw,
        newPassword: data.newPassw
      })
    });
    if (!response.ok) {
      throw new Error("Cannot reset Password");
    }
    console.log(response);
    dispatch(UISliceActions.setLoading());
    return;
  }

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log("Yo");
      if (checkPass()) {
        await setNewPass(
          {
            newPassw: newPass.current.value,
            oldPassw : currPass.current.value
          }
        );
        //dispatch(LoginActions.setLogout());
        //history.push('/home');
        //ctx.setFormView();
        //ctx.toggleModalView();
      }

    } catch (err) {
      console.log(err);
      dispatch(UISliceActions.setLoading());
    }
  }



  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div>
          <label className={classes.label}>Current Password</label>
          <input
            className={classes.input}
            type='text'
            placeholder='Current Password'
            ref={currPass}
            minLength='6'
          >
          </input>
        </div>

        <div>
          <label className={classes.label}>New Password</label>
          <input
            className={classes.input}
            type='text'
            placeholder='New Password'
            ref={newPass}
            onFocus={hideErrorHandler}
            minLength='6'
          >
          </input>
        </div>
        <div>
          <label className={classes.label}>Confirm New Password</label>
          <input
            className={classes.input}
            type='text'
            placeholder='Confirm Password'
            ref={confirmNewPass}
            onFocus={hideErrorHandler}
            minLength='6'
          >
          </input>
        </div>
        <div>
          {showError && <p>Password doesnot match</p>}
        </div>
        <div>
          <button type='submit' className={`${classes.submit} ${classes.custom_btn} ${classes.btn_13}`}>Reset Password</button>
        </div>
      </form>
    </Fragment>
  );
}

export default ResetPassword;