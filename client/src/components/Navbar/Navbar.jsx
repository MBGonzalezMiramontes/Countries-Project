import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navContainer}>
    <div className={style.linkContainer}>
      <Link to="/home">Home</Link>
      <Link to="/form"> Formulario </Link>
    </div>
    </div>
  );
};

export default Navbar;
