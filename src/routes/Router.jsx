
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/homePage";
import UserLayout from "../layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Home/ErrorPage.jsx";
import UserloginPage from "../pages/Home/userloginPage.jsx";
import { SignupPage } from "../pages/Home/SignupPage.jsx";
import ContactPage from "../pages/Home/ContactPage.jsx";
import AboutPage from "../pages/Home/AboutPage.jsx";
import CarlistPage from "../pages/Home/CarlistPage.jsx"
// import AuthUser from "./protectedRoutes/AuthUser.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminReviewPage from "../pages/admin/AdminReviewPage.jsx";
import AdminCarPage from "../pages/admin/adminCarPage.jsx";
import AdminUserPage from "../pages/admin/AdminUserPage.jsx";
import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";
import UserHomePage from "../pages/User/UserHomePage.jsx";
import UserCarlistPage from "../pages/User/UserCarlistPage.jsx";

import UserCarDetailsPage from "../pages/User/UserCarDetailsPage.jsx";
import UserBookingPage from "../pages/User/UserBookingPage.jsx";
import PaymentSuccess from "../pages/User/PaymentSuccess.jsx";
import PaymentCancel from "../pages/User/PaymentCancel.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
          
            {
                path: "/login",
                element: <UserloginPage />
            },
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/signup",
                element: <SignupPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: '/admin-login',
                element: <AdminLoginPage />,
            },
        ]
    },
    {
        path: "/user",
        element: <UserLayout />,
        children: [
            {
                path: '', // Make the home page path relative
                element: <UserHomePage />,
            },
            {
                path: 'car', // Use relative path for the car list page
                element: <UserCarlistPage />,
            },
            {
                path: 'car-details/:id', // Use relative path for the car list page
                element: <UserCarDetailsPage/>,
            },
            {
                path: 'car-details/booking/:id', // Use relative path for the car list page
                element: <UserBookingPage/>,
            },
            {
                path: 'success', // Use relative path for the car list page
                element: <PaymentSuccess/>,
            },
            {
                path: 'cancel', // Use relative path for the car list page
                element: <PaymentCancel/>,
            },
        ]
    },
    
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "AdminPage",  // Updated path here
                element: <AdminHomePage />,
            },
            {
                path: 'car',
                element: <AdminCarPage/>,
            },
            {
                path: 'review',
                element: <AdminReviewPage />,
            },
            // {
            //     path: 'car',
            //     element: <AdminCarPage />,
            // },
            {
                path: 'user',
                element: <AdminUserPage />,
            },
        ]
    },
]);
