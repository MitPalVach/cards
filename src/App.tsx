import React from 'react';
import TestPage from "./pages/testPage";
import Registration from "./pages/registration";
import Login from "./pages/login";
import PassRecover from "./pages/passRecover";
import NewPass from "./pages/newPass";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<TestPage/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/passrecovery'} element={<PassRecover/>}/>
                <Route path={'/newpass'} element={<NewPass/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;