import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'classespage',
                element: <ClassesPage></ClassesPage>
            },
            {
                path: 'instructorspage',
                element: <InstructorsPage></InstructorsPage>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            // // admin routes
            // {
            //     path: 'adminhome',
            //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            // },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>

            },
            // {
            //     path: 'manageitems',
            //     element: <AdminRoute><ManageItems></ManageItems></AdminRoute>

            // },
            // {
            //     path: '/dashboard/payment',
            //     element: <Payment></Payment>

            // }
        ]
    }
]);

export default router;