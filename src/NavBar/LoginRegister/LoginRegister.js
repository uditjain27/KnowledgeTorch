import { useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../../store/login-context';
import classes from './LoginRegister.module.css';

function LoginRegister(props) {
    
    const ctx = useContext(AuthContext);
    function showHideModal() {
        ctx.setFormView();
        ctx.toggleModalView();
    }
    
    return (
        <div className={classes.login_register}>
            <Button onClick={showHideModal} />
        </div>
    )
}

export default LoginRegister;