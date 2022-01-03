
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../store/helper";
import AllTopicsList from "./AllTopicsList";

import classes from './topicsList.module.css';



const AllTopics = (props) => {

  const [topicList, setTopicList] = useState([]);
  const token = useSelector((state) => state.loginStore.token);

  const fetchAllTopics = async function () {
    try {
      const response = await fetch(`${URL}/topics?pageSize=10&pageNo=0`, {
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
      setTopicList(data.content);
    } catch (error) {
      console.log()
    }
  }

  useEffect(() => {
    //fetchMyTopics
    fetchAllTopics();
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
              <span>Raised by</span>
              <span>Tags</span>
              <span>Raised on</span>
              <span>Total Contributions</span>
            </section>
            <section className={classes.list}>
              {
                topicList.map((ele, index) => {
                  return <AllTopicsList key={index} ele={ele}/>
                })
              }
            </section>
          </div>
      }
    </Fragment>
  );
}

export default AllTopics;