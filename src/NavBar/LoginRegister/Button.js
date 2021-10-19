import './Button.css';

function Button(props){

    return(
        <button className='btn__login-register' type='button' onClick={props.onClick}>SignUp/SignIn</button>
    )
}

export default Button;