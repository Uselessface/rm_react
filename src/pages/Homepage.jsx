import '../App.css'
import Header from "../components/Header/Header.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Container from "../components/UI/Container/Container.jsx";
import ModalForm from "../components/ModalForm/ModalForm.jsx";
import {useState} from "react";


const Homepage = () => {


    return (
        <>
            <Header />
            <main>
                <Container>
                    <Categories/>
                </Container>
            </main>

        </>
    );
};

export default Homepage;