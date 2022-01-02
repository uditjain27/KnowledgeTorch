import { useState } from 'react';
import AllTopics from './AllTopics';
import classes from './GlobalTopic.module.css';
import MyTopics from './MyTopics';
import RaiseNewTopic from './RaiseNewTopic';

const GlobalTopic = (props) => {
  const [state, setState] = useState('my');

  const setView = (view) => {
    setState(view);
  }

  return (
    <div className={classes.wrapper}>
      <section>
        {
          state !== 'all' && <button className={`${classes.button}`} onClick={() => setView('all')}>👁 View all topics</button>
        }
        {
          state !== 'my' && <button className={`${classes.button}`} onClick={() => setView('my')}>👁 View my requests</button>
        }
        <button className={`${classes.button} ${classes.floatRight}`} onClick={() => setView('new')}>🗽 Raise new topic</button>
        <button className={`${classes.button} ${classes.floatRight}`} onClick={() => setView('')}>🔍 Search topic</button>
      </section>
      <section>
        {
          state === 'my' && <MyTopics />
        }
        {
          state === 'all' && <AllTopics />
        }
        {
          state === 'new' && <RaiseNewTopic />
        }
      </section>
    </div>
  );
}

export default GlobalTopic;