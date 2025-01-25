import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import AuthForm from "../src/pages/AuthForm";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthForm /> }  exact/>
      <Route path="/home" element={<Home />} exact/>
    </Routes>
  </Router>
    
  );



};

export default App;
