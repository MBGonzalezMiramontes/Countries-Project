import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "../Searchbar/Searchbar";

const Navbar = ({ onSearch }) => {
  return (
    <div className={style.navContainer}>
      <div className={style.linkContainer}>
        <Link to="/home" className={style.link}>
          Home
        </Link>
        <Link to="/form" className={style.link}>
          Formulario
        </Link>
      </div>
      <div className={style.searchBarContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
