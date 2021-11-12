import React from 'react';
import {NavLink} from "react-router-dom";


const NewPass = () => {
    return (
        <div>
            <h6 style={{fontSize: '20px'}}>NewPass</h6>
            <NavLink to={'/'}>back</NavLink>
        </div>
    );
};

export default NewPass;