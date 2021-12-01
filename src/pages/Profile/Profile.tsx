import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import s from './Profile.module.css';
import {Navigate} from "react-router-dom";


const Profile = React.memo(() => {

    const profile = useTypedSelector(state => state.login.profile)


    return (
        <div className={s.profileWrapper}>
            <div>
                {profile._id && <img src="https://via.placeholder.com/300" alt=""/>}
                {profile._id && <h2>Name: {profile.name}</h2>}
                {profile._id && <h2>Email: {profile.email}</h2>}
                {profile._id && <h2>ID: {profile._id}</h2>}
                {profile._id && <h2>Created: {profile.created}</h2>}
            </div>
        </div>
    );
})

export default Profile;