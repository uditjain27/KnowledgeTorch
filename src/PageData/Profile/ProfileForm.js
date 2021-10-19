import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
//import { sendProfileData } from '../../store/loginAPICalling';
import './ProfileForm.css';

const ProfileForm = (props) => {

  const nameRef = useRef();
  const collegeRef = useRef();
  const contactNoRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("Submitted");
    const data = {
      name : nameRef.current.value,
      college : collegeRef.current.value,
      contactNo : contactNoRef.current.value
    };
    console.log(data);
    //dispatch(sendProfileData(data));
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label id='profile_label'>Full Name</label>
        <input
          className='profile-input'
          type='text'   
          placeholder= 'Enter your full name here'
          ref={nameRef}
        ></input>
      </div>
      <div>
        <label id='profile_label'>College Name</label>
        <input
          className='profile-input'
          type='text'   
          placeholder= 'Enter your College name here'
          ref={collegeRef}
        ></input>
      </div>
      <div>
        <label id='profile_label'>Contact Number</label>
        <input
          className='profile-input'
          type= 'tel'
          placeholder= 'Enter your full name here'
          ref={contactNoRef}
        ></input>
      </div>
      <div>
        <button type='submit'>Save Changes</button>
      </div>
    </form>
  )
};

export default ProfileForm;