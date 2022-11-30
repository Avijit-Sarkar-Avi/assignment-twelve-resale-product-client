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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import ReportedItems from "../../Pages/Dashboard/AdminDashBoard/ReportedItems";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddAProduct from "../../Pages/Dashboard/SellerDashBoard/AddAProduct";
import MyPorducts from "../../Pages/Dashboard/SellerDashBoard/MyPorducts";
import MyBuyers from "../../Pages/Dashboard/SellerDashBoard/MyBuyers";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import MyOrders from "../../Pages/Dashboard/BuyerDashBoard/MyOrders";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>
                // loader: ({ params }) =>
                //     fetch(`https://server-phi-three.vercel.app/cardData/${params.name}`)
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute> <MyPorducts></MyPorducts> </SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute> <MyBuyers></MyBuyers> </SellerRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute> <MyOrders></MyOrders> </BuyerRoute>
            }
        ]
    }
])

export default router;