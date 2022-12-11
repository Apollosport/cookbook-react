import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Starrating from "./Starrating";

const RecipeDetail = ({ recipes, kitchen, dark }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (element) =>
      element.fields.id ===
      Number(id) /* && element.fields.category === kitchen */
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log("recipes ", recipes);
  console.log("category ", recipe.fields.category);

  return (
    <div>
      <div className="RecipeDetails">
        <div className="container">
          <div className={`${dark ? "darktext" : "lighttext"} recip`}>
            <h1>{recipe.fields.title}</h1>
            <img
              className="recipeImage"
              src={recipe.fields.recipeImage.fields.file.url}
            />
            <Starrating stars={recipe?.fields.rating} total={5} />
            <p>{recipe.fields.description}</p>
            <p>{recipe.fields.ingredients}</p>
            <p>{recipe.fields.instructionsnew}</p>
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
