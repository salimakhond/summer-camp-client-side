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
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory/MyPaymentHistory";
import InstructorMyClass from "../pages/Dashboard/InstructorMyClass/InstructorMyClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>

            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            {
                path: '/dashboard/myenrolledclasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <MyPaymentHistory></MyPaymentHistory>
            },
            {
                path: '/dashboard/InstructorMyClass',
                element: <InstructorMyClass></InstructorMyClass>
            },
            {
                path: '/dashboard/manageclasses',
                element: <ManageClasses></ManageClasses>
            },
        ]
    }
]);

export default router;