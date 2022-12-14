import { useRef, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { createPost } from "./Createpost";

const Sendrecipe = () => {
  const title = useRef();
  const recipeimage = useRef("");
  const description = useRef("");
  const instructions = useRef("");
  const ingredients = useRef("");
  const category = useRef("");
  const options = ["asi", "eur", "sam", "ind"];
  const defaultOption = options[0];

  /* const formSubmission = {
    {title.current.value}
    recipeimage,
    description,
    instructions,
    ingredients,
    category,
  }; */

  //function for handling the form submission
  const handleSubmit = async (e) => {
    console.log(
      "lets see ",
      /* title.current.value,
      recipeimage.current.value,
      description.current.value,
      instructions.current.value,
      ingredients.current.value, */
      category.current.value
    );
    e.preventDefault();
    try {
      const { post, error } = await createPost({
        title: title.current.value,
        recipeimage: recipeimage.current.value,
        description: description.current.value,
        instructions: instructions.current.value,
        ingredients: ingredients.current.value,
        category: category.current.value,
      });
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = () => {
    console.log(title);
    /* setValue(.current.value); */
  };

  useEffect(() => {
    console.log(title.current.value);
  }, [title]);

  /*   const temp = () => {
    console.log(title);
    handleSubmit();
  }; */

  //For uncontrollod components (try using these inside the createPost()'s object above, on line 14, like so: {name: e.target.elements.name.value}):
  // console.log(e.target.elements);
  // console.log(e.target.elements.name.value);
  // console.log(e.target.elements.age.value);
  // console.log(e.target.elements.text.value);
  // console.log(e.target.elements.terms.checked);

  return (
    <div className="App">
      <fieldset>
        <legend>
          <h1>Post your recipe</h1>
        </legend>
        <form onSubmit={handleSubmit}>
          <label>
            Recipe title:
            <input
              type="text"
              name="title"
              ref={title}
              /* value={title.current.value} */
            />
          </label>
          <label>
            Recipe image:
            <input
              type="url"
              name="image"
              ref={recipeimage}
              value={recipeimage.current.value}
            />
          </label>
          <label>
            Recipe description:
            <textarea
              name="description"
              ref={description}
              value={description.current.value}
            ></textarea>
          </label>
          <label>
            Recipe instructions:
            <textarea
              name="text"
              ref={instructions}
              value={instructions.current.value}
            ></textarea>
          </label>
          <label>
            Recipe ingredients:
            <textarea
              name="text"
              ref={ingredients}
              value={ingredients.current.value}
            ></textarea>
          </label>

          <label>
            Land of origin:
            <input
              type="text"
              name="title"
              ref={category}
              value={category.current.value}
            />
          </label>
          {/*
                Land of origin:
            <textarea name="text" value={instructions}></textarea>
          </label> */}
          {/* { <Dropdown
            options={options}
            
            value={defaultOption}
            placeholder="Select an option"
            ref={category}
          />} */}
          <button>Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Sendrecipe;
