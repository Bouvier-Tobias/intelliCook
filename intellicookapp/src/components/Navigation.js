import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <img src="./icones/Icone-Home.svg" alt="Icone de l'accueil" />
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Catalogue">
          <img
            src="./icones/Icone-Book.svg"
            alt="Icone de livres pour le catalogue"
          />
          <li>Catalogue</li>
        </NavLink>
        <NavLink to="/Favoris">
          <img
            src="./icones/Icone-Heart.svg"
            alt="Icone de coeur pour favoris"
          />
          <li>Favoris</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
