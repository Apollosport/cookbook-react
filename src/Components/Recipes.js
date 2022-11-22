const Recipes = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leeeeets Cooook!</h1>
        {recipes &&
          recipes.map((recipe) => (
            <div>
              <h1>{recipe.fields.title}</h1>
              <span>Rating: {recipe.fields.rating}</span>
              <img
                src={recipe.fields.recipeImage.fields.file.url}
                height="400"
              />
              <p>{recipe.fields.description}</p>
            </div>
          ))}
      </header>
    </div>
  );
};

export default Recipes;
