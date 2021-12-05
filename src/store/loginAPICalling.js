import { LoginActions } from './login-slice';
import { URL } from './helper';
import { UISliceActions } from './ui-slice';
const getDataURL = '';
const sendDataURL = '';
const registerUserURL = URL + '/register';
const LoginUserURL = URL + '/authenticate';

const RequestLogin = async (data) => {
  const response = await fetch(
    LoginUserURL,
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

/* export const fetchProfileData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        getDataURL
      );

      if (!response.ok) {
        throw new Error('Could not fetch users data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(
        LoginActions.setUserData({
          name: userData.name,
          college: userData.college,
          contactNo: userData.contactNo
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
}; */


export const RegisterUser = (data) => {
  console.log("register user");
  return async (dispatch) => {
    /* dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    ); */


    const RequestRegister = async () => {
      const response = await fetch(
        registerUserURL,
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

    console.log("In function");
    try {
      /* dispatch(
        LoginActions.setUserData({
          name: data.email,
          pass : data.password
        })
        ); */
      dispatch(UISliceActions.setLoading());
      await RequestRegister();
      const f = await RequestLogin(data);
      localStorage.setItem("credentials" , JSON.stringify({token : f.jwt, userName : data.userName}));
      console.log(f.jwt);
      dispatch(LoginActions.setIsLogin({
        token: f.jwt,
        userName: data.userName
      }));
      dispatch(UISliceActions.setLoading());
      
      console.log("regiser Successful");

      /* dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      ); */
    } catch (error) {
      alert(error);
      dispatch(UISliceActions.setLoading());
      //alert(error);
      /* dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      ); */
    }
  };
};


export const LoginUser = (data) => {
  console.log("login user");
  return async (dispatch) => {
    /* dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    ); */

    try {
      /* dispatch(
        LoginActions.setUserData({
          name: data.email,
          pass : data.password
        })
        ); */
      dispatch(UISliceActions.setLoading());
      const f = await RequestLogin(data);
      localStorage.setItem("credentials" , JSON.stringify({token : f.jwt, userName : data.userName}));
      console.log(f.jwt);
      //setToken(f.jwt);
      dispatch(LoginActions.setIsLogin({
        token: f.jwt,
        userName : data.userName
      }));
      dispatch(UISliceActions.setLoading());

      /* dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
        ); */
    } catch (error) {
      console.log(error);
      dispatch(UISliceActions.setLoading());
      //alert(error);
      /* dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      ); */
    }
  };
};



export const fetchProfileData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        getDataURL
      );

      if (!response.ok) {
        throw new Error('Could not fetch users data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(
        LoginActions.setUserData({
          name: userData.name,
          college: userData.college,
          contactNo: userData.contactNo
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
      /* dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      ); */
    }
  };
};
