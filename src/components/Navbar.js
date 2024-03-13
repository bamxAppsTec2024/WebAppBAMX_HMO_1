// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Formulario Donativo</Link>
        </li>
        <li>
          <Link to="/register">Registro Criba</Link>
        </li>
        <li>
          <Link to="/visualize">Tablas de Registros</Link>
        </li>
        <li>
          <Link to="/cimientosparaelfuturo">Cimientos Para el Futuro</Link>
        </li>
        <li>
          <Link to="/socionutricio">Estudio Socio Nutricio</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
