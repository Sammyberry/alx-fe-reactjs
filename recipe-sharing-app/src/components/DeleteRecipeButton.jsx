// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(id);
    // If we're viewing a deleted recipe detail page, go back to list
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
