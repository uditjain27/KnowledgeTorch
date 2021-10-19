import { Fragment } from 'react';
import { Provider } from 'react-redux';
import NavBar from '../../NavBar/NavBar';
import store from '../../store/login-store';
import ProfileForm from './ProfileForm';

function Profile(props){
    
    return(
        <Fragment>
            <NavBar profile={true}/>
            <header>User profile</header>
            <section>
                <ProfileForm></ProfileForm>
            </section>
        </Fragment>
    );
}

export default Profile;