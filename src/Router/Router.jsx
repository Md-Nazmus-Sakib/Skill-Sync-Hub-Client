import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Component/Pages/Home/Home/Home";
import ErrorPage from "../Component/Pages/ErrorPage/ErrorPage";
import MainLayout from "../Component/Layout/MainLayout";
import Login from "../Component/Pages/Login/Login";
import SignUp from "../Component/Pages/Login/SignUp";
import TeachOn from "../Component/Pages/TeachOn/TeachOn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/teachOn",
                element: <TeachOn></TeachOn>,
            },
        ],
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signUp',
        element: <SignUp></SignUp>
    }
]);
