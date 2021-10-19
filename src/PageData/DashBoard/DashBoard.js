import { Fragment } from 'react';
import NavBar from '../../NavBar/NavBar';
import './DashBoard.css';

function DashBoard(props){
    return(
        <Fragment>
            <NavBar />
            <div>DashBoard</div>
        </Fragment>
    );
}

export default DashBoard;