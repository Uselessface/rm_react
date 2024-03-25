import {Link} from "react-router-dom";
import '../../App.css'
import page404 from '../../assets/page_not_found.svg'
import homeIcon from '../../assets/icons/homeIcon.svg'
import './Page404.css'
import CustomButton from "../../components/UI/CustomButton/CustomButton.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Logo from "../../components/Logo/Logo.jsx";

const Page404 = () => {
    return (
        <Container>
            <Link to={'/'}>
                <Logo/>
            </Link>
            <div className="error_container">
                <img src={page404} alt=""/>
                <h3>Упс. Кажется вы заблудились. Только без паники!</h3>
                <p>Страница, которую вы ищете не существует, либо была удалена</p>
                <Link to={'/'}>
                    <CustomButton variant={'secondary'} text={'Домой'}>
                        <img style={{marginRight: 15 + 'px'}} src={homeIcon} alt="home icon"/>
                    </CustomButton>
                </Link>
            </div>
        </Container>
    );
};

export default Page404;