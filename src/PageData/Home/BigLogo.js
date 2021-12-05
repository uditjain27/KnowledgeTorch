import SearchBar from './SearchBar';
import classes from './BigLogo.module.css';

function BigLogo(props) {
    return (
        <div className={classes.description} >
            <i className={`fas fa-book-open ${classes.i}`}></i>
            <h1>Knowledge Torch</h1>
            <p>One stop solution for all study resources requirements</p>
            <SearchBar></SearchBar>
        </div >
    )
}

export default BigLogo;