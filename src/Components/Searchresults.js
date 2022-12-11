import RecipesLessDetail from "./RecipesLessDetail";

const Searchresults = ({ recipes, dark }) => {
  return (
    <div className="App">
      <RecipesLessDetail recipes={recipes} dark={dark} />
    </div>
  );
};

export default Searchresults;
