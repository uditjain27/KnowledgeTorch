import { URL } from './helper';
import { LoginUser1 } from './LoginUser';


const RequestRegister = async (data) => {
  const response = await fetch(
    `${URL}/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
        name: 'anonomys',
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


export const RegisterUser1 = async (data) => {
  try {
    await RequestRegister(data);
    const obj = await LoginUser1(data);
    console.log("regiser Successful");
    return obj;
  } catch (error) {
    alert(error);
  }
}