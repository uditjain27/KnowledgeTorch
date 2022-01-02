import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../store/helper";
import ReviewCard from "./ReviewCard";
import classes from './ReviewCard.module.css';

const ReviewPage = function (props) {

  const [details, setDetails] = useState([]);
  const [state, changeState] = useState(false);

  const token = useSelector((state) => state.loginStore.isLogin);

  const fetchData = async function () {
    try {
      const response = await fetch(`${URL}/notes/review`,{
        method:"GET",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer' + token
        }
      });
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
    description: 'des des des des des des',
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
    setDetails(details.filter((ele) => { return ele.id !== id }));
  }

  useEffect(() => {
    fetchData();
  }, [state]);

  const reloadPage = () => {
    //reload page;
    changeState(!state);
    /* window.location.reload(); */
  }
  return (
    <div className={classes.page}>
      <button className={classes.reloadButton} onClick={reloadPage}>Refresh 🔄</button>
      <div className={classes.sec}>
        {
          details.length === 0 ?
            <div>No resource to review</div> :
            (details.map((ele) => { return <ReviewCard key={ele.id} details={ele} deleteRecord={deleteRecord} /> }))
        }
      </div>
    </div>
  );
}

export default ReviewPage;