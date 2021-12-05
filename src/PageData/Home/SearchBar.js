import classes from './SearchBar.module.css';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';


function SearchBar(props) {
    const keywordRef = useRef();
    const formRef = useRef();

    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        const keyw = keywordRef.current.value;
        formRef.current.reset();
        history.push(`/search?keyword=${keyw}`);
        window.location.reload();
    }
    return (
        <form className={classes.search} onSubmit={submitHandler} ref={formRef}>
            <input className={classes.input_search} type="text" placeholder="Search for documents" ref={keywordRef} defaultValue=""></input>
            <button type="submit" className={`${classes.btn} ${classes.btn_search}`}>
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}

export default SearchBar;