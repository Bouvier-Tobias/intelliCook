import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input type="search" className="searchBar" placeholder="Ingrédients" />
      <div className="search_Button">
        <button>Ajouter</button>
        <button>Retirer</button>
      </div>
    </div>
  );
};

export default SearchBar;
