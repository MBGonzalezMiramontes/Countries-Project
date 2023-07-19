import React from "react";
import style from "./CreateForm.module.css";

const CreateForm = () => {
  return (
    <div className={style.createFormMainContainer}>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" />
        </div>
        <div>
          <label>Dificultad:</label>
          <input type="text" />
        </div>
        <div>
          <label>Duración:</label>
          <input type="text" />
        </div>
        <div>
          <label>Temporada:</label>
          <input type="text" />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
