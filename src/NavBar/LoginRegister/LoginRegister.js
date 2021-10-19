import { useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../../store/login-context';
import './LoginRegister.css';

function LoginRegister(props) {
    
    const ctx = useContext(AuthContext);
    function showHideModal() {
        ctx.setFormView();
        ctx.toggleModalView();
    }
    
    return (
        <div className='login-register'>
            <Button onClick={showHideModal} />
        </div>
    )
}

export default LoginRegister;