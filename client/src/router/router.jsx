import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import PrivateRoutes from "../components/private/PrivateRoutes";
import AddBook from "../pages/addBook/AddBook";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import AllBooks from "../pages/allBooks/AllBooks";
import BorrowBooks from "../pages/borrowedBooks/BorrowBooks";
import IndividualBook from "../pages/individualBook/IndividualBook";
import Categories from "../pages/categories/Categories";
import IndividualCategory from "../pages/individualCategory/IndividualCategory";
import UpdateBook from "../pages/updateBook/UpdateBook";
import VerifyAuth from "../components/private/VerifyAuth";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-books",
                element: <PrivateRoutes><AllBooks /></PrivateRoutes>,

            },
            {
                path: "/add-book",
                element: <PrivateRoutes><AddBook /></PrivateRoutes>,
                loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`).then(res => res.json())

            },
            {
                path: "/borrowed-books",
                element: <PrivateRoutes><BorrowBooks /></PrivateRoutes>
            },
            {
                path: "/book/:bookId",
                element: <PrivateRoutes><IndividualBook /></PrivateRoutes>
            },
            {
                path: "/update/:id",
                element: <PrivateRoutes><VerifyAuth><UpdateBook /></VerifyAuth></PrivateRoutes>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BACKEND_URL}/book/${params.id}`,{credentials:"include"}).then(res => res.json())
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/categories',
                element: <Categories />,
                loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`).then(res => res.json())
            },
            {
                path:'/category/:id',
                element:<PrivateRoutes><IndividualCategory /></PrivateRoutes>,
            }

        ]
    }
])