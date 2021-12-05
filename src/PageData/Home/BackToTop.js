import classes from './BTT.module.css';// './  ./BTT.module.css';
import img from './../../Signin/img/up-arrow.png';

const BTT = () => {

  window.onscroll = function () {
    scrollFunctionBTT(); // back to top button
  };
  function scrollFunctionBTT() {
    const myButton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  }

  return (
    <button onClick={topFunction} id="myBtn" className={classes.myBtn}>
        <img src={img} alt="alternative"/>
    </button>
  )
}

export default BTT;