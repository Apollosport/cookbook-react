import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Starrating from "./Starrating";

const RecipeDetail = ({ recipes, kitchen, dark }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (element) => element.id === Number(id) /* && element.category === kitchen */
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log("recipes ", recipes);
  console.log("category ", recipe.category);

  return (
    <div>
      <div className="RecipeDetails">
        <div className="container">
          <div className={`${dark ? "darktext" : "lighttext"} recip`}>
            <h1>{recipe.title}</h1>
            <img
              className="recipeImage"
              src={`http://${recipe.recipeimage}`}
              alt={`${recipe.title} Picture`}
            />
            <Starrating stars={recipe?.rating} total={5} />
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructionsnew}</p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="goBack">
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetail;
