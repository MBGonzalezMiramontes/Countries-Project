import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { id, name, flagImage, continent } = country;
  console.log(country);
  return (
    <Link to={`/home/${id}`} className={style.link}>
      <div className={style.cardContainer}>
        <img src={flagImage} alt="Flag" />
        <div className={style.content}>
          <h2>{name}</h2>
          <p>{continent}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
