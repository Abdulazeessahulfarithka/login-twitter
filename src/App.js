import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signin from "./components/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element=<Login /> />
      <Route path="/signin" element=<Signin /> />
    </Routes>
  );
}

export default App;
