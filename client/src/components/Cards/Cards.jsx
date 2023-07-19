import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={style.cardsMainContainer}>
      <h3> Contenedor de Cards.</h3>
      <div className={style.cardsContainer}>
        <Card img={"1"} name={"a"} continent={"a1"} />
        <Card img={"2"} name={"b"} continent={"b2"} />
        <Card img={"3"} name={"c"} continent={"b3"} />
        <Card img={"4"} name={"d"} continent={"b4"} />
        <Card img={"5"} name={"e"} continent={"b5"} />
        <Card img={"6"} name={"f"} continent={"b6"} />
        <Card img={"7"} name={"g"} continent={"b7"} />
        <Card img={"8"} name={"h"} continent={"b8"} />
        <Card img={"9"} name={"i"} continent={"b9"} />
        <Card img={"10"} name={"j"} continent={"b10"} />
      </div>
    </div>
  );
};

export default Cards;
