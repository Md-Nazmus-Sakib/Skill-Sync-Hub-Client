import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Component/Pages/Home/Home/Home";
import ErrorPage from "../Component/Pages/ErrorPage/ErrorPage";
import MainLayout from "../Component/Layout/MainLayout";
import Login from "../Component/Pages/Login/Login";
import SignUp from "../Component/Pages/Login/SignUp";
import TeachOn from "../Component/Pages/TeachOn/TeachOn";
import DashboardLayout from "../Component/Layout/DashboardLayout";
import TeacherRequest from "../Component/Dashboard/TeacherRequest/TeacherRequest";
import AllUser from "../Component/Dashboard/AllUser/AllUser";
import AllClass from "../Component/Dashboard/AllClass/AllClass";
import Profile from "../Component/Dashboard/Profile/Profile";

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
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'request',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: 'users',
                element: <AllUser></AllUser>
            },
            {
                path: 'classes',
                element: <AllClass></AllClass>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
        ]

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
