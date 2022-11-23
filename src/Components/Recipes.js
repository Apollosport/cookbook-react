const Recipes = ({ recipes }) => {
  return (
    <div className="App">
      <header className="App-header">
        {/*         <h1>Leeeeets Cooook!</h1> */}
        <div className="container">
          {recipes &&
            recipes.map((recipe) => (
              <div className="recip">
                <h3>{recipe.fields.title}</h3>
                <img
                  className="recipeImage"
                  src={recipe.fields.recipeImage.fields.file.url}
                />
                <p>Rating: {recipe.fields.rating}</p>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default Recipes;
