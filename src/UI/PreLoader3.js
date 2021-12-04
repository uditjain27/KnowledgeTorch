import { Fragment } from 'react';
import classes from './PreLoader3.module.css';

const PreLoader3 = () => {
  return (
    <Fragment>
      <div className={classes.body} />
      <div className={classes.preloader}>
        <div className={classes.box}>
          <div className={classes.box__inner}>
            <div className={classes.box__back_flap}></div>
            <div className={classes.box__right_flap}></div>
            <div className={classes.box__front_flap}></div>
            <div className={classes.box__left_flap}></div>
            <div className={classes.box__front}></div>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.box__inner}>
            <div className={classes.box__back_flap}></div>
            <div className={classes.box__right_flap}></div>
            <div className={classes.box__front_flap}></div>
            <div className={classes.box__left_flap}></div>
            <div className={classes.box__front}></div>
          </div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
        <div className={classes.line}>
          <div className={classes.line__inner}></div>
        </div>
      </div>
    </Fragment>
  )
}

export default PreLoader3;