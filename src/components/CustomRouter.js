// CustomRouter.js

import React from "react";
import { Navbar } from './Navbar'
import Formulario from './Formulario';
import RegisterProduct from "../pages/RegisterProduct/index";
import Tabla from "./Tabla";
import Courses from "../pages/Cimientos para el futuro/Courses/Courses";
import Login from "../pages/Cimientos para el futuro/Login/Login";
import Admin from "../pages/Cimientos para el futuro/Admin/Admin";
import SocionutricioList from "../pages/RegistrosSocionutricios/index";

const CustomRouter = ({ path }) => {
  switch (path) {
    case "/":
      return <Formulario />;
    case "/register":
      return <RegisterProduct />;
    case "/visualize":
      return <Tabla />;
    case "/cimientosparaelfuturo":
      return <Courses />;
    case "/cimientosparaelfuturo/login":
      return <Login />;
    case "/cimientosparaelfuturo/admin":
      return <Admin />;
    case "/socionutricio":
      return <SocionutricioList />;
    default:
      return <Formulario />;
  }
};

export default CustomRouter;
