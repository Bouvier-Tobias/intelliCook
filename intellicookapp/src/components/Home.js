import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json"; // Import du fichier JSON
import Logo from "./Logo";
import Navbar from "./NavBar";

function Home() {
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const results = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilteredRecipes(results);
  };

  return (
    <div className="body_Home">
      <Navbar />
      <Logo />
      <h1>Sur IntelliCook recherchez des recettes en un clin d'oeil</h1>
      <p>Trouvez vos meilleures en selectionnant l'ingrédient de votre choix</p>
      <input
        type="text"
        placeholder="Entrez un ingrédient"
        value={search}
        onChange={handleSearch}
      />
      <div className="search">
        {filteredRecipes.slice(0, 6).map((recipe) => (
          <div
            className="title_Img"
            key={recipe.name}
            onClick={() => navigate(`/recipe/${recipe.name}`)}
          >
            <h3>{recipe.name}</h3>
            <img
              className="img-Home"
              src={recipe.image}
              alt={recipe.name}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
