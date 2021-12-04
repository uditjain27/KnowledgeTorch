import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewPopup from '../../ViewDocument/ViewPopup';
import classes from './SearchedDocsCard.module.css';

const SearchedDocsCard = (props) => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = function () {
    setShowPopup(!showPopup);
  }

  return (
    <Fragment>
      {/* <div className={classes.searched__card}>
        <div>
          <span>Title : </span>
          <span>{props.details.name}</span>
        </div>
        <div>
          <span>Description : </span>
          <span>{props.details.description}</span>
        </div>
        <div>
          <span>Author : </span>
          <span>{props.details.postedBy.name}</span>
        </div>
        <div>
          <span>Posted On : </span>
          <span>{props.details.postedOn}</span>
        </div>
        <button className={classes.view_details} onClick={togglePopup}>
          <Link to={`/home/content/${props.details.id}`}>
          </Link>
          View Details
        </button>
      </div>

      <div>
        {
          showPopup && <ViewPopup details={props.details} togglePopup={togglePopup} />
        }
      </div> */}

      <article className={classes.card}>
        <div className={classes.card__front}>
          <span className={classes.card__title}>
            <span>Title : </span>
            <span>{props.details.name}</span>
          </span>
          <span className={classes.card__description}>
            <span>Description : </span>
            <span>{props.details.description}</span>
          </span>
          <span className={classes.card__description}>
            <span>Title : </span>
            <span>{props.details.name}</span>
          </span>
        </div>
        <div className={classes.card__back}>
          <p className={classes.card__info}>
            <span>Posted On : </span>
            <span>{props.details.postedOn}</span>
          </p>
          <p className={classes.card__info}>
            <span>Author : </span>
            <span>{props.details.postedBy.name}</span>
          </p>
          <p className={classes.card__info}>
            <span>Posted On : </span>
            <span>{props.details.postedOn}</span>
          </p>
          <p className={classes.card__info}>
            <span>Author : </span>
            <span>{props.details.postedBy.name}</span>
          </p>
          <p>
            <span className={classes.span} onClick={togglePopup}>
              <a className={classes.a}>
                View Details
              </a>
            </span>
          </p>
        </div>
      </article>
      <div>
        {
          showPopup && <ViewPopup details={props.details} togglePopup={togglePopup} />
        }
      </div>
    </Fragment >
  );
}

export default SearchedDocsCard;



{/* <div className={classes.square_flip}>
  <div class='square' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
    <div className={classes.square_container}>
      <div className={classes.align_center}><img src="http://titanicthemes.com/files/flipbox/kallyas.png" className={classes.boxshadow} alt="" /></div>
      <h2 className={classes.textshadow}>Kallyas WordPress Theme</h2>
      <h3 className={classes.textshadow}>The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
    </div>
    <div className={classes.flip_overlay}></div>
  </div>
  <div class='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
    <div className={classes.square_container2}>
      <div className={classes.align_center}></div>
      <a href="http://kallyas.net" target="_blank" className={`${classes.boxshadow} ${classes.kallyas_button}`}>View Demos</a>
    </div>
    <div className={classes.flip_overlay}></div>
  </div>
</div> */}
/*
<article className={classes.card}>
  <div className={classes.card__front}>
    <img className={classes.card__img} src="https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300" />
    <h1 className={classes.card__title}> Lorem Ipsum </h1>
  </div>
  <div className={classes.card__back}>
    <p className={classes.card__title}>Lorem Ipsum</p>
    <p>Integer cursus urna vel nisl vestibulum, id maximus diam ultricies. Vestibulum gravida erat sed lectus auctor, vitae molestie nibh tincidunt. Fusce malesuada ultricies enim ut pretium. Curabitur eget urna in quam porta dignissim in sit amet sapien. Praesent luctus malesuada semper. Sed tristique enim tellus, posuere fringilla risus pretium ac.</p>
  </div>
</article> */