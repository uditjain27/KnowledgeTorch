import { NavLink } from 'react-router-dom';
import classes from './HyperLinksList.module.css';

function HyperLinksList(props) {
    const links = ['Home', 'Uploads', 'Top Contributors', 'Contact Us'];
    const on = () => {
        const a = document.getElementById("abcdef");
        console.log(a);
    }

    return (
        <ul className={classes.navbar_list}>

            <NavLink to={`/home`} activeClassName={classes.active} >
                <li className={classes.items} >
                    Home
                </li>
            </NavLink>
            <NavLink to={`/uploads`} activeClassName={classes.active}>
                <li className={classes.items} >
                    Uploads
                </li>
            </NavLink>
            {/* <NavLink to='/home#abcdef' activeClassName={classes.active}onClick={on}>
                <a href="#abcdef">
                    <li className={classes.items} >
                        Top Contributors
                    </li>
                </a>
            </NavLink> */}
            <NavLink to={`/contactus`} activeClassName={classes.active}>
                <li className={classes.items} >
                    Contact Us
                </li>
            </NavLink>

        </ul >
    );
}

export default HyperLinksList;