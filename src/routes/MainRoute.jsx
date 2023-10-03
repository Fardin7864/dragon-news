import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Error from "../components/Error/Error";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Signup from "../pages/SignUp/Signup";
import Login from "../pages/Login/Login";
import PrivetRoute from "./PrivetRoute";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element:  <PrivetRoute><News></News></PrivetRoute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])



export default MainRoute;