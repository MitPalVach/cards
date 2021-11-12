import React from 'react';
import {NavLink} from "react-router-dom";


const Profile = () => {
    return (
        <div>
            <h6 style={{fontSize: '20px'}}>Profile</h6>
            <NavLink to={'/'}>back</NavLink>
        </div>
    );
};

export default Profile;