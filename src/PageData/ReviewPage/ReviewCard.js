import { Fragment, useState } from "react";
import { URL } from "../../store/helper";

const ReviewCard = function (props) {
  const [showView, setShowView] = useState(true);

  const sendStatus = async (statusReport) => {
    const response = await fetch(`${URL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statusReport)
      }
    );

    if(!response.ok){
      throw new Error();
    }
  }

  const onCLick = () => {
    setShowView(false);
  }

  const setStatus = async (status) => {
    try{
      console.log(status);
      //await sendStatus({status : status});
      props.deleteRecord(props.details.id);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <Fragment>
      <div>
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
            <span>{props.details.postedOn}</span>
          </div>
          <div>
            <span>Size : </span>
            <span>{props.details.size}</span>
          </div>
        </section>
        {
          showView && <section>
            <button onClick={onCLick}>View</button>
          </section>
        }
        {
          !showView && <section>
            <button onClick={() => {setStatus(true)}}>Approve</button>
            <button onClick={() => {setStatus(false)}}>Reject</button>
            <button>On Hold</button>
          </section>
        }
      </div>
    </Fragment>
  );
}

export default ReviewCard;