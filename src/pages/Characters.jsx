import Header from "../components/Header/Header.jsx";
import Container from "../components/UI/Container/Container.jsx";
import {useEffect, useState} from "react";
import PostsContainer from "../components/PostsContainer/PostsContainer.jsx";
import DefaultPost from "../components/DefaultPost/DefaultPost.jsx";


const Characters = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [fetchedData, setFetchedData] = useState([]);
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`



    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res =>  res.json())
            setFetchedData(data)
        })();
    }, [api]);
    console.log(fetchedData)
    return (
        <Container>
            <Header/>
            <PostsContainer variant={'full_width'}>
                <DefaultPost />
            </PostsContainer>
        </Container>
    );
};

export default Characters;