import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.linkContainer}>
        <Link to="/home" className={style.link}>
          Inicio
        </Link>
        <Link to="/form" className={style.link}>
          Agregar Actividad
        </Link>
      </div>
      <div className={style.searchBarContainer}>
        <form>
          <input className={style.searchInput} placeholder="Búsqueda" />
          <button  className={style.searchButton}>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
