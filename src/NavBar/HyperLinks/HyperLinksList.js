import { NavLink } from 'react-router-dom';
import './HyperLinksList.css';

function HyperLinksList(props) {
    const links = ['Home', 'DashBoard', 'Uploads', 'Top Contributors', 'Contact Us'];

    return (
        <ul className='navbar-list'>
            {links.map((link, index) =>
                <NavLink to={`/${link.toLowerCase().trim().replace(' ', '')}`} activeClassName={'active'} key={link}>
                    <li className={'items'} >
                        {link}
                    </li>
                </NavLink>)
            }
        </ul >
    );
}

export default HyperLinksList;