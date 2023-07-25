import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, continent, countries }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.titleContainer}>
        <Link to={`/detail/${id}`}>
          <h5 className="cardName">{name}</h5>
        </Link>
        <div className={style.infoContainer}>
          <img src={image} alt="" />
          <p>Continente: {continent} </p>
        </div>
        <p>{countries}</p>
      </div>
    </div>
  );
};

export default Card;
