import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.minContainer}>
      <h1> Hello word </h1>
      <button>Ingresar</button>
      </div>
    </div>
  );
};

export default Landing;
