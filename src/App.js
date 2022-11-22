import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./client";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
        <Footer />
      </header>
    </div>
  );
};

export default App;
