import logo from "../../assets/icons/logo.png"
import './Header.css'
import {Link} from "react-router-dom";
import UserButton from "../UI/UserButton/UserButton.jsx";
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";
import LoginForm from "../LoginForm/LoginForm.jsx";

const Header = () => {
    let [modalActive, setModalActive] = useState(false)

    return (
        <div className="container header_container d-flex">
            <img className='logo' src={logo} alt={'logo'}/>
            <nav className="main_navigation">
                <ul className="d-flex">
                    <li><Link className={'navigation_link'} to={'/'}>Главная</Link></li>
                    <li><Link className={'navigation_link'} to={'/'}>Избранное</Link></li>
                    <li><Link className={'navigation_link'} to={'/'}>О проекте</Link></li>
                </ul>
            </nav>
            <div className="user_container d-flex">
                <UserButton
                    text={'Регистрация'}
                    clickHandler ={setModalActive}
                />
                <UserButton
                    text={"Войти"}
                    variant={'black'}
                    clickHandler ={setModalActive}
                />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <LoginForm />
            </Modal>
        </div>

    );
};

export default Header;