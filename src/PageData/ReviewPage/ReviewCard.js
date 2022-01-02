import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../store/helper";

import classes from './ReviewCard.module.css';

const ReviewCard = function (props) {
  const [showView, setShowView] = useState(true);

  const token = useSelector((state) => state.loginStore.token);

  const sendStatus = async (statusReport) => {
    try {
      console.log(statusReport);
      console.log(token);
      const response = await fetch(`${URL}/notes/review`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify(statusReport)
        }
      );

      if (!response.ok) {
        const text = await response.json();
        throw new Error(text.message);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  const onCLick = () => {
    setShowView(false);
  }

  const setStatus = (status) => {
    try {
      console.log(status);
      sendStatus({
        notesId: props.details.id,
        status: status
      });
      //props.deleteRecord(props.details.id);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <div className={classes.card}>
        <section>
          <div>
            <span>Title : </span>
            <span>{props.details.name}</span>
          </div>
          <div>
            <span>Description : </span>
            <span>{props.details.description}</span>
          </div>
          <div>
            <span>Subject : </span>
            <span>{props.details.subject}</span>
          </div>
          <div>
            <span>Posted By : </span>
            <span>{props.details.username}</span>
          </div>
          <div>
            <span>Posted On : </span>
            <span>{`${props.details.postedOn.split('-')[2]}/${props.details.postedOn.split('-')[1]}/${props.details.postedOn.split('-')[0]}`}</span>
          </div>
          <div>
            <span>Size : </span>
            <span>{props.details.size} KB</span>
          </div>
        </section>
        {
          showView && <section className={classes.section}>
            <button className={classes.button} onClick={onCLick}>View</button>
          </section>
        }
        {
          !showView && <section>
            <button className={classes.button} onClick={() => { setStatus('Approved') }}>Approve</button>
            <button className={classes.button} onClick={() => { setStatus('Rejected') }}>Reject</button>
            <button className={classes.button}>On Hold</button>
          </section>
        }
      </div>
    </Fragment>
  );
}

export default ReviewCard;