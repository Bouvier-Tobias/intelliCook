import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input type="search" className="searchBar" placeholder="Ingrédients" />
      <div className="search_Button">
        <button className="btn_Add btn_Search">Ajouter</button>
        <button className="btn_Remove btn_Search">Retirer</button>
      </div>
    </div>
  );
};

export default SearchBar;
