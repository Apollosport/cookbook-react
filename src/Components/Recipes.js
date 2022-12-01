import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Starrating from "./Starrating";

const Recipes = ({ recipes, setKitchen, setRecipes }) => {
  const navigate = useNavigate();
  const [timeout, setTimeout] = useState(false);
  const [item1, setItem1] = useState([
    recipes[0],
    recipes[1],
    recipes[2],
    recipes[3],
  ]);
  /* let item = [recipes[0],recipes[1],recipes[2],recipes[3]]; */
  let item = recipes[0];
  const categories = ["asi", "eur", "sam", "ind"];
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fillItem = () => {
    /*     setItem1(null); */
    /* recipes &&
      setItem1(
        categories.map((element) => {
          return [
            ...recipes?.find(
              (elem) =>
                recipes.fields.category &&
                recipes?.fields.category === element &&
                recipes.fields.id &&
                recipes?.fields.id === getRandom(1, 6)
            ),
          ];
        })
      ); */
    /* [... {category: element, id : getRandom(1,6)}] */
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
    console.log("cat ", category, " id ", id);
  };

  function handleTimeout() {
    const interval = setInterval(() => {
      random = fillRandom();
      setTimeout(!timeout);
      // console.log("handletimeout ", timeout);
      console.log("running");
    }, 30000);
    return () => clearInterval(interval);
  }

  /* useEffect(() => {
    console.log("hello"); */
  /* console.log("item1 ", item1); */
  /* fillItem(); */
  /*  }, [timeout]); */

  useEffect(() => {
    console.log("Lets go ");
    const interval = setInterval(() => {
      setTimeout((prev) => !prev);
      console.log("running");
    }, 30000);

    return () => clearInterval(interval);
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
                      onClick={
                        () =>
                          categoryHandler(
                            item?.fields.category,
                            item?.fields.id
                          )
                        /* categoryHandler(elem?.cat, elem?.id) */
                      }
                    >
                      {" "}
                      {item?.fields.category} {item?.fields.id}
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
