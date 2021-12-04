import Card from '../../UI/Card';
import BackDrop from '../../UI/BackDrop';
import LoginForm from './Forms/LoginForm';
import classes from './Modal.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../store/login-context';
import RegisterForm from './Forms/RegisterForm';

function Modal(props) {
    const ctx = useContext(AuthContext);

    /* const SubmitButtonHandler = function (e) {
        e.preventDefault();
        console.log("Submit");
        ctx.toggleModalView();
    } */
/* 
    const toggleFormView = function(){
        ctx.toggleFormView();
    }
 */
    return (
        <div className={classes.modal}>
            <BackDrop />
            <Card>
                <div className={classes.callout}>
                    <button className={classes.close_button} type="button" onClick={ctx.toggleModalView}>
                        <span>&times;</span>
                    </button>
                </div>
                {ctx.loginFormVisible && <LoginForm toggleFormView={ctx.toggleFormView} toggleModalView={ctx.toggleModalView}/>}
                {!ctx.loginFormVisible && <RegisterForm toggleFormView={ctx.toggleFormView} toggleModalView={ctx.toggleModalView}/>}
                <hr style={{
                    width: 450,
                }} />
            </Card>
        </div>
    )
}

export default Modal;