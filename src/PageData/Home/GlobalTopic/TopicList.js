import { Fragment, useState } from "react";

const TopicList = (props) => {

  const [topicList, setTopicList] = useState([]);
  const fetchListData = async function(){
    const response = await fetch('');
    if(!response.ok){
      throw new Error('unable to fetch list');
    }

    const data = await response.json();
    return data;
  }

  const fetchList = async function(){
    const data = fetchListData();
    setTopicList(data);
  }


  return(
    <Fragment>
    {
      topicList && (topicList.map((ele) => {
        return 'abcd'
      }))
    }
    </Fragment>
  )
}

export default TopicList;