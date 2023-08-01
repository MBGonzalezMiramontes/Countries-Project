import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import SearchBar from "../searchbar/searchbar";

const NavBar = () => {
  const dispatch = useDispatch(); // este hook es la forma en la que se envia una action al store
  const allCountries = useSelector((state) => state.allCountries); // a que estado va a estar suscripto (a cualquier cambio que suceda en este estado)
  // el componente se está suscribiendo al estado global (en redux el tipo de estado es global)

  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountrybyName(searchString));
  }

  useEffect(() => {
    dispatch(getCountries()); // para que la action sea ejecutada en el momento del mount (cuando se renderiza por primera vez)
    // return () => {
    //   clearDetail(); // CUANDO SE DESMONTE
    // };
  }, [dispatch]); //solo al momento de hacer el dispatch

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
        <SearchBar
          onChange={handleChange} // Pasar la función handleChange como prop
          allCountries={allCountries}
        />
      </div>
    </div>
  );
};

export default NavBar;
