import { useContext } from 'react';
import { AuthContext } from '../../store/login-context';
import './BackDrop.css';

const BackDrop = (props) => {
    const ctx = useContext(AuthContext);
    return (
        <div className='overlay' onClick={ctx.toggleModalView}></div>
    )
}

export default BackDrop;