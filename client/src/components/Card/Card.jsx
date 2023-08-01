import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { id, name, flagImage, continent } = country;

  return (
    <Link to={`/home/${id}`} className={style.link}>
      <div className={style.cardContainer}>
        <div className={style.content}>
          <p>{continent}</p>
          <h2>{name}</h2>
        </div>
        <img src={flagImage} alt="Flag" />
      </div>
    </Link>
  );
};

export default Card;
