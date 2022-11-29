import { Link } from "react-router-dom";
import Starrating from "./Starrating";

const RecipesAsi = ({ recipes, kitchen }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {recipes &&
            recipes.map((recipe) =>
              recipe.fields.category === "asi" ? (
                <div className="recip">
                  <Link
                    to={`/recipesasi/${recipe.fields.id}`}
                    className="detailLinks"
                  >
                    <h3>{recipe.fields.title}</h3>
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

export default RecipesAsi;
