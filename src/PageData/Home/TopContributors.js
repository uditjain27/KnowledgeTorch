import { Fragment, useState, useEffect } from 'react';
import classes from './TopContributors.module.css';

const TopContributors = (props) => {
  const fetchURL = '';

  const [obj, setObj] = useState({});

  const fetchData = async () => {
    const response = await fetch(fetchURL);
    if (!response.ok) {
      throw new Error("Cannot fetch");
    }

    const result = await response.json();
    return result;
  }

  const fetchDataHandler = async () => {
    try {
      const data = await fetchData();
      setObj(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchDataHandler();
  }, [])

  return (
    <div className={classes.container}>
      <p className={classes.header}>Top Contributors</p>
      <div className={classes.wrapper}>
        <article className={`${classes.card} ${classes.second}`}>
          <div className={classes.thumb}></div>
          <div className={classes.infos}>
            <h2 className={classes.title}>Shivam Garg</h2>
            <h3 className={classes.seats}>College Name : {'College Name College Name College Name College'}</h3>
            <h3 className={classes.seats}>Views : {2}</h3>
            <h3 className={`${classes.seats} ${classes.seat}`}>Downloads : {2}</h3>
            <p className={classes.txt}>
              Team Knowledge Torch congratulate
              <span>{' Shivam Garg '}</span> for getting second highest number of views and downloads in the last month🎉🎉🎉
            </p>
          </div>
        </article>
        <article className={`${classes.card} ${classes.first}`}>
          <div className={classes.thumb}></div>
          <div className={classes.infos}>
            <h2 className={classes.title}>Udit Jain</h2>
            <h3 className={classes.seats}>College Name : {'College Name College Name College Name College'}</h3>
            <h3 className={classes.seats}>Views : {2}</h3>
            <h3 className={`${classes.seats} ${classes.seat}`}>Downloads : {2}</h3>
            <p className={classes.txt}>
              Team Knowledge Torch congratulate
              <span>{' Udit Jain '}</span> for getting highest number of views and downloads in the last month🎉🎉🎉
            </p>
          </div>
        </article>
        <article className={`${classes.card} ${classes.third}`}>
          <div className={classes.thumb}></div>
          <div className={classes.infos}>
            <h2 className={classes.title}>Anshul Gupta</h2>
            <h3 className={classes.seats}>College Name : {'College Name College Name College Name College'}</h3>
            <h3 className={classes.seats}>Views : {2}</h3>
            <h3 className={`${classes.seats} ${classes.seat}`}>Downloads : {2}</h3>
            <p className={classes.txt}>
              Team Knowledge Torch congratulate
              <span>{' Anshul Gupta '}</span> for getting third highest number of views and downloads in the last month🎉🎉🎉
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default TopContributors;

/*

<article className={classes.card}>
  <div className={classes.thumb}></div>
  <div className={classes.infos}>
    <h2 className={classes.title}>new york city<span className={classes.flag}></span></h2>
    <h3 className={classes.date}>november 2 - 4</h3>
    <h3 className={classes.seats}>seats remaining: 2</h3>
    <p className={classes.txt}>
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 className={classes.details}>event details</h3>
  </div>
</article> */