import RecipesLessDetail from "./RecipesLessDetail";
import { useEffect, useState } from "react";

const RecipesSam = ({ recipes, kitchen }) => {
  const [catRecipes, setCatRecipes] = useState([]);

  const findRecipes = () => {
    const listRecipes = recipes
      ? recipes.filter((recipe) => recipe.fields.category === "sam")
      : null;
    setCatRecipes(listRecipes);
  };

  useEffect(() => {
    findRecipes();
  }, [recipes]);

  return (
    <div className="App">
      <RecipesLessDetail recipes={catRecipes} />
    </div>
  );
};

export default RecipesSam;
