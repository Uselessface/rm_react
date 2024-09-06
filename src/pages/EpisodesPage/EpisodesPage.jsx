import Container from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import Page404 from "../Page404/Page404.jsx";
import PageHeader from "../../components/Utils/PageHeader/PageHeader.jsx";
import PostsContainer from "../../components/Posts/PostsContainer/PostsContainer.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Pagination from "../../components/Utils/Pagination/Pagination.jsx";
import EpisodePost from "../../components/Posts/EpisodePost/EpisodePost.jsx";
import useFetching from "../../hooks/useFetching.js";
import {useEffect} from "react";
import Filtration from "../../components/Utils/Filtration/Filtration.jsx";


const api = `https://rickandmortyapi.com/api/episode`;
const EpisodesPage = () => {
    const [posts, isLoading, error, setPage, pageCount, page] = useFetching(api)
    useEffect(()=>{
        return() =>{
            setPage(0);
        }
    },[])
    return (
        <Container>
            <Header/>
            {error && <Page404/>}
            <PageHeader pageTitle={'Эпизоды'}/>
            {!error && <Filtration/>}
            {!error && <PostsContainer>
                {isLoading && <Loader/>}
                {!isLoading && posts.map((post) => {
                    return <EpisodePost
                        key={post.id}
                        name={post.name}
                        air_date={post.air_date}
                        episode={post.episode}
                        characters={post.characters}
                    />
                })}
            </PostsContainer>
            }
            <Pagination clickHandler={setPage} page={page} pageCount={pageCount}/>
        </Container>
    );
};


export default EpisodesPage;