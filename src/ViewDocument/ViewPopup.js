import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { URL } from '../store/helper';
import classes from './ViewPopup.module.css';

const ViewPopup = (props) => {

  const [views, incrementViews] = useState(props.details.views);
  const [likes, incrementLikes] = useState(props.details.likes);
  const isLogin = useSelector((state) => state.loginStore.isLogin);
  console.log(isLogin);

  const viewDoc = () => {
    const id = props.details.id;
    let aTag = document.createElement("a");
    aTag.href = `http://localhost:5000/notes/${id}/data`;
    aTag.target = '_blank';
    aTag.download = 'abcd.pdf';
    aTag.click();
    aTag.remove();
    incrementViews(views+1);
    props.setViews(views+1);
  }

  const likeDoc = async() =>{
    const id = props.details.id;
    const likeURL = `${URL}/notes/${id}/likes`;
    await fetch(likeURL, {
      method: 'POST',
      headers: {
        'Contect-Type' : 'appplication/json'
      }
    });
    incrementLikes(likes+1);
  }


  return (
    <Fragment>
      <div className={classes.blur}></div>
      <div className={classes.centerModal}>

        <section className={classes.section}>
          <h2>{props.details.type}</h2>
        </section>
        <section className={classes.close__btn} onClick={props.togglePopup}>
          <span>X</span>
        </section>
        <section className={classes.section}>
          <div>
            <span>Title : </span>
            <span>{props.details.name}</span>
          </div>
          <div>
            <span>Description : </span>
            <span>
              {props.details.description ? props.details.description : 'Not Available'}
            </span>
          </div>
          <div>
            <span>Subject : </span>
            <span>{props.details.subject ? props.details.subject : 'NA'}</span>
          </div>
          <div>
            <span>Author : </span>
            <span>{props.details.username ? props.details.username : 'NA'}</span>
          </div>
          <div>
            <span>Uploaded On : </span>
            <span>{props.details.postedOn ? props.details.postedOn : 'NA'}</span>
          </div>
          <div>
            <span>File Size : </span>
            <span>{props.details.size ? `${props.details.size}KB` : 'NA'}</span>
          </div>
          <div>
            <span>Likes : </span>
            <span>{likes ? likes : 0}</span>
          </div>
          <div>
            <span>Views : </span>
            <span>{views ? views : 0}</span>
          </div>
          {/* <div>
            <span>Downloads : </span>
            <span>{props.details.downloadCount ? props.details.downloadCount : 1111}</span>
          </div> */}
        </section>

        <section className={classes.section}>
          <div>
            {isLogin &&
              <span className={classes.btn} onClick={likeDoc}>
              <span className={classes.noselect}>Like</span>
              <div className={classes.circle}></div>
            </span>}
          </div>
          <div>
            <span className={classes.btn} onClick={props.togglePopup}>
              <span className={classes.noselect}>Cancel</span>
              <div className={classes.circle}></div>
            </span>
            <span className={classes.btn} onClick={viewDoc}>
              <span className={classes.noselect}>View</span>
              <div className={classes.circle}></div>
            </span>
          </div>
        </section>
      </div>
      {/*<object data={`http://localhost:5000/notes/${props.details.id}/data`} type="application/pdf" width="600" height="500"></object>
    */}</Fragment>
  );
}

export default ViewPopup;