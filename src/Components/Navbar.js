import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "./Lets-Cook-Logo.webp";

const Navbar = ({
  recipes,
  searchedRecipe,
  setSearchedRecipe,
  input,
  setInput,
}) => {
  /* const [input, setInput] = useState(""); */
  /* const [searchedRecipe, setSearchedRecipe] = useState([]); */

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  // const result = recipes?.filter(
  //   (recipe) => recipe.field.title.toLowerCase() === input.toLowerCase()
  // );
  // const result = recipes.filter((recipe) => {
  //   // console.log("result", recipe);
  //   // if (input === "") {
  //   //   return "Type";
  //   // } else {
  //   // setSearchedRecipe(recipe.fields.title.toLowerCase().includes(input));
  //   return recipe.fields.title.toLowerCase().includes(input);
  //   // }
  // });

  function findRecipe() {
    console.log("findrecipes ", recipes);
    if (recipes) {
      const result = input
        ? recipes.filter((recipe) =>
            recipe.fields.title.toLowerCase().includes(input)
          )
        : [];
      setSearchedRecipe(result);
      console.log("timon", searchedRecipe);
    }
  }

  useEffect(() => {
    findRecipe();
    console.log("there is input ", input);
  }, [input]);
  /* 
  useEffect(() => {
    console.log("etKItchen", recipes);
  }, []); */

  console.log("searchedRecipe", searchedRecipe);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={image} alt="Let's Cook!" className={"imgNavbar"} />
      </Link>
      <NavLink
        to="/recipesasi"
        className="links"
        /*         onClick={() => setKitchen("asi")} */
      >
        Asian
      </NavLink>
      <NavLink
        to="/recipeseur"
        className="links"
        /*         onClick={() => setKitchen("eur")} */
      >
        European
      </NavLink>
      <NavLink
        to="/recipessam"
        className="links"
        /*         onClick={() => setKitchen("sam")} */
      >
        South-American
      </NavLink>
      <NavLink
        to="/recipesind"
        className="links"
        /*         onClick={() => setKitchen("ind")} */
      >
        Indian
      </NavLink>
      <input
        className="search-input"
        type="text"
        size="18"
        placeholder="Search"
        onChange={changeHandler}
        value={input}
      />
    </div>
  );
};

export default Navbar;
