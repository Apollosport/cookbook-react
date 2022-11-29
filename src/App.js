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

  useEffect(() => {
    try {
      client.getEntries().then((res) => setRecipes(res.items));
    } catch (err) {
      console.log(err.toJSON());
    }
  }, []);

  /*   useEffect(() => {
   try {
    await client
      .get()      
      .then((response) => {
        setRecipes(response.items);
      });
}
catch(err) {
  console.log(err.toJSON());
}
}, []); */

  useEffect(() => {
    console.log("useEffect ", kitchen, " recipes ", recipes);
  }, [kitchen, recipes]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setKitchen={setKitchen} />
        <Routes>
          <Route
            path="/"
            element={<Recipes recipes={recipes} setKitchen={setKitchen} />}
          />
          <Route
            path="/recipes"
            element={<Recipes recipes={recipes} setKitchen={setKitchen} />}
          />
          <Route
            path="/recipesasi"
            element={<RecipesAsi recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipesasi/:id"
            element={<RecipeDetail recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipeseur"
            element={<RecipesEur recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipeseur/:id"
            element={<RecipeDetail recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipesind"
            element={<RecipesInd recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipesind/:id"
            element={<RecipeDetail recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipessam"
            element={<RecipesSam recipes={recipes} kitchen={kitchen} />}
          />
          <Route
            path="/recipessam/:id"
            element={<RecipeDetail recipes={recipes} kitchen={kitchen} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
};

export default App;
