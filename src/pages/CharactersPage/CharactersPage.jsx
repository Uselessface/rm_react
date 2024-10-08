import Header from "../../components/Header/Header";
import Container from "../../components/UI/Container/Container";
import PostsContainer from "../../components/Posts/PostsContainer/PostsContainer.jsx";
import CharacterPost from "../../components/Posts/CharacterPost/CharacterPost.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Page404 from "../Page404/Page404.jsx";
import PageHeader from "../../components/Utils/PageHeader/PageHeader.jsx";
import Pagination from "../../components/Utils/Pagination/Pagination.jsx";
import useFetching from "../../hooks/useFetching.js";
import {useEffect} from "react";
import Filtration from "../../components/Utils/Filtration/Filtration.jsx";
import {options} from "../../data/local/charactersFilter.js";

const api = `https://rickandmortyapi.com/api/character`;

const CharactersPage = () => {
    const [posts,isLoading,error,setPage, pageCount,page] = useFetching(api)

    useEffect(()=>{
        return() =>{
            setPage(0);
        }
    },[])


    return (
        <Container>
            <Header/>
            {error && <Page404/>}
            <PageHeader pageTitle={'Персонажи'}/>
            <Filtration options={options}/>
            {!error && <PostsContainer>
                {isLoading && <Loader/> }
                {!isLoading && posts.map((post) => {
                            return <CharacterPost
                                key={post.id}
                                image={post.image}
                                location={post.location.name}
                                origin={post.origin.name}
                                race={post.species}
                                status={post.status}
                                title={post.name}
                                episode={post.episode}
                                gender={post.gender}
                            />
                        })}
            </PostsContainer>
            }
            <Pagination clickHandler={setPage} page={page} pageCount={pageCount} />
        </Container>
    );
};

export default CharactersPage;