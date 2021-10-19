import { Fragment, useContext } from 'react';
import { Provider } from 'react-redux';
import AddVertical from '../../Add/AddVertical';
import NavBar from '../../NavBar/NavBar';
import { AuthContext } from '../../store/login-context';
import store from '../../store/login-store';
import Form from './Form';
import './Upload.css';

function Upload(props) {

    const ctx = useContext(AuthContext);

    const showLogin = function(){
        ctx.setFormView();
        ctx.toggleModalView();
    }

    return (
        <Fragment>
            <NavBar />
            <section className=''>
                <AddVertical />
                <div className='content'>
                    <div className="request_login hidden">
                        <button className="btn_request_login" onClick={showLogin}>
                            <i className="fas fa-lock"></i>
                            <span>Login to view your contributions</span>
                        </button>
                    </div>
                    <Form></Form>
                </div>
            </section>
        </Fragment>
    );
}

export default Upload;