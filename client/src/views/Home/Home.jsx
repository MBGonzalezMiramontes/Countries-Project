import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, changePage } from "../../redux/actions/actions";
import Cards from "../../components/cards/cards";
import NavBar from "../../components/navbar/navbar";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = 10;
  const countriesCopy = useSelector((state) => state.countriesCopy);

  // Calcular el rango de botones a mostrar
  const maxPagesToShow = 5;
  const totalPages = Math.ceil(countriesCopy.length / countriesPerPage);
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Ajustar el rango si estamos cerca del inicio o del final de la paginación
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  useEffect(() => {
    dispatch(getCountries()); // para que la action sea ejecutada en el momento del mount (cuando se renderiza por primera vez)
    // return () => {
    //   clearDetail(); // CUANDO SE DESMONTE
    // };
  }, [dispatch]); //solo al momento de hacer el dispatch

  // Cálculo de los índices para mostrar los países de la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesCopy.slice(indexOfFirstCountry, indexOfLastCountry);

  return (
    <div className={style.homeContainer}>
      <NavBar/>
      
      <Cards allCountries={currentCountries} />
     
      <div className={style.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt; Anterior
        </button>
        {pageRange.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? style.active : ""}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Siguiente &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;