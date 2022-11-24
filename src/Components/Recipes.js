import { Link } from "react-router-dom";

const Recipes = ({ recipes, setKitchen }) => {
  const categoryHandler = (what) => {
    /* console.log("hello ", what); */
    /* setKitchen(what); */
  };

  console.log("recipes recipe.id", recipes.id);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {recipes &&
            recipes.map((recipe) => (
              <div className="recip">
                <Link
                  to={`/recipesasi/${recipe.fields.id}`}
                  onClick={() => categoryHandler(recipe.fields.category)}
                >
                  <h3>{recipe.fields.title}</h3>
                </Link>
                <p>{recipe.fields.id}</p>
                <p>{recipe.fields.category}</p>
                <img
                  className="recipeImage"
                  src={recipe.fields.recipeImage.fields.file.url}
                />{" "}
                <div className="star-rating">
                  {[...Array(recipe.fields.rating)].map(() => {
                    return <span className="star">&#9733;</span>;
                  })}
                  {[...Array(5 - recipe.fields.rating)].map(() => {
                    return <span className="star">&#9734;</span>;
                  })}
                </div>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default Recipes;
