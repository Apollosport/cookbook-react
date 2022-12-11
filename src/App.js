import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./client";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Recipes from "./Components/Recipes";
import ErrorPage from "./Components/ErrorPage";
import RecipesAsi from "./Components/RecipesAsi";
import RecipesEur from "./Components/RecipesEur";
import RecipesInd from "./Components/RecipesInd";
import RecipesSam from "./Components/RecipesSam";
import RecipeDetail from "./Components/RecipeDetail";
import Searchresults from "./Components/Searchresults";
import GridLoader from "react-spinners/ClipLoader";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [kitchen, setKitchen] = useState(null);
  const [input, setInput] = useState("");
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(true);

  /* useEffect(() => {
    try {
      client.getEntries().then((res) => setRecipes(res.items));
    } catch (err) {
      console.log(err.toJSON());
    }
  }, []); */

  const getFetch = async () => {
    const allRecipes = await client.getEntries();
    setRecipes(allRecipes.items);
  };

  useEffect(() => {
    console.log("loading: ", loading);
  }, [loading]);

  useEffect(() => {
    setLoading((prev) => !prev);
    getFetch();
  }, []);

  useEffect(() => {
    console.log("dark = ", dark);
  }, [dark]);

  useEffect(() => {
    console.log("searchedRecipe ", searchedRecipe);
  }, [searchedRecipe]);

  /* useEffect(() => {
    setRecipes(async () => {
      client
        .getEntries({
          content_type: "blog",
          select:
            "fields.title, fields.id, fields.category, fields.recipeImage.fields.file.url, fields.rating, fields.description, fields.ingredients, ields.instructionsnew",
          order: "fields.category, fields.id",
        })

        .then((response) => {
          return response.items;
        });
    });
  }, []); */

  useEffect(() => {
    console.log("useEffect ", kitchen, " recipes ", recipes);
    console.log("whatup order ", recipes);
    setLoading((prev) => !prev);
  }, [kitchen, recipes]);

  /* useEffect(() => {
    try {
    client.getEntries(recipestemp)
    .then(recipestemp => recipestemp.getEnvironment(environment))
    .then(environment => environment.getEntry('1234567890'))
    .then(entry => {
        entry.fields.rating = {
            'rating': 'Arizona'
        }
        return entry.update()
    )
      } catch(err) {
        console.log(err.toJSON());
      }
    });
  }, [recipes]); */

  return (
    <div className="App">
      <header className={`${dark ? "dark" : "light"} App-header`}>
        <Navbar
          recipes={recipes}
          searchedRecipe={searchedRecipe}
          setSearchedRecipe={setSearchedRecipe}
          input={input}
          setInput={setInput}
          dark={dark}
        />
        {loading ? (
          <Routes>
            {searchedRecipe.length === 0 ? (
              <Route
                path="/"
                element={
                  <Recipes
                    recipes={recipes}
                    setRecipes={setRecipes}
                    setKitchen={setKitchen}
                    dark={dark}
                  />
                }
              />
            ) : (
              <Route
                path="/"
                element={
                  <Searchresults
                    recipes={searchedRecipe}
                    setRecipes={setRecipes}
                    setKitchen={setKitchen}
                  />
                }
              />
            )}

            <Route
              path="/recipes"
              element={
                <Recipes
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipesasi"
              element={
                <RecipesAsi
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  setInput={setInput}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipesasi/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipeseur"
              element={
                <RecipesEur
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  setInput={setInput}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipeseur/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipesind"
              element={
                <RecipesInd
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  setInput={setInput}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipesind/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipessam"
              element={
                <RecipesSam
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  setInput={setInput}
                  dark={dark}
                />
              }
            />
            <Route
              path="/recipessam/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchedRecipe={searchedRecipe}
                  dark={dark}
                />
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        ) : (
          <GridLoader />
        )}
        <Footer setDark={setDark} />
      </header>
    </div>
  );
};

export default App;
