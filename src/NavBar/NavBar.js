import HyperLinks from "./HyperLinks/HyperLinks";
import LoginRegister from "./LoginRegister/LoginRegister";
import classes from './NavBar.module.css';
import Modal from "./LoginRegister/Modal";
import { useContext } from "react";
import { AuthContext } from "../store/login-context";
import { useSelector } from "react-redux";
import ProfileButton from "./LoginRegister/ProfileButton";
import Logout from "./LoginRegister/Logout";
import { useLocation } from "react-router-dom";
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';


function NavBar(props) {
    const isLogin = useSelector((state) => state.loginStore.isLogin);
    const location = useLocation();
    console.log(location.pathname);

    const keywordRef = useRef();

    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        history.push(`/search?keyword=${keywordRef.current.value}`);
    }

    const ctx = useContext(AuthContext);
    return (

        <nav className={classes.nav}>
            {ctx.isModalVisible &&
                <Modal />}
            <HyperLinks />
            {location.pathname === '/home' ? '' :
                <div>
                    <form className={classes.search} onSubmit={submitHandler}>
                        <input className={classes.input_search} type="text" placeholder="Search for documents" ref={keywordRef}></input>
                        <button className={`${classes.btn} ${classes.btn_search}`}>
                            <i className="fas fa-search"></i>
                            <span>Search</span>
                        </button>
                    </form>
                </div>}
            {!isLogin && <LoginRegister />}
            {isLogin && <div className={classes.style__btn}><ProfileButton /><Logout /></div>}
        </nav>
    );
}

export default NavBar;