import { Fragment, useEffect, useState } from "react";
import { URL } from "../../store/helper";
import ReviewCard from "./ReviewCard";

const ReviewPage = function (props) {

  const [details, setDetails] = useState([]);

  const fetchData = async function () {
    try {
      const response = await fetch(`${URL}`);
      if (!response.ok) {
        throw new Error();
      };
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  const sampleData = [{
    id: '1',
    name: 'name',
    subject: 'sub',
    description: 'des',
    username: 'user',
    postedOn: 'today',
    size: '00'
  },
  {
    id: '2',
    name: 'name',
    subject: 'sub',
    description: 'des',
    username: 'user',
    postedOn: 'today',
    size: '00'
  },
  {
    id: '3',
    name: 'name',
    subject: 'sub',
    description: 'des',
    username: 'user',
    postedOn: 'today',
    size: '00'
  }
  ];

  const deleteRecord = (id) => {
    setDetails(details.filter((ele) => {return ele.id !== id}));
  }
  
  useEffect(() => {
    setDetails(sampleData);
    //async fetchData();
  }, []);

  const reloadPage = () => {
    //reload page;
  }
  return (
    <Fragment>
      <button onClick={reloadPage}></button>
      {
        details.length === 0 ?
          <div>No resource to review</div> :
          (details.map((ele) => { return <ReviewCard key={ele.id} details = {ele}  deleteRecord={deleteRecord} /> }))
      }
    </Fragment>
  );
}

export default ReviewPage;