import classes from './SearchBar.module.css';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';


function SearchBar(props) {
    const keywordRef = useRef();

    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        history.push(`/search?keyword=${keywordRef.current.value}`);
    }
    return (
        <form className={classes.search} onSubmit={submitHandler}>
            <input className={classes.input_search} type="text" placeholder="Search for documents" ref={keywordRef}></input>
            <button className={`${classes.btn} ${classes.btn_search}`}>
                <i className="fas fa-search"></i>
                <span>Search</span>
            </button>
        </form>
    )
}

export default SearchBar;