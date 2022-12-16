import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Starrating from "./Starrating";
import { deletePost } from "./Deletepost";
import Putrecipe from "./Putrecipe";
import { confirm } from "react-confirm-box";

const RecipeDetail = ({ recipes, kitchen, dark, setRecipeChanges }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const recipe = recipes.find(
    (element) => element.id === Number(id) /* && element.category === kitchen */
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  /* const handleDelete = async (e) => {
    console.log(id);
    try {
      const { post, error } = await deletePost(id);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
  }; */

  /* const handleDelete = async (e) => {
    const result = await confirm(
      `Do you want to delete ${recipe.title}`,
      options
    );
    if (result) {
      console.log("You accepted!");
      try {
        const { post } = await deletePost(id);
        // if (error) {
        //  throw error;
        //} 
        console.log(post);
        setRecipeChanges((prev) => !prev);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("You canceled!");
    }
  }; */

  const handleDelete = async () => {
    const result = await confirm(
      `Do you want to delete ${recipe.title}`,
      options
    );
    if (result) {
      console.log("You pressed OK!");
      handleDeleteFurther();
    } else {
      console.log("You canceled!");
    }
  };

  const handleDeleteFurther = async (e) => {
    try {
      const { post, error } = await deletePost(id);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
    setRecipeChanges((prev) => !prev);
    navigate(-1);
  };

  return (
    <div>
      {edit ? (
        <Putrecipe
          id={id}
          dark={dark}
          recipe={recipe}
          setEdit={setEdit}
          setRecipeChanges={setRecipeChanges}
        />
      ) : (
        <div className="RecipeDetails">
          <div className="container">
            <div className={`${dark ? "darktext" : "lighttext"} recip`}>
              <h1>{recipe.title}</h1>
              <img
                className="recipeImage"
                src={`${recipe.recipeimage}`}
                alt={`${recipe.title} Picture`}
              />
              <Starrating stars={recipe?.rating} total={5} />
              <p>
                <strong>Description: </strong>
                {recipe.description}
              </p>
              <p>
                <strong>Ingredients: </strong>
                {recipe.ingredients}
              </p>
              <p>
                <strong>Instructions: </strong>
                {recipe.instructions}
              </p>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => navigate(-1)} className="goBack">
        Go Back
      </button>
      <button onClick={() => setEdit((prev) => !prev)} className="goBack">
        {edit ? "Stop Editing" : "Change Recipe"}
      </button>
      <button onClick={() => handleDelete()} className="goDelete">
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetail;
