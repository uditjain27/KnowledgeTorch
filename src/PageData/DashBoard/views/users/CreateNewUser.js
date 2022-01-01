import React, { lazy, useRef, useState } from 'react'

import {
  CForm,
  CButton,
  CCol,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck
} from '@coreui/react'
import { URL } from '../../../../store/helper';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passRef = useRef();
  const roleRef = useRef();

  const [userNameValidMsg, setUserNameValid] = useState(false);
  const [emailValidMsg, setEmailValid] = useState(false);
  const [passwordValidMsg, setPassValid] = useState(false);

  const token = useSelector((state) => state.loginStore.isLogin);


  const setNewUser = async function(profile){
    const response = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token
      },
      body: JSON.stringify(profile),
    });

    if(!response.ok){
      throw new Error("Unable to create new Profile");
    }
  }

  const checkName = function (name) {
    if (name === '') {
      var a = document.querySelector('#validationServer01');
      console.log(a);
      var att = document.createAttribute("invalid");
      a.setAttributeNode(att);
      /* a.setAttribute('class', 'form-control is-valid'); */
      console.log(name);
      return false;
    }
    return true;
  }

  const checkUserName = function (userName) {
    if (userName.includes(' ')) {
      var ele = document.querySelector('#validationServerUsername');
      ele.setAttribute('class', 'form-control is-invalid');
      ele.focus();
      setUserNameValid(true);
      return false;
    }
    return true;
  }
  const checkEmail = function (email) {
    if ((!email.includes('@')) || (!email.includes('.'))) {
      var ele = document.querySelector('#validationServer02');
      ele.setAttribute('class', 'form-control is-invalid');
      ele.focus();
      setEmailValid(true);
      return false;
    }
    return true;
  }
  const checkPassword = function (password) {
    if ((password.toUpperCase() === password || password.toLowerCase() === password)) {
      var ele = document.querySelector('#validationServerPassword');
      ele.setAttribute('class', 'form-control is-invalid');
      ele.focus();
      setPassValid(true);
      return false;
    }
    return true;
  }

  const FormValidation = async (e) => {
    e.preventDefault();
    if (checkUserName(userNameRef.current.value) &&
      checkEmail(emailRef.current.value) &&
      checkPassword(passRef.current.value)) {
      var ele = document.querySelector('#validationServer04');
      const profile = {
        email: emailRef.current.value,
        name: nameRef.current.value,
        username: userNameRef.current.value,
        password: passRef.current.value,
        role: ele.value
      }
      /* try{
        await setNewUser(profile);
      }catch(error){
        alert(error);
      } */
      console.log(profile);
    }
  }

  const offFocus = function () {
    const allInputs = document.querySelectorAll('input');
    allInputs[1].setAttribute('class', 'form-control');
    allInputs[2].setAttribute('class', 'form-control');
    allInputs[3].setAttribute('class', 'form-control');
    setUserNameValid(false);
    setPassValid(false);
    setEmailValid(false);
  }


  return (
    <>
      <CForm className="row g-3 needs-validation" onSubmit={FormValidation} >
        <div style={{ marginTop: '5px' }}></div>
        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol md={6}>
            <CFormLabel htmlFor="validationServer01">Name</CFormLabel>
            <CFormInput type="text" id="validationServer01" placeholder='Name' required ref={nameRef} />
          </CCol>
        </div>
        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol md={6}>
            <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
            <CFormInput type="email" id="validationServer02" placeholder='Email' required ref={emailRef} onBlur={offFocus} />
            {
              emailValidMsg && <div style={{ fontSize: '15.5px', color: '#dd1e1e' }}>Please enter valid emailId</div>
            }
          </CCol>
        </div>
        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol md={6}>
            <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
            <CInputGroup className="has-validation">
              <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
              <CFormInput
                type="text"
                id="validationServerUsername"
                defaultValue=""
                aria-describedby="inputGroupPrepend03"
                required
                ref={userNameRef}
                onBlur={offFocus}
              />
              {
                userNameValidMsg && <div style={{ fontSize: '15.5px', color: '#dd1e1e' }}>username cannot have space.</div>
              }
            </CInputGroup>
          </CCol>
        </div>
        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol md={6}>
            <CFormLabel htmlFor="validationServerUsername">Password</CFormLabel>
            <CInputGroup className="has-validation">
              <CInputGroupText id="inputGroupPrepend03">🔑</CInputGroupText>
              <CFormInput
                type="password"
                id="validationServerPassword"
                defaultValue=""
                aria-describedby="inputGroupPrepend03"
                required
                ref={passRef}
                onBlur={offFocus}
              />
              {
                passwordValidMsg && <div style={{ fontSize: '15.5px', color: '#dd1e1e' }}>Password must have atleast one upper and lower case letters.</div>
              }
            </CInputGroup>
          </CCol>
        </div>
        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol md={6}>
            <CFormLabel htmlFor="validationServer04">Role</CFormLabel>
            <CFormSelect id="validationServer04">
              <option>Choose...</option>
              <option>Admin</option>
              <option>Reviewer</option>
              <option>Intern</option>
              <option>User</option>
            </CFormSelect>
          </CCol>
        </div>

        <div style={{ marginTop: '15px', marginLeft: '250px' }}>
          <CCol xs={12} md={6}>
            <CFormCheck
              type="checkbox"
              id="invalidCheck"
              label="Agree to terms and conditions"
              required
            />
          </CCol>
        </div>
        <div style={{ marginTop: '15px', marginLeft: '375px' }}>
          <CCol xs={12} md={6}>
            <CButton color="primary" type="submit" style={{ width: '250px' }}>
              Submit form
            </CButton>
          </CCol>
        </div>
      </CForm>
    </>
  )
}

export default Dashboard
