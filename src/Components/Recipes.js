import { useNavigate } from "react-router-dom";

const Recipes = ({ recipes, setKitchen }) => {
  const navigate = useNavigate();

  const categoryHandler = (category, id) => {
    setKitchen(category);
    navigate(`/recipes${category}/${id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {recipes &&
            recipes.map((recipe) => (
              <div className="recip">
                <div
                  className="recipeDiv"
                  onClick={() =>
                    /* navigate(
                      `/recipes${recipe.fields.category}/${recipe.fields.id}`
                    ) */
                    categoryHandler(recipe.fields.category, recipe.fields.id)
                  }
                >
                  <h3>{recipe.fields.title}</h3>
                  <img
                    className="recipeImage"
                    src={recipe.fields.recipeImage.fields.file.url}
                  />
                </div>
                <p>{recipe.fields.id}</p>
                <p>{recipe.fields.category}</p>
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
