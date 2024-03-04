
import logo from "../../assets/icons/logo.png"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container header_container d-flex">
                <img className='logo' src={logo} alt={'logo'}/>
                <nav className="main_navigation">
                    <ul className="d-flex">
                        <li><a className="navigation_link" href="#">Главная</a></li>
                        <li><a className="navigation_link" href="#">Избранное</a></li>
                        <li><a className="navigation_link" href="#">О проекте</a></li>
                    </ul>
                </nav>
                <div className="user_container d-flex">
                    <div className="user">
                        <button className="registration_btn btn">Регистрация</button>
                    </div>
                    <button className="black_btn btn">
                        Войти
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;