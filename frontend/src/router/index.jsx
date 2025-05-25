import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Layout from "../layouts/layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/refister",
                element: <h1>Register Page</h1>
            },
            {
                path: "*",
                element: <h1>Page Not Found</h1>
            }
        ]
    }
])