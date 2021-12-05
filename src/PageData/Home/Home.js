import classes from './Home.module.css';
import BigLogo from './BigLogo';
import SearchBar from './SearchBar';
import NavBar from '../../NavBar/NavBar';
import { Fragment } from 'react';
import SearchedResult from '../SearchResult/SearchedResult';
import { Route } from 'react-router';
import TopContributors from './TopContributors';
import MeetOurTeam from './MeetOurTeam';


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