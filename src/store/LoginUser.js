import { URL } from './helper';
import { fetchProfileData } from './fetchProfileData';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../store/login-slice';


const RequestLogin = async (data) => {
  const response = await fetch(
    `${URL}/authenticate`,
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


export const LoginUser1 = async (data) => {
  try {
    const f = await RequestLogin(data);
    const res = await fetchProfileData(data.userName, f.jwt);
    localStorage.setItem("credentials", JSON.stringify({ token: f.jwt, userName: data.userName, role: res.roles}));
    console.log(f.jwt);
    console.log(res.roles);
    return{
      token: f.jwt,
      userName: data.userName,
      role: res.roles
    };
  } catch (error) {
    console.log(error);
    alert(error);
  }
}