
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/user/homePage";
import UserLayout from "../layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/user/ErrorPage";
import UserloginPage from "../pages/user/userloginPage";
import { SignupPage } from "../pages/user/SignupPage";
import ContactPage from "../pages/user/ContactPage";
import AboutPage from "../pages/user/aboutPage";
import CarlistPage from "../pages/user/CarlistPage"
// import AuthUser from "./protectedRoutes/AuthUser.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminReviewPage from "../pages/admin/AdminReviewPage.jsx";
import AdminCarPage from "../pages/admin/adminCarPage.jsx";
import AdminUserPage from "../pages/admin/AdminUserPage.jsx";
import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";

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
                path: 'home',
                element: <HomePage />,
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
                path: 'carlist',
                element: <CarlistPage />,
            },
            {
                path: 'review',
                element: <AdminReviewPage />,
            },
            {
                path: 'car',
                element: <AdminCarPage />,
            },
            {
                path: 'user',
                element: <AdminUserPage />,
            },
        ]
    },
]);
