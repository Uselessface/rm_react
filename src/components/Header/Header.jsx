import {useState} from "react";
import './Header.css'
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../Utils/Logo/Logo";
import UserContainer from "../UI/UserContainer";
import Modal from "../Utils/Modal/Modal.jsx";
import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";

function Header() {
    let [modalActive, setModalActive] = useState(false)
    const [formType, setFormType] = useState('')
    const setActive = (value,formType) =>{
        setModalActive(value)
        setFormType(formType)
    }

    return (
        <header>
            <Logo />
            <Navigation />
            <UserContainer>
                <CustomButton text={'Регистрация'} clickHandler={setActive} formType={'register'} />
                <CustomButton text={'Вход'} variant={'secondary'} clickHandler={setActive} formType={'login'} />
            </UserContainer>
            <Modal active={modalActive} setActive={setActive}>
                {formType === 'register' && <RegistrationForm/>}
                {formType === 'login' && <LoginForm/>}
            </Modal>
        </header>
    )
}

export default Header