import { URL } from "./helper";
import { searchedDocsActions } from "./searchedDocs-slice";
import { UISliceActions } from "./ui-slice";
const sendDescriptionURL = URL + '/notes';
const sendProfileDataURL = URL + '/users';
const fetchDetailsURL = URL + '/notes/notes/';
const sendFileURL1 = 'http://localhost:5000/notes';


export const sendUploadData = (data) => {
  return async (dispatch) => {
    /* dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    ); */

    const sendSetDescriptionRequest = async () => {
      const response = await fetch(
        sendDescriptionURL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token
          },
          body: JSON.stringify(
            {
              description: data.description,
              mediaType: data.mediaType,
              id: 10,
              name: data.name,
              subject: data.subject,
              type: data.type
            }
          )
        }
      );

      if (!response.ok) {
        //throw new Error(Object(response));
        throw new Error('Sending file data failed.');
      }
      const ids = await response.json();

      return ids;
    };
    const sendSetFileRequest = async (id) => {
      //console.log(Object.entries(data.file)); 
      let fd = new FormData();
      fd.append("file", data.file);
      const response = await fetch(
        `${sendDescriptionURL}/${id}/data`,
        {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + data.token
          },
          body: fd
        }
      );

      if (!response.ok) {
        throw new Error("sending file failed");
        //throw new Error('Sending file data failed.');
      }
    };

    try {
      console.log("In function");
      const id = await sendSetDescriptionRequest();
      await sendSetFileRequest(id.id);
      console.log("Uploaded Successfully");
      console.log(id.id);
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



export const fetchSearchDetails = (data) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        fetchDetailsURL + data
      );

      if (!response.ok)
        throw new Error("Failed");

      return await response.json();
    }

    try {
      dispatch(UISliceActions.setLoading());
      const details = await fetchData();
      console.log(details);
      dispatch(searchedDocsActions.setList({
        keyword: data,
        list: details
      }));
      dispatch(UISliceActions.setLoading());
      console.log(details);
    } catch (error) {
      console.log(error);
      dispatch(UISliceActions.setLoading());
    }
  }
}



export const setProfileData = (data) => {
  return async (dispatch) => {
    const sendProfileData = async () => {
      const response = await fetch(
        sendProfileDataURL,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token
          },
          body: JSON.stringify(
            {
              id: data.id,
              username:data.userName,
              name: data.name,
              email: data.email,
              phone: data.contactNo,
              organization: data.college,
              specialization: data.course,
              yearsOfExperience : data.year
            }
          )
        }
      );

      if (!response.ok) {
        //throw new Error(Object(response));
        throw new Error('Sending Profile data failed.');
      }
      return;
    };
    

    try {
      dispatch(UISliceActions.setLoading());
      console.log("In function");
      await sendProfileData();
      console.log("Uploaded Successfully");
      dispatch(UISliceActions.setLoading());
      /* dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      ); */
    } catch (error) {
      dispatch(UISliceActions.setLoading());
      console.log(error);
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
        sendFileURL1
      );

      if (!response.ok) {
        throw new Error('Could not fetch users data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      dispatch(UISliceActions.setLoading());
      const userData = await fetchData();
      dispatch(UISliceActions.setLoading());
      /*dispatch(
        /* LoginActions.setUserData({
          name: userData.name,
          college: userData.college,
          contactNo: userData.contactNo
        }) 
      );*/
    } catch (error) {
      console.log(error);
      alert(error);
      dispatch(UISliceActions.setLoading());
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

