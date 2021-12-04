import { Fragment } from 'react';
import classes from './ViewPopup.module.css';

const ViewPopup = (props) => {

  const viewDoc = () => {
    const id = props.details.id;
    let aTag = document.createElement("a");
    aTag.href = `http://localhost:5000/notes/${id}/data`;
    aTag.target = '_blank';
    aTag.download = 'abcd.pdf';
    aTag.click();
    aTag.remove();
  }


  return (
    <Fragment>
      <div className={classes.blur}></div>
      <div className={classes.centerModal}>

        <section className={classes.section}>
          <h2>Notes</h2>
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
            <span>University : </span>
            <span>{props.details.university ? props.details.university : 'NA'}</span>
          </div>
          <div>
            <span>Course : </span>
            <span>{props.details.course ? props.details.course : 'NA'}</span>
          </div>
          <div>
            <span>File Size : </span>
            <span>{props.details.size ? props.details.size : 'NA'}</span>
          </div>
          <div>
            <span>Author : </span>
            <span>{props.details.postedBy.name ? props.details.postedBy.name : 'NA'}</span>
          </div>
          <div>
            <span>Date : </span>
            <span>{props.details.postedOn ? props.details.postedOn : 'NA'}</span>
          </div>
          <div>
            <span>Views : </span>
            <span>{props.details.viewCount ? props.details.viewCount : 9999}</span>
          </div>
          <div>
            <span>Downloads : </span>
            <span>{props.details.downloadCount ? props.details.downloadCount : 1111}</span>
          </div>
        </section>

        <section className={classes.section}>
          <span className={classes.btn} onClick={props.togglePopup}>
            <span className={classes.noselect}>Cancel</span>
            <div className={classes.circle}></div>
          </span>
          <span className={classes.btn} onClick={viewDoc}>
            <span className={classes.noselect}>View</span>
            <div className={classes.circle}></div>
          </span>
        </section>
      </div>
    </Fragment>
  );
}

export default ViewPopup;