import { useContext } from 'react';
import { AuthContext } from '../store/login-context';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
    const ctx = useContext(AuthContext);
    return (
        <div className={classes.overlay} onClick={ctx.toggleModalView}></div>
    )
}

export default BackDrop;