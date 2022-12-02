import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesLessDetail from "./RecipesLessDetail";

const Recipes = ({ recipes, setKitchen, setRecipes }) => {
  const navigate = useNavigate();
  const [timeout, setTimeout] = useState(false);
  const [randomRecipes, setRandomRecipes] = useState(null);
  let i = 1;
  let j = 1;

  const categories = ["asi", "eur", "sam", "ind"];

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* const findRecipes = () => {
    const listRecipes = categories.map((cat) => {
      recipes &&
        recipes.find(
          (recipe) =>
            /* recipe.fields?.category === "eur"  &&  recipe.fields.id === i
        );
       return [...listRecipes, recipes[i]];
    });
    
    setRandomRecipes(listRecipes);
    console.log("this is running ", listRecipes, " & i ", i);
  }; */

  const findRecipes = () => {
    i = getRandom(1, 10);
    const listRecipes = recipes
      ? recipes.filter((recipe) => recipe.fields.id === i)
      : null;
    setRandomRecipes(listRecipes);
    /* i > 9 ? (i = 1) : i++; */
  };

  useEffect(() => {
    findRecipes();
  }, []);

  useEffect(() => {
    console.log("Lets go ");
    const interval = setInterval(() => {
      setTimeout(() => !timeout);
      findRecipes();
      console.log("timeout ", timeout, " randomarray ", randomRecipes);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {randomRecipes && <RecipesLessDetail recipes={randomRecipes} />}
    </div>
  );
};

export default Recipes;
