import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.cardsMainContainer}>
      <h3> Países </h3>
      <div className={style.cardsContainer}>
        {countries.map(({ id, name, image, continent }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              imgUrl={image}
              continent={continent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
