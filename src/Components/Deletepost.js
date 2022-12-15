export const deletePost = async (id) => {
  const url = `http://localhost:8080/${id}`;
  console.log(url);
  try {
    const res = await fetch(url, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Something went wrong");
    /* const post = await res.json(); */
  } catch (error) {
    return { error };
  }
};

/* const getData = () => {
  fetch("http://localhost:8080")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((data) => {
      setRecipes(data);
      console.log(data);
    });
}; */
