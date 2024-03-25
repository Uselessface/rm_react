import '../App.css'
import Header from "../components/Header/Header.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Container from "../components/UI/Container/Container.jsx";



const Homepage = () => {


    return (
        <Container>
            <Header/>
            <main>
                <Categories/>
            </main>
        </Container>
    );
};

export default Homepage;