import classes from './BigLogo.module.css';

function BigLogo(props) {
    return (
        <div className={classes.description} >
            <i className="fas fa-book-open"></i>
            <h1>Knowledge Torch</h1>
            <p>One stop solution for all study resources requirements</p>
        </div >
    )
}

export default BigLogo;