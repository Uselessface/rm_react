import FormInput from "../UI/FormInput/FormInput.jsx";
import './LoginForm.css'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";
import {useForm} from "react-hook-form";

const LoginForm = () => {

    const {register} = useForm()

    return (
        <div className={'form_container'}>
            <h2 className={'form_header'}>Вход</h2>
            <form>
                <FormInput
                    {...register("user")}
                    placeholder={'Введите логин или E-mail'}
                    required={'required'}
                    type={'text'}
                />
                <FormInput
                    {...register('password')}
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