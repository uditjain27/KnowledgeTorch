import { NavLink } from 'react-router-dom';
import classes from './Logo.module.css';

function Logo(){
    return(
        <NavLink to='/home' className={classes.logo}>Knowledge <br/> Torch<i className="fas fa-book-open"></i></NavLink>
    )
}

export default Logo;