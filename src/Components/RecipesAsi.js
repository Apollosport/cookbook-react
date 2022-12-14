import RecipesLessDetail from "./RecipesLessDetail";
import { useEffect, useState } from "react";
import Searchresults from "./Searchresults";

const RecipesAsi = ({ recipes, searchedRecipe, setInput, dark }) => {
  const [catRecipes, setCatRecipes] = useState([]);

  const findRecipes = () => {
    const listRecipes = recipes
      ? recipes.filter((recipe) => recipe.category === "asi")
      : null;
    setCatRecipes(listRecipes);
  };

  useEffect(() => {
    findRecipes();
  }, [recipes]);

  useEffect(() => {
    setInput("");
  }, []);

  return (
    <div className="App">
      {searchedRecipe.length === 0 ? (
        <RecipesLessDetail recipes={catRecipes} dark={dark} />
      ) : (
        <Searchresults recipes={searchedRecipe} dark={dark} />
      )}
    </div>
  );
};

export default RecipesAsi;
