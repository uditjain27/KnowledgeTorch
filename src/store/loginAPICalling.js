import { LoginActions } from './login-slice';
import { UISliceActions } from './ui-slice';
import { LoginUser1 } from './LoginUser';
import { RegisterUser1 } from './RegisterUser';

export const RegisterUser = (data) => {
  console.log("register user");
  return async (dispatch) => {
    try {
      const result = await RegisterUser1(data);
      dispatch(LoginActions.setIsLogin(result));
      console.log("regiser Successful");
    } catch (error) {
      alert(error);
      dispatch(UISliceActions.setLoading());
    }
  };
};


export const LoginUser = (data) => {
  console.log("login user");
  return async (dispatch) => {
    try {
      const result = await LoginUser1(data);
      dispatch(LoginActions.setIsLogin(result));
      console.log(result.role);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
};
