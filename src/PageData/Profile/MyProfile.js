import { Link } from 'react-router-dom';
import classes from './MyProfile.module.css';

const MyProfile = (props) => {
  const date1 = new Date(props.data.created);
  const year = date1.getFullYear();
  const month = date1.getMonth() + 1;
  const date = date1.getDate();
  return (
    <div>


      <aside className={classes.profile_card}>
        <div className={classes.aside}>
          <header>
            <a href="http://victory-design.ru/">
              <img src="https://freesvg.org/img/abstract-user-flat-4.png" />
            </a>
            <h1> Hello {props.data.name} !</h1>
            <h2>{props.data.email}</h2>
          </header>

          <div className={classes.profile_bio}>
            {!props.data.available &&
              <p className={classes.no_info}>No information available. Please update your profile</p>
            }
            {props.data.available && <div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-user"></i>
                <label>
                  User Name : </label>
                <span>{props.data.userName}</span>
              </div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-building"></i>
                <label>
                  College : </label>
                <span>{props.data.college}</span>
              </div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-graduation-cap"></i>
                <label>
                  Course :</label>
                <span>{props.data.course}</span>
              </div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-clock"></i>
                <label>
                  Year : </label>
                <span>{props.data.year}</span>
              </div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-calendar"></i>
                <label>
                  Created on : </label>
                <span>{`${date}/${month}/${year}`}</span>
              </div>
              <div className={classes.bio_entry}>
                <i className="fa fa-solid fa-phone"></i>
                <label>
                  Contact Number : </label>
                <span>{props.data.contactNo}</span>
              </div>
            </div>}
          </div>
        </div>

        <Link to='/profile?edit=true' className={classes.edit_profile}>Edit Profile</Link>
      </aside>
    </div>
  );
}

export default MyProfile;