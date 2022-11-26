import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from "../../Layout/DashboardLayout"
import AllSellers from "../../Pages/Dashboard/AdminDashBoard/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AdminDashBoard/AllBuyers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/cardData/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ])

    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }
])

export default router;