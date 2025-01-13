import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Recipe/:name" element={<RecipeDetail />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
