import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { URL } from '../../store/helper';
import { UISliceActions } from '../../store/ui-slice';
import classes from './Contributions.module.css';

import ContributionsList from "./ContributionsList";

const MyContributions = (props) => {

  /*
  Make an api call to get the list of all the contributions 
  username - props.user;
  Store the result in varibale 'info'
  */
  const token = useSelector((state) => state.loginStore.token);
  const isLoading = useSelector((state => state.uiStore.isLoading));

  const [notesData, setNotesData] = useState([]);


  const dispatch = useDispatch();
  const fetchAllNotes = async () => {
    dispatch(UISliceActions.setLoading());
    const response = await fetch(
      `${URL}/notes`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
    );
    if (!response.ok) {
      throw new Error("cannot fetch all notes");
    }

    const data1 = await response.json();
    dispatch(UISliceActions.setLoading());
    return data1;
  }

  const fetchNotesFunc = async () => {
    try {
      const data1 = await fetchAllNotes();
      return data1;
    } catch (e) {
      dispatch(UISliceActions.setLoading());
      console.log(e);
      alert(e);
    }
  }
  
  const onload = async() => {
    const data = await fetchNotesFunc();
    /*Clean the coming code*/
    setNotesData(data);
    return data;
  }

  useEffect(() => {
    onload();
  } ,[])

  const info = [
    {
      type: 'Notes',
      topic: 'sample topic',
      description: 'sample description',
      subject: 'sample subject',
      fileSize: '1010KB',
      uploadedOn: '01 January, 2022',
      viewCount: 15,
      downloadCount: 10
    },
    {
      type: 'Notes',
      topic: 'sample topic 2',
      description: 'sample description 2',
      subject: 'sample subject 2',
      fileSize: '2020KB',
      uploadedOn: '02 January, 2022',
      viewCount: 15,
      downloadCount: 10
    },
    {
      type: 'Previous Year Paper',
      topic: 'sample topic 3',
      description: 'sample description 3',
      subject: 'sample subject 3',
      fileSize: '3030KB',
      uploadedOn: '03 January, 2022',
      viewCount: 15,
      downloadCount: 10
    }
  ];
  /*
  new contribution button
  list of contributions with modify button
  */

  const history = useHistory();
  const newContriHandler = () => {
    history.push('/uploads');
    console.log("New Contribution");
  };


  return (
    <div>
      <div className={classes.full_width}>
        <button onClick={newContriHandler} className={`${classes.custom_btn} ${classes.btn}`}>New Contribution
          <i className="fa fa-solid fa-upload"></i>
        </button>
      </div>
      {notesData.length === 0 ? <p className={classes.no_contri}>No Contribution yet. Please contribute to see you contributions</p> :
        <div>{notesData.map((ele, index) => { return (<ContributionsList data={ele} key={index} />) })}</div>}


      {/* <embed src="https://sumanbogati.github.io/tiny.pdf" width="600px" height="500px" /> */}

      {/* <object data="https://sumanbogati.github.io/tiny.pdf" type="application/pdf" width="600" height="500">
        <embed src="https://sumanbogati.github.io/tiny.pdf" width="600px" height="500px" />
        <p>This browser does not support PDFs. Please download the PDF to view it:
          <a href="https://sumanbogati.github.io/tiny.pdf">Download PDF</a>.</p>
    </object> */}
    </div >);
}

export default MyContributions;