import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import LocationsPage from "../pages/LocationsPage/LocationsPage";
import EpisodesPage from "../pages/EpisodesPage/EpisodesPage";
import Page404 from "../pages/Page404/Page404.jsx";
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage/>,
            errorElement: <Page404/>
        },
        {
            path: '/characters',
            element: <CharactersPage/>,
            errorElement: <Page404/>
        },
        {
            path: '/locations',
            element: <LocationsPage/>,
            errorElement: <Page404/>
        },
        {
            path: '/episodes',
            element: <EpisodesPage/>,
            errorElement: <Page404/>
        }
    ]
)
export default router