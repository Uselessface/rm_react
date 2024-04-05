import Container from "../../components/UI/Container/Container.jsx";
import Header from "../../components/Header/Header.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

const AboutUsPage = () => {
    return (
        <Container>
            <Header/>
            <PageHeader pageTitle={"О проекте"}/>
            <p style={{textAlign: `center`, marginBottom: `30px`, paddingInline: `3rem`, fontSize: `1.5rem`}}>
                Данный проект создан по мотивам приключений Рика и Морти. Здесь вы можете поближе познакомиться со всеми персонажами, эпизодами и локациями данного мультсериала.
            </p>
            <p style={{textAlign: `center`, paddingInline: `3rem`, fontSize: `1.5rem`}}>
                Проект является тестовым заданием для входящих кандидатов пула Frontend. В зависимости от грейда кандидата необходимо выполнить соответствующий список заданий. Желаем удачи!
            </p>
        </Container>
    );
};

export default AboutUsPage;