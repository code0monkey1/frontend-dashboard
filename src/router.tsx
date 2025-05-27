import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Login from "./pages/login/login";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/categories',
        element: <Categories />
    },
    {
        path: '/login',
        element: <Login />
    }
])