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
import axios from "axios";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [kitchen, setKitchen] = useState("asi");

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
    getFetch();
  }, []);

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
      <header className="App-header">
        <Navbar setKitchen={setKitchen} />
        <Routes>
          <Route
            path="/"
            element={
              <Recipes
                recipes={recipes}
                setRecipes={setRecipes}
                setKitchen={setKitchen}
              />
            }
          />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                setRecipes={setRecipes}
                setKitchen={setKitchen}
              />
            }
          />
          <Route
            path="/recipesasi"
            element={
              <RecipesAsi
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipesasi/:id"
            element={
              <RecipeDetail
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipeseur"
            element={
              <RecipesEur
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipeseur/:id"
            element={
              <RecipeDetail
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipesind"
            element={
              <RecipesInd
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipesind/:id"
            element={
              <RecipeDetail
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipessam"
            element={
              <RecipesSam
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route
            path="/recipessam/:id"
            element={
              <RecipeDetail
                recipes={recipes}
                setRecipes={setRecipes}
                kitchen={kitchen}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
};

export default App;
