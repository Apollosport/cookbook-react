import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./client";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Recipes from "./Components/Recipes";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => setRecipes(res.items))
      .catch((err) => console.log(err));
  }, []);

  console.log(recipes);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
};

export default App;
