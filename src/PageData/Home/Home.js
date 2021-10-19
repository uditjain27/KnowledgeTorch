import './Home.css';
import BigLogo from './BigLogo';
import SearchBar from './SearchBar';
import NavBar from '../../NavBar/NavBar';
import { Fragment } from 'react';


function Home(props) {
    return (
        <Fragment>

        {/* <AuthContextProvider> */}
            <NavBar />
            <header>
                <BigLogo></BigLogo>
                <SearchBar></SearchBar>
            </header>
        {/* //</AuthContextProvider> */}
        </Fragment>
    )
}

export default Home;