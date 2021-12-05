import { Fragment, useContext } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AddVertical from '../../Add/AddVertical';
import NavBar from '../../NavBar/NavBar';
import { AuthContext } from '../../store/login-context';
import store from '../../store/login-store';
import Form from './Form';
import classes from'./Upload.module.css';

function Upload(props) {

    const ctx = useContext(AuthContext);
    const history = useHistory();

    const showLogin = function () {
        history.push('/signup');
    }

    const isLogin = useSelector((state) => state.loginStore.isLogin);

    return (
        <section className={classes.section}>
            <div className={classes.content}>
                {!isLogin && <div className={`${classes.request_login} ${classes.hidden}`}>
                    <Link to='/signup' className={classes.btn_request_login} onClick={showLogin}>
                        <i className="fas fa-lock"></i>
                        <span>Login to view your contributions</span>
                    </Link>
                </div>}
                {isLogin && <Form></Form>}
            </div>
        </section>
    );
}

export default Upload;