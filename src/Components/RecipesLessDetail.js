import Starrating from "./Starrating";
import { Link } from "react-router-dom";

const RecipesLessDetail = ({ recipes, dark }) => {
  return (
    <div id="container" className="container">
      {recipes?.map((recipe, index) => (
        <div className="recip" key={index}>
          <Link
            to={`/recipes${recipe.fields.category}/${recipe.fields.id}`}
            className={`${dark ? "detailLinksd" : "detailLinksl"} detailLinks`}
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
      ))}
    </div>
  );
};

export default RecipesLessDetail;
