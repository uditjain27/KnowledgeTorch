import { URL } from "./helper";

export const fetchProfileData = async(userName, token) => {
  const response = await fetch(`${URL}/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
  if (!response.ok) {
    throw new Error("ANCD");
  }

  const data1 = await response.json();
  return data1;
}