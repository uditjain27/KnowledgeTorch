
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { URL } from "../../../store/helper";

import classes from './topicsList.module.css';



const AllTopicsList = (props) => {

  const [state, setState] = useState(false);
  const [date, setDate] = useState();
  /* const token = useSelector((state) => state.loginStore.token);

  const fetchAllTopics = async function () {
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
  console.log(props.ele);
  useEffect(() => {
    //fetchMyTopics
    //fetchAllTopics();

    var newDate = new Date(props.ele.createdOn);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var dt = newDate.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    };
    setDate(dt + '-' + month + '-' + year);
  }, []);

  const toggleState = function () {
    setState(!state);
  }

  const history = useHistory();
  const redirectToUpload = (id, subject) => {
    history.push(`/uploads?id=${id}&subject=${subject}`)
  }

  return (
    <Fragment>
      <div className={classes.allList_item} onClick={toggleState}>
        <span>{props.ele.name}</span>
        <span>{props.ele.raisedBy.name}
          <br />
          {props.ele.raisedBy.username}
        </span>
        <span>{props.ele.tags}</span>
        <span>{date}</span>
        <span>0</span>
      </div>
      {
        state && <div className={classes.expand}>
          <div className={classes.description}>Description : {props.ele.description}</div>
          <button onClick={() => redirectToUpload(props.ele.id, props.ele.subject)} className={classes.redirect}>Contribute ▶</button>
        </div>
      }
    </Fragment >
  );
}

export default AllTopicsList;