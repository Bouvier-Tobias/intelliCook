import React, { useState } from "react";
import recipes from "../data/recipe.json"; // Import du fichier JSON
import { useNavigate } from "react-router-dom";
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
    <div>
      <Navbar />
      <h1>Recherche de Recettes</h1>
      <input
        type="text"
        placeholder="Entrez un ingrédient"
        value={search}
        onChange={handleSearch}
      />
      <div>
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.name}
            onClick={() => navigate(`/recipe/${recipe.name}`)}
          >
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
