import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesLessDetail from "./RecipesLessDetail";

const Recipes = ({ recipes, setKitchen, setRecipes, dark }) => {
  const navigate = useNavigate();
  const [timeout, setTimeout] = useState(false);
  const [randomRecipes, setRandomRecipes] = useState([]);
  let i = 1;

  const categories = ["asi", "eur", "sam", "ind"];

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
      {randomRecipes && (
        <RecipesLessDetail recipes={randomRecipes} dark={dark} />
      )}
    </div>
  );
};

export default Recipes;
