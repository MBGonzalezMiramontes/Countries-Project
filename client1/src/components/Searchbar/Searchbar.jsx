import { useState } from "react";
import style from "./Searchbar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.searchBarContainer}>
      <input className={style.searchInput} type="search" onChange={handleChange} value={id} />
      <button
        className={style.searchButton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
