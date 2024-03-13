import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tabla from "./components/Tabla.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterProduct from "./pages/RegisterProduct/index.jsx";
import "bootswatch/dist/united/bootstrap.min.css";
import Courses from "./pages/Cimientos para el futuro/Courses/Courses.jsx";
import Login from "./pages/Cimientos para el futuro/Login/Login.jsx";
import Admin from "./pages/Cimientos para el futuro/Admin/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterProduct />,
  },
  {
    path: "/visualize",
    element: <Tabla />
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
  {
    path: "/cimientosparaelfuturo",
    element: <Courses />,
  },
  {
    path: "/cimientosparaelfuturo/login",
    element: <Login />,
  },
  {
    path: "/cimientosparaelfuturo/admin",
    element: <Admin />,
  },
  {
    path: "/:path*",
    element: <h1>Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
