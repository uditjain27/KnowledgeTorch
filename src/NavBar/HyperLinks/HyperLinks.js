import './HyperLinks.css';
import Logo from './Logo';
import HyperLinksList from './HyperLinksList';

function HyperLinks(props){
    return(
        <div className='links'>
            <Logo />
            <HyperLinksList/>
        </div>
    )
}

export default HyperLinks;