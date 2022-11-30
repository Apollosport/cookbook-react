import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Starrating from "./Starrating";

const Recipes = ({ recipes, setKitchen }) => {
  const navigate = useNavigate();
  const [timeout, setTimeout] = useState(false);
  let item = recipes[0];
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fillRandom = () => {
    return [
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
  };

  let random = fillRandom();

  const categoryHandler = (category, id) => {
    setKitchen(category);
    navigate(`/recipes${category}/${id}`);
  };

  function handleTimeout() {
    const interval = setInterval(() => {
      random = fillRandom();
      setTimeout(!timeout);
      console.log("handletimeout ", timeout);
    }, 5000);
    return () => clearInterval(interval);
  }

  handleTimeout();

  useEffect(() => {
    console.log("lets go");
  }, [timeout]);

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
                        categoryHandler(item.fields?.category, item?.fields?.id)
                      }
                    >
                      {item?.fields.title.length < 20 ? (
                        <h3>{item?.fields.title}</h3>
                      ) : item?.fields.title.length < 25 ? (
                        <h4>{item?.fields.title}</h4>
                      ) : item?.fields.title.length < 30 ? (
                        <h5>{item?.fields.title}</h5>
                      ) : (
                        <h6>{item?.fields.title}</h6>
                      )}
                      <img
                        className="recipeImage"
                        src={item?.fields.recipeImage.fields.file.url}
                      />
                    </div>
                    <Starrating stars={item?.fields.rating} total={5} />
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
