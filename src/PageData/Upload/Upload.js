import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../store/login-context';
import Form from './Form';
import classes from'./Upload.module.css';

function Upload(props) {
/* 
    const ctx = useContext(AuthContext); */
    const history = useHistory();
    const location = useLocation();
    const vari = new URLSearchParams(location.search);
    const paramsId = vari.get('id');
    const paramsSubject = vari.get('subject');
    console.log(paramsId);
    console.log(paramsSubject);

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
                {isLogin && <Form id={paramsId} subject={paramsSubject}></Form>}
            </div>
        </section>
    );
}

export default Upload;