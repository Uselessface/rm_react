import FormInput from "../UI/FormInput/FormInput.jsx";
import './LoginForm.css'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";
import {Controller, useForm} from "react-hook-form";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        control
    } = useForm({
        defaultValues:{
            password: '',
            user: ''
        }
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={'form_container'}>
            <h2 className={'form_header'}>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    render={({field}) => <FormInput
                    ref={field.ref}
                    placeholder={'Введите логин или E-mail'}
                    required={'required'}
                    type={'text'}
                />}
                    name={"user"}
                    control={control}
                />

                <FormInput
                    {...register('password')}
                    placeholder={'Введите  пароль'}
                    required={'required'}
                    type={'password'}
                />
                <CustomButton text={'Войти'} variant={'black'} type={'submit'} clickHandler={() => {handleSubmit(onSubmit)
                }}/>
            </form>
        </div>
    );
};

export default LoginForm;