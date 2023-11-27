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
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Component/Dashboard/AddClass/AddClass";
import MyClass from "../Component/Dashboard/MyClass/MyClass";
import TeacherAssignment from "../Component/Dashboard/TeacherAssignment/TeacherAssignment";
import AllCourse from "../Component/Pages/AllCourse/AllCourse";
import CourseDetails from "../Component/Pages/AllCourse/CourseDetails";
import Payment from "../Component/Payment/Payment";
import EnrollClass from "../Component/Dashboard/EnrollClass/EnrollClass";
import MyEnrollClassDetail from "../Component/Dashboard/EnrollClass/MyEnrollClassDetail";

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
            {
                path: "/allCourse",
                element: <AllCourse></AllCourse>
            },
            {
                path: "/courseDetail/:id",
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
            {
                path: "/courseDetail/pay/:id",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'request',
                element: <PrivateRoute><TeacherRequest></TeacherRequest></PrivateRoute>
            },
            {
                path: 'users',
                element: <PrivateRoute><AllUser></AllUser></PrivateRoute>
            },
            {
                path: 'classes',
                element: <PrivateRoute><AllClass></AllClass></PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'addClass',
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path: 'myClass',
                element: <PrivateRoute><MyClass></MyClass></PrivateRoute>
            },
            {
                path: 'myClass/:id',
                element: <PrivateRoute><TeacherAssignment></TeacherAssignment></PrivateRoute>
            },
            {
                path: 'enrollClass',
                element: <PrivateRoute><EnrollClass></EnrollClass></PrivateRoute>
            },
            {
                path: 'my-class/:id',
                element: <PrivateRoute><MyEnrollClassDetail></MyEnrollClassDetail></PrivateRoute>
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
