import React, { useState, useEffect } from "react";
import Select from "react-select";
import style from "./CreateForm.module.css";
import Validations from "./Validations/Validations";
import { useDispatch } from "react-redux";
import { createActivities } from "../../Redux/actions";

const CreateForm = () => {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    description: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});
  const [isCountriesSelected, setIsCountriesSelected] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countriesByName, setCountriesByName] = useState([]);

  const buttonDisabled = () => {
    return Object.values(errors).includes(true) || !isFormValid();
  };

  const handleChange = (event) => {
    setErrors(
      Validations({
        ...activity,
        [event.target.name]: event.target.value,
      })
    );
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActivities(activity));
  };

  const handleCountryChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions);
    setIsCountriesSelected(selectedOptions.length > 0);
  };

  const handleChangeCheckbox = (event) => {
    const { value } = event.target;
    const updatedSeason = [...activity.season];

    if (event.target.checked) {
      // Agregar la opción seleccionada al array de temporada
      updatedSeason.push(value);
    } else {
      // Remover la opción deseleccionada del array de temporada
      const index = updatedSeason.indexOf(value);
      if (index !== -1) {
        updatedSeason.splice(index, 1);
      }
    }

    setActivity({
      ...activity,
      season: updatedSeason,
    });
  };

  useEffect(() => {
    const fetchCountryNames = async () => {
      try {
        // Reemplaza getAllCountryNames por la función que obtiene los nombres de los países
        const countryNames = await getAllCountryNames();
        const options = countryNames.map((name) => ({
          value: name,
          label: name,
        }));
        setCountriesByName(options);
      } catch (error) {
        console.error("Error al obtener los nombres de los países:", error);
      }
    };
    fetchCountryNames();
  }, []);

  const isFormValid = () => {
    return (
      activity.name &&
      activity.difficulty &&
      activity.duration &&
      activity.season.length > 0 &&
      selectedCountries.length > 0
    );
  };
  return (
    <div className={style.createFormMainContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label className={style.label}>Actividad:</label>
          <input
            className={style.input}
            name="name"
            value={activity.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        {errors.noName && <p className={style.error}>{errors.noName}</p>}
        {errors.nameLength && (
          <p className={style.error}>{errors.nameLength}</p>
        )}

        <div className={style.inputContainer}>
          <label className={style.label}>Dificultad:</label>
          <input
            className={style.input}
            name="difficulty"
            type="range"
            value={activity.difficulty}
            onChange={handleChange}
            min="1"
            max="5"
            step="1"
          />
          <output className="difficulty-output">{activity.difficulty}</output>
        </div>
        {errors.nodifficulty && (
          <p className={style.error}>{errors.nodifficulty}</p>
        )}
        {errors.difficultyLength && (
          <p className={style.error}>{errors.difficultyLength}</p>
        )}

        <div className={style.inputContainer}>
          <label className={style.label}>Duración:</label>
          <input
            className={style.input}
            name="duration"
            value={activity.duration}
            onChange={handleChange}
            type="time"
            step="60"
          />
        </div>
        {errors.invalidDuration && (
          <p className={style.error}>{errors.invalidDuration}</p>
        )}
        {errors.invalidDurationRange && (
          <p className={style.error}>{errors.invalidDurationRange}</p>
        )}

        <div className={style.inputContainer}>
          <label className={style.label}>Temporada:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="season"
                value="Verano"
                checked={activity.season.includes("Verano")}
                onChange={handleChangeCheckbox}
              />
              Verano
            </label>
            <label>
              <input
                type="checkbox"
                name="season"
                value="Otoño"
                checked={activity.season.includes("Otoño")}
                onChange={handleChangeCheckbox}
              />
              Otoño
            </label>
            <label>
              <input
                type="checkbox"
                name="season"
                value="Invierno"
                checked={activity.season.includes("Invierno")}
                onChange={handleChangeCheckbox}
              />
              Invierno
            </label>
            <label>
              <input
                type="checkbox"
                name="season"
                value="Primavera"
                checked={activity.season.includes("Primavera")}
                onChange={handleChangeCheckbox}
              />
              Primavera
            </label>
          </div>
        </div>
        {errors.noSeason && <p className={style.error}>{errors.noSeason}</p>}

        <div className={style.inputContainer}>
          <label className={style.label}>Países:</label>
          <Select
            className={style.selectInput}
            isMulti
            options={selectedCountries}
            value={selectedCountries}
            onChange={handleCountryChange}
          />
        </div>

        <div className={style.inputContainer}>
          <label className={style.label}>Descripción:</label>
          <textarea
            className={`${style.input} ${style.descriptionInput}`}
            name="description"
            value={activity.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <input
          className={`${style.submitButton} ${
            isFormValid() ? style.validButton : ""
          }`}
          disabled={buttonDisabled()}
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default CreateForm;
