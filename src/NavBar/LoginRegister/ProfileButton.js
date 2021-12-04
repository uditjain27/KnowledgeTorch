import classes from './LoginRegister.module.css';
import { Link } from 'react-router-dom';

function ProfileButton(props) {

    return (
        <div className='login-register'>
            <Link to='/profile'>
                <button className={classes.btn__login_register} type='button'>Profile
                    <i class="fa fa-thin fa-user"></i>
                </button>
            </Link>
        </div>
    )
}

export default ProfileButton;