import { Link } from "react-router-dom";

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

                  <div className="star-rating">
                    {[...Array(recipe.fields.rating)].map(() => {
                      return <span className="star">&#9733;</span>;
                    })}
                    {[...Array(5 - recipe.fields.rating)].map(() => {
                      return <span className="star">&#9734;</span>;
                    })}
                  </div>
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
