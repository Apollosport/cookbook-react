import { useState } from "react";
import { editPost } from "./Editpost";
import { useNavigate } from "react-router";
import Select from "react-select";

const Putrecipe = ({ id, dark, recipe, setEdit, setRecipeChanges }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(recipe.title);
  const [recipeimage, setRecipeImage] = useState(recipe.recipeimage);
  const [description, setDescription] = useState(recipe.description);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const options = [
    { value: "asi", label: "Asia" },
    { value: "eur", label: "Europe" },
    { value: "sam", label: "South-America" },
    { value: "ind", label: "India" },
  ];
  const [selectedOption, setSelectedOption] = useState(
    options.find((element) => element.value === recipe.category)
  );
  const styles = {
    option: (provided, state) => ({
      ...provided,
      border: state.isSelected ? "1px solid white" : "1px solid black",
      color: state.isSelected ? "white" : "lightgrey",
      backgroundColor: state.isSelected ? "#016FCE" : "grey",
      "&:hover": {
        color: state.isFocused ? "rgb(255, 215, 0)" : "black",
        borderBottom: "2px dotted white",
      },
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "black",
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "3%",
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Please select a title!");
      return;
    }
    try {
      const { post, error } = await editPost(recipe.id, {
        title: title,
        recipeimage: recipeimage,
        description: description,
        instructions: instructions,
        ingredients: ingredients,
        category: selectedOption.value,
        idtwo: recipe.id,
      });
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
    alert(title + " was successfully changed!");
    setRecipeChanges((prev) => !prev);
    navigate(-1);
  };

  return (
    <fieldset className={`${dark ? "darktext" : "lighttext"} field`}>
      <legend>
        <h1>Edit {recipe.title}</h1>
      </legend>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="postinput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br></br>

        <input
          type="url"
          name="image"
          className="postinput"
          value={recipeimage}
          onChange={(e) => setRecipeImage(e.target.value)}
        />

        <br></br>

        <textarea
          name="description"
          className="posttextinput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <br></br>

        <textarea
          name="instructions"
          className="posttextinput"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
        <br></br>

        <textarea
          name="ingredients"
          className="posttextinput"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <br></br>
        <div className="dropdiv">
          <label>Land of origin:</label>
          <Select
            className="react-select-container"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={styles}
          />
        </div>
        <button className="goPost">Submit</button>
      </form>
    </fieldset>
  );
};

export default Putrecipe;
