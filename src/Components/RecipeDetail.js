import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Starrating from "./Starrating";

const RecipeDetail = ({ recipes, kitchen }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (element) =>
      element.fields.id === Number(id) && element.fields.category === kitchen
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log("kitchen ", kitchen);
  console.log("category ", recipe.fields.category);

  return (
    <div>
      <div className="RecipeDetails">
        <div className="container">
          <div className="recip">
            <h1>
              {recipe.fields.title}
              {recipe.fields.category} {recipe.fields.id}
            </h1>
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
