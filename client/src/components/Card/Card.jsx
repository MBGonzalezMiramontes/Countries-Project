import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      {console.log(props)}
      <div className={style.titleContainer}>
        <h5>{props.name}</h5>
        <div className={style.infoContainer}>
          <p>Img: {props.img}</p>
          <p>Continent:{props.continent} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
