import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Form from "./views/form/form";
import NavBar from "./components/navbar/navbar";
import Landing from "./views/Landing/Landing";
//import "./App.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
