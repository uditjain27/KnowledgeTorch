import Card from '../UI/Card';
import BackDrop from '../UI/BackDrop';
import LoginForm from './Forms/LoginForm';
import './Modal.css';
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

    const toggleFormView = function(){
        ctx.toggleFormView();
    }

    return (
        <div className='modal'>
            <BackDrop />
            <Card>
                <div className="callout">
                    <button className="close-button" type="button" onClick={ctx.toggleModalView}>
                        <span>&times;</span>
                    </button>
                </div>
                {ctx.loginFormVisible && <LoginForm toggleFormView={toggleFormView} toggleModalView={ctx.toggleModalView}/>}
                {!ctx.loginFormVisible && <RegisterForm toggleFormView={toggleFormView} toggleModalView={ctx.toggleModalView}/>}
                <hr style={{
                    width: 450,
                }} />
            </Card>
        </div>
    )
}

export default Modal;