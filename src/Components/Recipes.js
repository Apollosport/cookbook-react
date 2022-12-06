import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesLessDetail from "./RecipesLessDetail";

const Recipes = ({ recipes, setKitchen, setRecipes }) => {
  const navigate = useNavigate();
  const [timeout, setTimeout] = useState(false);
  const [randomRecipes, setRandomRecipes] = useState([]);
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

  /*   const findRecipes = () => {
    i = getRandom(1, 10);
    const listRecipes = recipes
      ? recipes?.filter((recipe) => recipe.fields.id === i)
      : null;
    setRandomRecipes(listRecipes);
  }; */
  const findRecipes = () => {
    setRandomRecipes([]);
    i = getRandom(1, 10);
    categories.map((cat) => {
      console.log(cat);
      setRandomRecipes((prev) => [
        ...prev,
        recipes[getRandom(0, recipes.length - 1)],
      ]);
    });
  };

  useEffect(() => {
    console.log(randomRecipes);
  }, [randomRecipes]);

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
