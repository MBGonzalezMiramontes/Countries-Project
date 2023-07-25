import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import Cards from "../../components/cards/cards";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch(); // este hook es la forma en la que se envia una action al store
  const allCountries = useSelector((state) => state.allCountries); // a que estado va a estar suscripto (a cualquier cambio que suceda en este estado)
  // el componente se está suscribiendo al estado global (en redux el tipo de estado es global)
  useEffect(() => {
    dispatch(getCountries()); // para que la action sea ejecutada en el momento del mount (cuando se renderiza por primera vez)
    // return () => {
    //   clearDetail(); // CUANDO SE DESMONTE
    // };
  }, [dispatch]); //solo al momento de hacer el dispatch

  return (
    <div className={style.homeContainer}>
      <h1> Inicio </h1>
      <Cards allCountries={allCountries} />
    </div>
  );
};

export default Home;
