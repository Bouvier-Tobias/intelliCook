import React from "react";
import Navigation from "../components/Navigation";
import BarreDeRecherche from "./BarreDeRecherche";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="section_Title">
        <h1 className="title_Home">
          Des recettes à votre goût, prêtes en un clin d'oeil
        </h1>

        <p>
          Avec Intellicook, trouver vos recettes à partir des ingrédients de
          votre choix
        </p>
        <BarreDeRecherche />
      </div>
    </div>
  );
};

export default Home;
