import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src="./logo_version_claire.png" alt="" />
      </div>
      <Navigation />
      <h1>Des recettes à votre goût, prêtes en un clin d'oeil</h1>
    </div>
  );
};

export default Home;
