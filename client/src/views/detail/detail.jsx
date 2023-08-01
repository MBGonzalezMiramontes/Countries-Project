import style from "./detail.module.css";
import { useEffect, useState } from "react";
import { getCountriesById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [country, setCountry] = useState({});

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div className={style.detailsContainer}>
      <img src={country.flagImage} alt="Flag" />
      <h1>Nombre: {country.name}</h1>
      <h5>Continente: {country.continent}</h5>
      <h5>Capital: {country.capital}</h5>
      <h5>Subregión: {country.subregion}</h5>
      <h5>Area: {country.area}</h5>
      <h5>Población: {country.population}</h5>
    </div>
  );
};

export default Details;
