import React from 'react';
import {NavLink} from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h6 style={{fontSize: '20px'}}>Error: 404 Страница не найдена</h6>
            <NavLink to={'/'}>back</NavLink>
        </div>
    );
};

export default NotFound;