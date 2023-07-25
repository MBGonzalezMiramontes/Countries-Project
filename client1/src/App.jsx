import { useState } from "react";
import Landing from "./views/LandingPage/Landing";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Details from "./views/Details/Details"
import CreateForm from "./views/CreateForm/CreateForm";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Details />} />
        <Route path="/form" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
