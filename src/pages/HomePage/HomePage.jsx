import React from 'react';
import Header from "../../components/Header/Header";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import categories from "../../data/local/categories";
import Container from "../../components/UI/Container/Container";

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