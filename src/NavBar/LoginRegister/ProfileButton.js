import classes from './LoginRegister.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function ProfileButton(props) {

    return (
        <div className='login-register'>
            <Link to='/profile'>
                <Button type='button' color='secondary' variant="contained" style={{marginRight:"15px"}}>
                    Profile&nbsp; <i className="fa fa-thin fa-user"></i>
                </Button>
                
            </Link>
        </div>
    )
}

export default ProfileButton;