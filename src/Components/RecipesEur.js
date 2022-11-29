import { Link } from "react-router-dom";
import Starrating from "./Starrating";

const RecipesEur = ({ recipes, kitchen }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {recipes &&
            recipes.map((recipe) =>
              recipe.fields.category === "eur" ? (
                <div className="recip">
                  <Link
                    to={`/recipeseur/${recipe.fields.id}`}
                    className="detailLinks"
                  >
                    {recipe?.fields.title.length < 20 ? (
                      <h3>{recipe?.fields.title}</h3>
                    ) : recipe?.fields.title.length < 25 ? (
                      <h4>{recipe?.fields.title}</h4>
                    ) : recipe?.fields.title.length < 30 ? (
                      <h5>{recipe?.fields.title}</h5>
                    ) : (
                      <h6>{recipe?.fields.title}</h6>
                    )}
                    <img
                      className="recipeImage"
                      src={recipe.fields.recipeImage.fields.file.url}
                    />
                  </Link>

                  <Starrating stars={recipe?.fields.rating} total={5} />
                </div>
              ) : (
                <></>
              )
            )}
        </div>
      </header>
    </div>
  );
};

export default RecipesEur;
