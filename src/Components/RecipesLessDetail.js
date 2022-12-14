import Starrating from "./Starrating";
import { Link } from "react-router-dom";

const RecipesLessDetail = ({ recipes, dark }) => {
  return (
    <div id="container" className="container">
      {recipes?.map((recipe, index) => (
        <div className="recip" key={index}>
          <Link
            to={`/recipes${recipe.category}/${recipe.id}`}
            className={`${dark ? "detailLinksd" : "detailLinksl"} detailLinks`}
          >
            {recipe?.title.length < 20 ? (
              <h3>{recipe?.title}</h3>
            ) : recipe?.title.length < 25 ? (
              <h4>{recipe?.title}</h4>
            ) : recipe?.title.length < 30 ? (
              <h5>{recipe?.title}</h5>
            ) : (
              <h6>{recipe?.title}</h6>
            )}
            <img
              className="recipeImage"
              src={`http://${recipe.recipeimage}`}
              alt={`${recipe.title} Picture`}
            />
            <p>{recipe.id}</p>
          </Link>
          <Starrating stars={recipe?.rating} total={5} />
        </div>
      ))}
    </div>
  );
};

export default RecipesLessDetail;
