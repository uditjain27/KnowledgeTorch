import classes from './Contributions.module.css';

const ContributionsList = (props) => {
  return (
    <div className={classes.courses_container}>
      <div className={classes.course}>
        <div className={classes.course_preview}>
          <h6>{props.data.type}</h6>
          <h2>{props.data.topic}</h2>
          <p>{props.data.description}</p>
        </div>
        <div className={classes.course_info}>
          <div className={classes.card__entry}>
            <div className={classes.label}><strong>Subject : </strong></div>
            <span className={classes.span}>{props.data.subject}</span>
          </div>
          <div className={classes.card__entry}>
            <label className={classes.label}><strong>File Size : </strong></label>
            <span className={classes.span}>{props.data.fileSize}</span>
          </div>
          <div className={classes.card__entry}>
            <label className={classes.label}><strong>Posted On : </strong></label>
            <span className={classes.span}>{props.data.uploadedOn}</span>
          </div>
          <div className={classes.card__entry}>
            <label className={classes.label}><strong>View Count : </strong></label>
            <span className={classes.span}>{props.data.viewCount}</span>
          </div>
          <div className={classes.card__entry}>
            <label className={classes.label}><strong>Download Count : </strong></label>
            <span className={classes.span}>{props.data.downloadCount}</span>
          </div>
          <div className={classes.card__entry}>
            <button className={`${classes.custom_btn} ${classes.btn_modify}`}><span>View Contribution</span></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContributionsList;

/*
<div className={classes.card}>
      <div className={classes.card__entry}>
        <span className={classes.label}><strong>Topic : </strong></span>
        <span className={classes.span}>{props.data.topic}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>Description</strong></label>
        <span className={classes.span}>{props.data.description}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>Subject</strong></label>
        <span className={classes.span}>{props.data.subject}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>File Size</strong></label>
        <span className={classes.span}>{props.data.fileSize}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>Posted On/Last Modified On</strong></label>
        <span className={classes.span}>{props.data.postedOn}</span>
      </div>
      <div className={classes.card__entry}>
        <button className={`${classes.custom_btn} ${classes.btn_modify}`}><span>Modify Contribution</span></button>
      </div>
    </div>


<div className={classes.courses-container}>
  <div className={classes.course}>
    <div className={classes.course-preview}>
      <h6>{props.data.type}</h6>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
    <div className={classes.course-info}>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>Subject</strong></label>
        <span className={classes.span}>{props.data.subject}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>File Size</strong></label>
        <span className={classes.span}>{props.data.fileSize}</span>
      </div>
      <div className={classes.card__entry}>
        <label className={classes.label}><strong>Posted On/Last Modified On</strong></label>
        <span className={classes.span}>{props.data.postedOn}</span>
      </div>
      <button className={`${classes.custom_btn} ${classes.btn_modify}`}>Modify Contribution</button>
    </div>
  </div>
</div>
*/