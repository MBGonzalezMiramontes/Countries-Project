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

  const buttonDisabled = () => {
    for (let error in errors) {
      if (errors[error]) {
        return true;
      }
    }
    return false;
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

  return (
    <div className={style.createFormMainContainer}>
      <form>
        <div className={style.inputContainer}>
          <label className={style.label}>Nombre:</label>
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
            value={activity.difficulty}
            onChange={handleChange}
            type="text"
          />
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
            type="text"
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
          <input
            className={style.input}
            name="season"
            value={activity.season}
            onChange={handleChange}
            type="text"
          />
        </div>
        {errors.noSeason && <p className={style.error}>{errors.noSeason}</p>}
        {errors.invalidSeason && (
          <p className={style.error}>{errors.invalidSeason}</p>
        )}

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
          className={style.submitButton}
          disabled={buttonDisabled()}
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default CreateForm;
