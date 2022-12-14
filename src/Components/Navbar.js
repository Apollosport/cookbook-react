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
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const findRecipe = () => {
    console.log("findrecipes ", recipes);
    if (recipes) {
      const result = input
        ? recipes.filter((recipe) => recipe.title.toLowerCase().includes(input))
        : [];
      setSearchedRecipe(result);
      /* console.log("timon", searchedRecipe); */
    }
  };

  useEffect(() => {
    findRecipe();
  }, [input]);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={image} alt="Let's Cook!" className={"imgNavbar"} />
      </Link>
      <NavLink to="/recipesasi" className="links">
        Asian
      </NavLink>
      <NavLink to="/recipeseur" className="links">
        European
      </NavLink>
      <NavLink to="/recipessam" className="links">
        South-American
      </NavLink>
      <NavLink to="/recipesind" className="links">
        Indian
      </NavLink>
      <NavLink to="/postrecipe" className="links">
        Send Recipe
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
