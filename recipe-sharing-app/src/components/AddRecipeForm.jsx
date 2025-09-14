// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Title and description are required.");
      return;
    }
    const id = Date.now();
    addRecipe({ id, title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
    // navigate to the recipe details page after adding
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mr-2 rounded w-full mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mr-2 rounded w-full mb-2"
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
