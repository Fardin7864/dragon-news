import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Error from "../components/Error/Error";
import Home from "../pages/Home/Home";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])



export default MainRoute;