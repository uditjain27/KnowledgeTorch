import classes from './LoginRegister.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../../store/login-slice';
import Button from '@mui/material/Button';

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
                <Button type='button' onClick={logoutHandler} color="secondary" variant="outlined"  style={{marginRight:"15px"}}>Logout&nbsp;
                    <i className="fa fa-thin fa-power-off"></i>
                </Button>
            </Link>
        </div>
    )
}

export default Logout;