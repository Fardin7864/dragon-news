import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Error from "../components/Error/Error";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            
        ]
    }
])



export default MainRoute;