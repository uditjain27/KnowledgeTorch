import classes from './Fotter.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={classes.jumbotron} id="copyright">
      <div className={classes.container}>
        <div className={classes.copy}>
          Copyright © 2021, India - 
          KNOWLEDGE TORCH
        </div>
        <div className={classes.a} id="social-media">
          <a href="#" className={classes.a}>
            <FacebookIcon fontSize='large' color='secondary'/>
          </a>
          <a href="#" className={classes.a}>
            <InstagramIcon fontSize='large' color='secondary'/>
          </a>
          <a href="#" className={classes.a}>
            <TwitterIcon fontSize='large' color='secondary'/>
          </a>
          <a href="#" className={classes.a}>
            <GitHubIcon fontSize='large' color='secondary'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;