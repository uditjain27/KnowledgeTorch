import HyperLinks from "./HyperLinks/HyperLinks";
import LoginRegister from "./LoginRegister/LoginRegister";
import './NavBar.css';
import Modal from "./LoginRegister/Modal";
import { useContext } from "react";
import { AuthContext } from "../store/login-context";
import { Link } from "react-router-dom";


function NavBar(props) {
    console.log(props.profile);

    const ctx = useContext(AuthContext);
    return (

        <nav className='nav'>
            {ctx.isModalVisible &&
                <Modal />}
            <HyperLinks />
            {!props.profile && <LoginRegister />}
            {props.profile && <Link to='/profile'>Profile</Link>}
        </nav>
    );
}

export default NavBar;