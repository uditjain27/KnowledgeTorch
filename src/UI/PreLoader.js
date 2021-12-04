import { Fragment } from 'react';
import classes from './PreLoader.module.css';

const PreLoader = () => {
  return <Fragment>
    <div className={classes.body} />
    <div className={classes.bookshelf_wrapper}>
      <ul className={classes.books_list}>
        <li className={`${classes.book_item} ${classes.first}`}></li>
        <li className={`${classes.book_item} ${classes.second}`}></li>
        <li className={`${classes.book_item} ${classes.third}`}></li>
        <li className={`${classes.book_item} ${classes.fourth}`}></li>
        <li className={`${classes.book_item} ${classes.fifth}`}></li>
        <li className={`${classes.book_item} ${classes.sixth}`}></li>
      </ul>
      <div className={classes.shelf}></div>
    </div>
  </Fragment>;
}

export default PreLoader;