import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Recipes = ({ recipes, setKitchen }) => {
  const navigate = useNavigate();

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const random = [
    {
      cat: "asi",
      number: getRandom(1, 6),
    },
    {
      cat: "eur",
      number: getRandom(1, 6),
    },
    {
      cat: "sam",
      number: getRandom(1, 6),
    },
    {
      cat: "ind",
      number: getRandom(1, 6),
    },
  ];

  const categories = ["asi", "eur", "sam", "ind"];

  /* {categories.map(
    (cat) =>
      recipes &&
      recipes.fields.id &&
      recipes.fields.category(
        (item = recipes.find(
          (recipe) =>
            recipe.fields.id === rando && recipe.fields.category === cat
        )())
      )
  )} */

  let rando = getRandom(1, 6);
  let item = recipes[0];

  const categoryHandler = (category, id) => {
    setKitchen(category);
    navigate(`/recipes${category}/${id}`);
  };

  useEffect(() => {
    /* random1 = getRandom(1, 6);
    random2 = getRandom(1, 6);
    random3 = getRandom(1, 6);
    random4 = getRandom(1, 6); */
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {recipes &&
            random.map(
              (elem) => (
                (item = recipes.find((recipe) => {
                  return (
                    recipe?.fields.id === elem?.number &&
                    recipe?.fields.category === elem?.cat
                  );
                })),
                (
                  <div className="recip">
                    <div
                      className="recipeDiv"
                      onClick={() =>
                        /* navigate(
                      `/recipes${recipe.fields.category}/${recipe.fields.id}`
                    ) */
                        categoryHandler(item.fields?.category, item?.fields?.id)
                      }
                    >
                      <h3>{item?.fields.title}</h3>
                      <img
                        className="recipeImage"
                        src={item?.fields.recipeImage.fields.file.url}
                      />
                    </div>

                    {/* <div className="star-rating">
                {[...Array(item?.fields.rating)].map(() => {
                  return <span className="star">&#9733;</span>;
                })}
                {[...Array(5 - item?.fields.rating)].map(() => {
                  return <span className="star">&#9734;</span>;
                })}
              </div> */}
                  </div>
                )
              )
            )}
        </div>
      </header>
    </div>
  );
};

export default Recipes;
