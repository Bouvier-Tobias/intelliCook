import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";
import Panier from "./pages/Panier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien */}
        <Route path="*" element={<Home />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Panier" element={<Panier />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
