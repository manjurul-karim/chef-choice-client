import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Main from "./layout/Main";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import ChefDetails from "./components/ChefDetails";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AuthProviders from "./providers/AuthProviders";
import LoadingSpinner from "./components/LoadingSpinner";
import PrivateRoute from "./routes/PrivateRoute";
import Terms from "./components/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "chefdetails",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: 'loader',
        element: <LoadingSpinner></LoadingSpinner>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
