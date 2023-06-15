import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import your components for different pages
import Home from "./components/navbar/header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/admission" element={<Home/>} />
        <Route path="/student-corner" element={<Home/>} />
        <Route path="/about-us" element={<Home/>} />
        <Route path="/contanct-us" element={<Home/>} />
        <Route path="/notice" element={<Home/>} />
        <Route path="/login" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
