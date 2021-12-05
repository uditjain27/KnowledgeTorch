import { useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../../store/login-context';
import classes from './LoginRegister.module.css';
import { Link } from 'react-router-dom';

function LoginRegister(props) {
    
    const ctx = useContext(AuthContext);
    function showHideModal() {
        ctx.setFormView();
        ctx.toggleModalView();
    }
    
    return (
        <div className={classes.login_register}>
            <Link to='/signup' className={classes.btn_login_register} type='button'>SignIn</Link>
        </div>
    )
}

export default LoginRegister;