import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { createPost } from "./Createpost";
import Select from "react-select";

const Sendrecipe = ({ dark, setRecipeChanges }) => {
  const navigate = useNavigate();
  const title = useRef();
  const recipeimage = useRef();
  const description = useRef();
  const instructions = useRef();
  const ingredients = useRef();
  const options = [
    { value: "asi", label: "Asia" },
    { value: "eur", label: "Europe" },
    { value: "sam", label: "South-America" },
    { value: "ind", label: "India" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
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
    if (title.current.value === "") {
      alert("Please select a title!");
      return;
    }
    if (selectedOption === null) {
      alert("Please select the Land of origin!");
      return;
    }

    try {
      const { post, error } = await createPost({
        title: title.current.value,
        recipeimage: recipeimage.current.value,
        description: description.current.value,
        instructions: instructions.current.value,
        ingredients: ingredients.current.value,
        category: selectedOption.value,
      });
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
    alert(title.current.value + " was successfully put into the Database!");
    setRecipeChanges((prev) => !prev);
    navigate(`/recipes${selectedOption.value}`);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <fieldset className={`${dark ? "darktext" : "lighttext"} field`}>
      <legend>
        <h1>Post your recipe</h1>
      </legend>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="postinput"
          ref={title}
          placeholder="Recipe title"
        />

        <br></br>

        <input
          type="url"
          name="image"
          className="postinput"
          ref={recipeimage}
          placeholder="Image URL"
        />
        {/* <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg, image/jiff"
          onChange={() => console.log(image.value)}
          onChange={handleChange}
        ></input> */}

        <br></br>

        <textarea
          name="description"
          className="posttextinput"
          ref={description}
          placeholder="Recipe description"
        ></textarea>

        <br></br>

        <textarea
          name="instructions"
          className="posttextinput"
          ref={instructions}
          placeholder="Recipe instructions"
        ></textarea>
        <br></br>

        <textarea
          name="ingredients"
          className="posttextinput"
          ref={ingredients}
          placeholder="Recipe ingredients"
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

export default Sendrecipe;
