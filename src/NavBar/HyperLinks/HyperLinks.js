import classes from './HyperLinks.module.css';
import Logo from './Logo';
import HyperLinksList from './HyperLinksList';

function HyperLinks(props){
    return(
        <div className={classes.links}>
            <Logo />
            <HyperLinksList/>
        </div>
    )
}

export default HyperLinks;