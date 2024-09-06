import Container from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import Page404 from "../Page404/Page404.jsx";
import PageHeader from "../../components/Utils/PageHeader/PageHeader.jsx";
import PostsContainer from "../../components/Posts/PostsContainer/PostsContainer.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Pagination from "../../components/Utils/Pagination/Pagination.jsx";
import useFetching from "../../hooks/useFetching.js";
import LocationsPost from "../../components/Posts/LocationsPost/LocationsPost.jsx";
import {useEffect} from "react";

const api = `https://rickandmortyapi.com/api/location`;

const LocationsPage = () => {
    const [posts, isLoading, error, setPage, pageCount, page] = useFetching(api)
    useEffect(()=>{
        setPage(0);
    },[])
    return (
        <Container>
            <Header/>
            {error && <Page404/>}
            <PageHeader pageTitle={'Локации'}/>
            {!error && <PostsContainer variant={'col-2'}>
                {isLoading && <Loader/>}
                {!isLoading && posts.map((post) => {
                    return <LocationsPost
                        key={post.id}
                        name={post.name}
                        type={post.type}
                        dimension={post.dimension}
                        residents={post.residents}
                    />
                })}
            </PostsContainer>
            }
            <Pagination clickHandler={setPage} page={page} pageCount={pageCount}/>
        </Container>
    );
};


export default LocationsPage;