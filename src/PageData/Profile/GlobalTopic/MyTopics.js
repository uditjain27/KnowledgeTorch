import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../store/helper";
import MyTopicsList from "./MyTopicsList";

import classes from './topicsList.module.css';

const MyTopics = (props) => {

  const [topicList, setTopicList] = useState([{abc:'bc'},{abc:'ab'}]);
  const token = useSelector((state) => state.loginStore.token);

  const fetchMyTopics = async function () {
    try {
      const response = await fetch(`${URL}/topics/self`, {
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
      console.log(data);
      setTopicList(data);
    } catch (error) {
      console.log()
    }
  }

  useEffect(() => {
    //fetchMyTopics
    fetchMyTopics();
  }, []);


  return (
    <Fragment>
      {
        topicList.length === 0 ?
          <div className={classes.noContent}>
            No request raised yet...
          </div>
          :
          <div className={classes.listLayout}>
            <section className={classes.heading}>
              <span>Topic Title</span>
              <span>Tags</span>
              <span>Raised on</span>
              <span>Total Contributions</span>
            </section>
            <section className={classes.list}>
              {
                topicList.map((ele, index) => {
                  return <MyTopicsList key={index} ele={ele}/>
                })
              }
            </section>
          </div>
      }
    </Fragment>
  )
}

export default MyTopics;