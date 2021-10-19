import './SearchBar.css';

function SearchBar(props) {
    return (
        <form id="search">
            <input className="input_search" type="text" placeholder="Search for documents"></input>
            <button className="btn btn_search">
                <i className="fas fa-search"></i>
                <span>Search</span>
            </button>
        </form>
    )
}

export default SearchBar;