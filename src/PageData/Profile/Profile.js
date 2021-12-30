import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';
import { URL } from '../../store/helper';

import classes from './ProfileForm.module.css';/* 
import { fetchProfileData } from '../../store/fetchProfileData'; */

function Profile(props) {
    const token = useSelector((state) => state.loginStore.token);
    const userNameFromSlice = useSelector((state) => state.loginStore.userName);
    const location = useLocation();
    const vari = new URLSearchParams(location.search);
    const paramsEdit = vari.get('edit');
    const [data, setData] = useState({});

    const fetchData = async (userName) => {
        const response = await fetch(`${URL}/users/${userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (!response.ok) {
            throw new Error("ANCD");
        }

        const data1 = await response.json();
        return data1;
    }

    const fetchDataFunc = async (userName) => {
        try {
            const data1 = await fetchData(userName);
            /* const data1 = await fetchProfileData(userName, token); */
            return data1;
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }


    const onload = async () => {
        const responseData = await fetchDataFunc(userNameFromSlice);
        setData({
            id: responseData.id,
            userName: responseData.username,
            name: responseData.name,
            email: responseData.email,
            contactNo: responseData.phone,
            college: responseData.organization,
            course: responseData.specialization,
            created: responseData.createdDate,
            year: responseData.yearsOfExperience,
            views: responseData.views,
            uploadCount: responseData.uploads,
            available: true
        });
    }

    useEffect(() => {
        onload();
    }, [])


    return (
        <Fragment>
            {/* <header className={classes.header}>User profile</header> */}
            <section style={{ height: "100%" }}>
                {
                    paramsEdit && <ProfileForm data={data}></ProfileForm>
                }
                {
                    !paramsEdit && <ProfileView data={data} />
                }
            </section>
        </Fragment>
    );
}

export default Profile;