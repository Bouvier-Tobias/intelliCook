export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (recipe) => {
  const favorites = getFavorites();
  if (!favorites.some((fav) => fav.name === recipe.name)) {
    favorites.push(recipe);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFavorite = (recipeName) => {
  const favorites = getFavorites().filter((fav) => fav.name !== recipeName);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const isFavorite = (recipeName) => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.name === recipeName);
};
