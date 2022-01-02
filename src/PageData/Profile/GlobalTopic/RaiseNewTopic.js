import { useSelector } from "react-redux";
import { URL } from "../../../store/helper";
import { useRef, useState } from "react";
import {
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormCheck,
  CCol,
  CForm,
  CButton
} from '@coreui/react';

import '../../DashBoard/scss/style.scss';

const RaiseNewTopic = (props) => {

  const token = useSelector((state) => state.loginStore.token);

  const titleRef = useRef();
  const subjectRef = useRef();
  const tagRef = useRef();
  const descriptionRef = useRef();

  const [state, setState] = useState(false);


  const raiseNewTopic = async (topicData) => {
    try {
      console.log(token);
      const response = await fetch(`${URL}/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(topicData)
      });

      if (!response.ok) {
        const text = await response.json();
        console.log(text);
        throw new Error(text.message);
      }
      setState(true);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const subject = subjectRef.current.value;
    const tag = tagRef.current.value;
    const description = descriptionRef.current.value;
    if (title !== ''
      && subject !== ''
      && tag !== ''
      && description !== '') {
      const topicData = {
        name: title,
        subject: subject,
        tags: tag,
        description: description,
      };
      raiseNewTopic(topicData);
      console.log(topicData);
    }
  }

  return (
    <div className='use_coreui_css' style={{ width: '500px', marginLeft: '240px', marginTop: '75px' }}>
      <CForm className="row g-3" onSubmit={submitHandler}>
        <CFormFloating className="mb-3">
          <CFormInput type="text" id="floatingTitle" placeholder="Topic" ref={titleRef} style={{marginBottom: '-15px'}}/>
          <CFormLabel htmlFor="floatingTitle">Topic</CFormLabel>
        </CFormFloating>
        <CFormFloating>
          <CFormInput type="text" id="floatingSubject" placeholder="Subject" ref={subjectRef} />
          <CFormLabel>Subject</CFormLabel>
        </CFormFloating>
        <br />
        <CFormFloating>
          <CFormInput type="text" id="floatingTags" placeholder="Tags" ref={tagRef} />
          <CFormLabel>Tags</CFormLabel>
        </CFormFloating>
        <br />
        <CFormFloating>
          <CFormInput type="text" id="floatingDescription" placeholder="Description" ref={descriptionRef} />
          <CFormLabel>Description</CFormLabel>
        </CFormFloating>
        <CCol xs={12}>
          <CFormCheck type="checkbox" id="gridCheck" label="Agree to raise a request" />
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Raise Request</CButton>
        </CCol>
      </CForm>

      {
        state && <div style={{ position: 'absolute', top: '180px', left: '600px', fontSize: '22px' }}>
          <span style={{color: '#2cac05', fontWeight: '600' }}>Created Successfully !! </span>
          <span>🎉🎉🎉🎉</span>
          </div>
      }
    </div>
  );
}

export default RaiseNewTopic;