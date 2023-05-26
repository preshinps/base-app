import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useRoutes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Spin } from "antd";
import Login from "../components/pages/Login";
import ErrorPage from "../components/pages/Error";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Signup from "../components/pages/Signup";
import { Link } from "react-router-dom";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: (
        <div className="w-screen h-screen flex justify-center items-center text-3xl">
          Page not found | <Link to="/" className="ml-1 text-sm">Go to Home Page</Link>
        </div>
      ),
    },
  ]);
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen justify-center items-center flex">
          <Spin spinning />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
