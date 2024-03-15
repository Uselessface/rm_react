import {Link} from "react-router-dom";
import '../App.css'
import logo from '../assets/icons/logo.png'
import page404 from '../assets/page_not_found.svg'
import homeIcon from '../assets/icons/homeIcon.svg'
import './Page404.css'
import UserButton from "../components/UI/UserButton/UserButton.jsx";
import Container from "../components/UI/Container/Container.jsx";

const Page404 = () => {
    return (
        <Container>
            <Container>
                <Link to={'/'}>
                    <img src={logo} alt="logo"/>
                </Link>
            </Container>
            <Container>
                <div className="container_404">
                    <img src={page404} alt=""/>
                    <p>Упс. Кажется вы заблудились. Только без паники!</p>
                    <p>Страница, которую вы ищите не существует, либо была удалена</p>
                    <Link to={'/'}>
                        <UserButton variant={'black_btn'} text={'Домой'}>
                            <img src={homeIcon} alt="home icon"/>
                        </UserButton>
                    </Link>
                </div>
            </Container>
        </Container>
    );
};

export default Page404;