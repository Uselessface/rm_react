import {useEffect, useState} from "react";

const useFetching = (api) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const posts = await fetch(`${api}/?page=${page}`).then(res => res.json());
                const pageCount = await fetch(api).then(res => res.json())
                setPosts(posts.results)
                setPageCount(pageCount.info.pages)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        };
        fetchPost();
    }, [api,page]);

    return [posts,isLoading,error,setPage, pageCount,page]
}
export default useFetching