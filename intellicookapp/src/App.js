import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien */}
        <Route path="*" element={<Home />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Favoris" element={<Favoris />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
