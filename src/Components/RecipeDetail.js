import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
            <h1>{recipe.fields.title}</h1>
            <img
              className="recipeImage"
              src={recipe.fields.recipeImage.fields.file.url}
            />
            <div className="star-rating">
              {[...Array(recipe.fields.rating)].map(() => {
                return <span className="star">&#9733;</span>;
              })}
              {[...Array(5 - recipe.fields.rating)].map(() => {
                return <span className="star">&#9734;</span>;
              })}
            </div>
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