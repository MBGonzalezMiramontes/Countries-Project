import style from "./cards.module.css";
import Card from "../card/card";

const Cards = ({ allCountries }) => {
  const countriesList = allCountries;

  return (
    <div className={style.cardsContainer}>
      {countriesList?.map((country) => (
        <Card country={country} />
      ))}
    </div>
  );
};

export default Cards;
