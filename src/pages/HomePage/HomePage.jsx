import React from 'react';
import Header from "../../Components/Header/Header";
import CategoryContainer from "../../Components/CategoryContainer/CategoryContainer";
import categories from "../../data/local/categories";
import Container from "../../Components/UI/Container/Container";

const HomePage = () => {
    return (
        <Container>
            <Header />
            <main>
                <CategoryContainer
                    dataArray={categories}
                />
            </main>
        </Container>
    );
};

export default HomePage;