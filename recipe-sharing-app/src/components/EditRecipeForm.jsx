// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }
    updateRecipe(recipeId, {
      title: title.trim(),
      description: description.trim(),
    });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-white shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-3">Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        rows={6}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
