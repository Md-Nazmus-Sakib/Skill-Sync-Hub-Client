import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Component/Pages/Home/Home/Home";
import ErrorPage from "../Component/Pages/ErrorPage/ErrorPage";
import MainLayout from "../Component/Layout/MainLayout";

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
        ],
    },
]);
