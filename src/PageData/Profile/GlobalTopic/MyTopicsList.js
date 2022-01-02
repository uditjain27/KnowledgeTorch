import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../store/helper";

import classes from './topicsList.module.css';

const MyTopicsList = (props) => {

  const [state, setState] = useState(false);
  const [date, setDate] = useState();
  /* const token = useSelector((state) => state.loginStore.token);

  const fetchMyTopics = async function () {
    try {
      const response = await fetch(`${URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      if (!response.ok) {
        throw new Error('unable');
      }

      const data = await response.json();
      setTopicList(data);
    } catch (error) {
      console.log()
    }
  }

  */
  useEffect(() => {
    var newDate = new Date(props.ele.createdOn);
    console.log(newDate);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var dt = newDate.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    setDate(dt + '-' + month + '-' + year);
  }, []);


  const toggleState = function () {
    setState(!state);
  }


  return (
    <Fragment>
      <div className={classes.list_item} onClick={toggleState}>
        <span>{props.ele.name}</span>
        <span>{props.ele.tags}</span>
        <span>{date}</span>
        <span>0</span>
      </div>
      {
        state && <div className={classes.expand}>
          
        </div>
      }
    </Fragment >
  )
}

export default MyTopicsList;