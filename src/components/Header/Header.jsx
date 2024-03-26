import React, {useState} from "react";
import './Header.css'
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import UserContainer from "../UserContainer";
import Modal from "../Modal/Modal.jsx";

function Header() {
    let [modalActive, setModalActive] = useState(false)

    const setActive = (value) =>{
        setModalActive(value)
    }

    return (
        <header>
            <Logo />
            <Navigation />
            <UserContainer>
                <CustomButton text={'Регистрация'} clickHandler={setActive} />
                <CustomButton text={'Вход'} variant={'secondary'} clickHandler={setActive} />
            </UserContainer>
            <Modal active={modalActive} setActive={setActive}>
            </Modal>
        </header>
    )
}

export default Header