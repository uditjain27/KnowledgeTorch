import classes from './LoginRegister.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../../store/login-slice';

function Logout(props) {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(LoginActions.setLogout());
        localStorage.removeItem("credentials");
        alert('Logout Successful');
    }

    return (
        <div className='login-register'>
            <Link to='/home'>
                <button className={classes.btn__login_register} type='button' onClick={logoutHandler}>Logout
                    <i class="fa fa-thin fa-power-off"></i>
                </button>
            </Link>
        </div>
    )
}

export default Logout;