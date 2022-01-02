import { useState } from "react";
import MyContributions from "./MyContributions";
import MyProfile from "./MyProfile";
import ResetPassword from "./ResetPassword";

import classes from './ProfileForm.module.css';
import GlobalTopic from "./GlobalTopic/GlobalTopic";

const ProfileView = (props) => {
  const [tab, setTab] = useState('profile');

  const tabToggleHandler = function (tab) {
    setTab(tab);
  }

  return (
    <div>
      <main className={classes.main}>
        <section className={classes.section__left}>
          <div onClick={() => tabToggleHandler('profile')}
            className={`${classes.tab} ${tab === 'profile' ? `${classes.active}` : ``}`}
          >My data</div>
          <div onClick={() => tabToggleHandler('contributions')}
            className={`${classes.tab} ${tab === 'contributions' ? `${classes.active}` : ``}`}
          >My Contributions</div>
          <div onClick={() => tabToggleHandler('repository')}
            className={`${classes.tab} ${tab === 'repository' ? `${classes.active}` : ``}`}
          >Global Topic</div>
          <div onClick={() => tabToggleHandler('reset')}
            className={`${classes.tab} ${tab === 'reset' ? `${classes.active}` : ``}`}
          >Reset Password</div>
        </section>

        <section className={classes.section__right}>
          {tab === 'profile' ? <MyProfile data={props.data} /> : ''}
          {tab === 'contributions' ? <MyContributions user={props.data.userName} /> : ''}
          {tab === 'repository' ? <GlobalTopic /> : ''}
          {tab === 'reset' ? <ResetPassword user={props.data.userName} /> : ''}
        </section>
      </main>
    </div>
  );
}

export default ProfileView;