import { Fragment } from 'react';
import classes from './PreLoader2.module.css';

const PreLoader2 = () => {
  return (
    <Fragment>
      <div className={classes.body} />
      <main className={classes.main}>
        <div className={classes.preloader}>
          <div className={classes.preloader__square}></div>
          <div className={classes.preloader__square}></div>
          <div className={classes.preloader__square}></div>
          <div className={classes.preloader__square}></div>
        </div>
        <div className={classes.status}>Loading<span className={classes.status__dot}>.</span><span className={classes.status__dot}>.</span><span className={classes.status__dot}>.</span></div>
      </main>
    </Fragment>
  )
}

export default PreLoader2;