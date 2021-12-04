import classes from './Button.module.css';

function Button(props){

    return(
        <button className={classes.btn__login_register} type='button' onClick={props.onClick}>SignUp/SignIn</button>
    )
}

export default Button;