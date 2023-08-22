import React from "react";
import "./App.scss";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import NewsDetails from "./NewsDetails";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsData" element={<NewsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
