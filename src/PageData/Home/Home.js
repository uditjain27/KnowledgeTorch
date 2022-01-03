import classes from './Home.module.css';
import BigLogo from './BigLogo';
import TopContributors from './TopContributors';
import MeetOurTeam from './MeetOurTeam';
import GlobalTopic from './GlobalTopic/GlobalTopic';


function Home(props) {
    return (
        <header className={classes.header}>
            <BigLogo></BigLogo>
            <TopContributors></TopContributors>
            <MeetOurTeam></MeetOurTeam>
        </header>
    )
}

export default Home;