import React from 'react';
import s from './Login.module.css';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useFormik} from "formik";
import {FormikErrorType} from "../../store/login/logTypes";
import {Button, Card, Input} from "antd";
import {Navigate, NavLink} from "react-router-dom";
import {setLogin} from "../../store/login/actions";


const Login = () => {
    const dispatch = useDispatch()
    const {loading, error} = useTypedSelector(state => state.login)
    const {isLoggedIn} = useTypedSelector(state => state.login)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Login is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Incorrect email';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 7) {
                errors.password = 'Password at least 7 characters';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(setLogin(values))
            formik.resetForm()
        },
    })


    return (
        <div className={s.wrapper}>
            <Card
                style={{minWidth: '413px'}}
                bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                }}
            >
                <h2>IT-Incubator</h2>
                <p>Sign In</p>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Input
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}

                    <Input
                        placeholder={'Password'}
                        name={'password'}
                        type={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                    {isLoggedIn && <Navigate to={'/profile'}/> }

                    <small>Enter your email address and your password for sign in</small>
                    <Button
                        shape={'round'}
                        type={'primary'}
                        htmlType={'submit'}
                    >Sign In
                    </Button>
                </form>
                {loading && <h4>Loading...</h4>}
                {error && <h4>{error}</h4>}

                <p><NavLink to={'/login'}>Try logging in</NavLink></p>
            </Card>
        </div>
    );


};


export default Login;