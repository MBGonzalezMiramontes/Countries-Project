import React from 'react'
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards"

const Home = () => {
  return (
    <div className={style.homeContainer}>
     <h1> Hello Home</h1>
     <div>
      <Cards></Cards>
     </div>
    </div>
  )
}

export default Home
