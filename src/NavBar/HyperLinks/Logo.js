import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo(){
    return(
        <NavLink to='/home' className='logo'>Knowledge <br/> Torch</NavLink>
    )
}

export default Logo;