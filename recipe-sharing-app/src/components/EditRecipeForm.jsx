// src/components/EditRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ prevents page reload
    updateRecipe(recipe.id, { title, description });
    if (onClose) onClose(); // close form after update if callback provided
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-gray-100 shadow-md"
    >
      <h2 className="text-lg font-bold mb-2">Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="block w-full p-2 mb-2 border rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full p-2 mb-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
