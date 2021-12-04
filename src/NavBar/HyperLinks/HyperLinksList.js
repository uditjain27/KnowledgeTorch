import { NavLink } from 'react-router-dom';
import classes from './HyperLinksList.module.css';

function HyperLinksList(props) {
    const links = ['Home', 'Uploads', 'Top Contributors', 'Contact Us'];

    return (
        <ul className={classes.navbar_list}>
            {links.map((link, index) =>
                <NavLink to={`/${link.toLowerCase().trim().replace(' ', '')}`} activeClassName={classes.active} key={link}>
                    <li className={classes.items} >
                        {link}
                    </li>
                </NavLink>)
            }
        </ul >
    );
}

export default HyperLinksList;