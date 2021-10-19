const sendDataURL = 'http://notepi-env.eba-7vmpbvka.us-east-2.elasticbeanstalk.com/notes'
const sendDescriptionURL = 'http://localhost:5000/notes'
const sendFileURL1 = 'http://localhost:5000/notes'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1ZGl0amFpbiIsImV4cCI6MTYzNDY5Njk4NSwiaWF0IjoxNjM0NjYwOTg1fQ.MTXtyXQW-F6URTh4SnAAUnm-dXjqMZCIizWRW_rV9IM';

/*export const fetchProfileData = () => {
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
        /* LoginActions.setUserData({
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
      ); 
    }
  };
};*/

export const sendUploadData = (data) => {
  console.log("Random");
  return async (dispatch) => {
    /* dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    ); */

    /*
    {
  "email": "string",
  "name": "string",
  "password": "string",
  "username": "string"
}
*/


    const sendSetDescriptionRequest = async () => {
      console.log(data);
      console.log(typeof data.name);
      console.log(typeof data.mediaType);
      console.log(typeof data.description);
      const response = await fetch(
        sendDescriptionURL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify(
            {
              description: data.description,
              mediaType: data.mediaType,
              id: 10,
              name: data.name
            }
          )
        }
      );

      if (!response.ok) {
        throw new Error(Object(response));
        //throw new Error('Sending file data failed.');
      }
      const ids = await response.json();

      return ids;
    };
    const sendSetFileRequest = async (id) => {
      console.log(Object.entries(data.file));
      
      let fd = new FormData();
      fd.append("src", data.file);
      //console.log(new Blob(r.readAsBinaryString(data.file)));
      const response = await fetch(
        `${sendDescriptionURL}/${id}/data` ,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/pdf',
            'Authorization': 'Bearer ' + token
          },
          body: fd//.stream()
        }
      );

      if (!response.ok) {
        throw new Error("sending file failed");
        //throw new Error('Sending file data failed.');
      }
      const ids = await response.json();

      return ids;
    };

    try {
      console.log("In function");
      const id = await sendSetDescriptionRequest();
      await sendSetFileRequest(id.id);
      console.log("Uploaded Successfully");
      console.log(id);
      /* dispatch(
        LoginActions.setUserData({
          name: data.name,
          college: data.college,
          contactNo: data.contactNo
        }) 
      );*/

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
