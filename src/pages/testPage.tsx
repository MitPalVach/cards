import React, {ChangeEvent, useState} from 'react';
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Checkbox from "../components/Checkbox/Checkbox";
import {NavLink} from "react-router-dom";


const TestPage = () => {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'


    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (

        <div>
            <Input
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                // error={error}
            />

            <Button>default</Button>

            <Button del={'a'}>X</Button>

            <Button
                error={error}
                onClick={showAlert}
            >
                delete
            </Button>

            <Button disabled>disabled</Button>

            {/*<Checkbox*/}
            {/*    checked={checked}*/}
            {/*    onChangeChecked={setChecked}*/}
            {/*>*/}
            {/*    some text*/}
            {/*</Checkbox>*/}

            <Checkbox checked={checked} onChange={testOnChange}/>
            <ul>
                <li><NavLink to={'/registration'}>registration</NavLink></li>
                <li><NavLink to={'/login'}>login</NavLink></li>
                <li><NavLink to={'/passrecovery'}>passrecovery</NavLink></li>
                <li><NavLink to={'/newpass'}>newpass</NavLink></li>
                <li><NavLink to={'/profile'}>profile</NavLink></li>
            </ul>
        </div>
    );
};

export default TestPage;