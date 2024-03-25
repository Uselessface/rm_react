import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import LocationsPage from "../pages/LocationsPage/LocationsPage";
import EpisodesPage from "../pages/EpisodesPage/EpisodesPage";
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/characters',
            element: <CharactersPage/>
        },
        {
            path: '/locations',
            element: <LocationsPage/>
        },
        {
            path: '/episodes',
            element: <EpisodesPage/>
        }
    ]
)
export default router