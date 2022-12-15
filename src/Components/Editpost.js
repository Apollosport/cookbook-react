export const editPost = async (id, changedata) => {
  const url = `http://localhost:8080/putrecipes/${id}`;
  /* console.log(JSON.stringify(changedata)); */
  try {
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(changedata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const post = await res.json();
    return { post };
  } catch (error) {
    return { error };
  }
};

export const createPost = async (formData) => {
  try {
    const res = await fetch("http://localhost:8080/postrecipe", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const post = await res.json();
    return { post };
  } catch (error) {
    return { error };
  }
};
