import Header from "../components/Header/Header.jsx";
import Container from "../components/UI/Container/Container.jsx";
import {useState} from "react";
import {useFetching} from '../hooks/useFetching.js'

const Characters = () => {

    const [fechedPosts, setFechedPosts] = useState([])
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () =>{
        const posts = await
    })
    return (
        <Container>
            <Header/>
        </Container>
    );
};

export default Characters;