import React from 'react';
import FormInput from "../UI/FormInput/FormInput.jsx";
import './LoginForm.css'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";

const LoginForm = () => {
    return (
        <div className={'form_container'}>
            <h2 className={'form_header'}>Вход</h2>
            <form>
                <FormInput
                    placeholder={'Введите логин или E-mail'}
                    required={'required'}
                    type={'text'}
                />
                <FormInput
                    placeholder={'Введите  пароль'}
                    required={'required'}
                    type={'password'}
                />
                <CustomButton text={'Войти'} variant={'black'}/>
            </form>
        </div>
    );
};

export default LoginForm;