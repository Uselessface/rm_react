import {createBrowserRouter} from "react-router-dom";
import Homepage from "../pages/Homepage.jsx";
import Page404 from "../pages/Page404.jsx";
import Characters from "../pages/Characters.jsx";
import Episodes from "../pages/Episodes.jsx";
import Locations from "../pages/Locations.jsx";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <Page404 />
    },
    {
        path: '/characters',
        element: <Characters />,
        errorElement: <Page404 />
    },
    {
        path: '/episodes',
        element: <Episodes />,
        errorElement: <Page404 />
    },
    {
        path: '/locations',
        element: <Locations />,
        errorElement: <Page404 />
    }

])

export default router