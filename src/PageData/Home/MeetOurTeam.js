import classes from './MeetOurTeam.module.css';
import img1 from './../../Signin/img/uditjain.jpg'

const MeetOurTeam = () => {
  return(
    <div className={classes.full_widthh}>
      <div>
        <h1>Meet Our Team</h1>
      </div>
      <div className={classes.section}>
        <div className={classes.card}>
          <img src={img1}></img>
          <h2 className={classes.name}>Udit Jain</h2>
          <p className={classes.designation}>FrontEnd Developer</p>
        </div>
        <div className={classes.card}>
          <img></img>
          <h2 className={classes.name}>Shivam Garg</h2>
          <p className={classes.designation}>BackEnd Developer</p>
        </div>
        <div className={classes.card}>
          <img></img>
          <h2 className={classes.name}>Anshul Gupta</h2>
          <p className={classes.designation}>Python Developer</p>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam;