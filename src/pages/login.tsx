import React from 'react';
import {NavLink} from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h6 style={{fontSize: '20px'}}>Login</h6>
            <NavLink to={'/'}>back</NavLink>
        </div>
    );
};

export default Login;