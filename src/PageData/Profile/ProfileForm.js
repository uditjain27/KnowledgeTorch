import React, { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation , useHistory} from 'react-router-dom';
import { setProfileData } from '../../store/uploadDetails-ApiCalling';
import classes from './ProfileForm.module.css';

const ProfileForm = (props) => {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginStore.token);
  const history = useHistory();

  const nameRef = useRef();
  const collegeRef = useRef();
  const contactNoRef = useRef();
  const courseRef = useRef();
  const yearRef = useRef();

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("Submitteddd");
    const c = contactNoRef.current.value;
    const data = {
      id: props.data.id,
      userName: props.data.userName,
      name: nameRef.current.value,
      email: props.data.email,
      contactNo: c.toString(),
      college: collegeRef.current.value,
      course : courseRef.current.value,
      year: yearRef.current.value,
      token: token
    };
    console.log(data);
    await dispatch(setProfileData(data));
    history.push('/contactus');
    history.push('/profile');
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label id='profile_label'>UserName</label>
          <input
            className={classes.profile_input}
            type='text'
            placeholder='000000000000'
            ref={contactNoRef}
            defaultValue={props.data.userName}
            readOnly
          ></input>
        </div>
        <div>
          <label id='profile_label'>Email Id</label>
          <input
            className={classes.profile_input}
            type='text'
            placeholder='000000000000'
            ref={contactNoRef}
            defaultValue={props.data.email}
            readOnly
          ></input>
        </div>

        <div>
          <label id='profile_label'>Full Name</label>
          <input
            className={classes.profile_input}
            type='text'
            placeholder='Enter your full name here'
            ref={nameRef}
            defaultValue={props.data.name ? props.data.name : ''}
          ></input>
        </div>

        <div>
          <label id='profile_label'>College Name</label>
          <input
            className={classes.profile_input}
            type='text'
            placeholder='Enter your College name here'
            ref={collegeRef}
            defaultValue={props.data.college ? props.data.college : ''}
          ></input>
        </div>

        <div>
          <label id='profile_label'>Course</label>
          <input
            className={classes.profile_input}
            type='text'
            placeholder='Enter your course here'
            ref={courseRef}
            defaultValue={props.data.course ? props.data.course : ''}
          ></input>
        </div>

        <div>
          <label id='profile_label'>Contact Number</label>
          <input
            className={classes.profile_input}
            type='tel'
            placeholder='000000000000'
            ref={contactNoRef}
            defaultValue={props.data.contactNo ? props.data.contactNo : ''}
          ></input>
        </div>

        <div>
          <label id='profile_label'>Year</label>
          <input
            className={classes.profile_input}
            type='number'
            placeholder='Years in organisation'
            ref={yearRef}
            defaultValue={props.data.year ? props.data.year : ''}
          ></input>
        </div>

        <div>
          <button type='submit'>Save Changes</button>
        </div>
      </form>
    </Fragment>
  )
};

export default ProfileForm;