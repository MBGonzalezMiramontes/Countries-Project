import React, { useState } from "react";
import style from "./CreateForm.module.css";
import Validations from "./Validations/Validations";

const CreateForm = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

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

  return (
    <div className={style.createFormMainContainer}>
      <form>
        <div className={style.inputContainer}>
          <label>Nombre: </label>
          <input
            name="name"
            value={activity.name}
            onChange={handleChange}
            type="text"
          />
          {errors.noName ? (
            <p>{errors.noName}</p>
          ) : errors.nameLength ? (
            <p>{errors.nameLength}</p>
          ) : null}
        </div>
        <div className={style.inputContainer}>
          <label>Dificultad: </label>
          <input
            name="difficulty"
            value={activity.difficulty}
            onChange={handleChange}
            type="text"
          />
          {errors.nodifficulty ? (
            <p>{errors.nodifficulty}</p>
          ) : errors.difficultyLength ? (
            <p>{errors.difficultyLength}</p>
          ) : null}
        </div>
        <div className={style.inputContainer}>
          <label>Duración: </label>
          <input
            name="duration"
            value={activity.duration}
            onChange={handleChange}
            type="text"
          />
          {errors.invalidDuration ? (
            <p>{errors.invalidDuration}</p>
          ) : errors.invalidDurationRange ? (
            <p>{errors.invalidDurationRange}</p>
          ) : null}
        </div>
        <div className={style.inputContainer}>
          <label>Temporada: </label>
          <input
            name="season"
            value={activity.season}
            onChange={handleChange}
            type="text"
          />
          {errors.noSeasonn ? (
            <p>{errors.noSeason}</p>
          ) : errors.invalidSeason ? (
            <p>{errors.invalidSeason}</p>
          ) : null}
        </div>
        <div className={style.inputContainer}>
          <label>Descripción: </label>
          <input
            name="description"
            value={activity.description}
            onChange={handleChange}
            type="text"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateForm;
