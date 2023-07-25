import React, { useEffect } from "react";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <h1> Hello Home</h1>
      <div>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Home;
