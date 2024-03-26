import {useEffect, useRef, useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/UI/Container/Container";
import PostsContainer from "../../components/PostsContainer/PostsContainer.jsx";
import DefaultPost from "../../components/DefaultPost/DefaultPost.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Page404 from "../Page404/Page404.jsx";
import CustomButton from "../../components/UI/CustomButton/CustomButton.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

const api = `https://rickandmortyapi.com/api/character`;

const CharactersPage = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)

    const abortControllerRef = useRef(null)

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true)
            try {
                const posts = await fetch(`${api}/?page=${page}`).then(res => res.json());
                setPosts(posts.results)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        };
        fetchPost();
    }, [page]);


    return (
        <Container>
            <Header/>
            {error && <Page404/>}
            <PageHeader pageTitle={'Персонажи'}/>
            {!error && <PostsContainer>
                {isLoading && <Loader/> }
                {!isLoading && posts.map((post) => {
                            return <DefaultPost
                                key={post.id}
                                image={post.image}
                                location={post.location.name}
                                origin={post.origin.name}
                                race={post.species}
                                status={post.status}
                                title={post.name}
                                episode={post.episode.length}
                                gender={post.gender}
                            />
                        })}
                <CustomButton text={'prev'} clickHandler={() => setPage(page - 1)}/>
                <CustomButton text={'next'} clickHandler={() => setPage(page + 1)}/>
            </PostsContainer>}
        </Container>
    );
};

export default CharactersPage;