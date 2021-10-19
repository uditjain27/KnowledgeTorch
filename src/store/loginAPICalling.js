import { LoginActions } from './login-slice';

const getDataURL = '';
const sendDataURL = '';
const registerUserURL = 'http://notepi-env.eba-7vmpbvka.us-east-2.elasticbeanstalk.com/users';
const LoginUserURL1 = 'http://notepi-env.eba-7vmpbvka.us-east-2.elasticbeanstalk.com/authenticate';
const LoginUserURL = 'http://localhost:5000/authenticate';

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

export const RegisterUser = (data) => {
  console.log("regster user");
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
          body: JSON.stringify({
            email : data.userName,
            name : 'UditJain1234',
            password : data.password,
            username : data.userName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Register failed.');
      };
      const d = await response.json();
      return d;
    }; 

    const RequestLogin = async () => {
      const response = await fetch(
        LoginUserURL,
        {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: "uditjain",
            password : "JohnSnow12@"
        })});
        /*);
        {
            password : data.password,
            username : data.userName,
          }),
        }*/

      if (!response.ok) {
        throw new Error('Login failed.');
      };
      const d = await response.json();
      return d;
    }; 


    console.log("In function");
    try {
      //await RequestRegister();
      /* dispatch(
        LoginActions.setUserData({
          name: data.email,
          pass : data.password
        })
      ); */
      const f = await RequestLogin();
      console.log(f);
      dispatch(LoginActions.setIsLogin({
        isLogin : true,
      }));

      /* dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      ); */
    } catch (error) {
      console.log(error);
      alert(error);
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
