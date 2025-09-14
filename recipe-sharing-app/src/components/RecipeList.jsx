// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton"; // ✅ keep this

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No recipes found.</p>;
  }

  return (
    <ul className="space-y-4">
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          <p>{recipe.ingredients}</p>

          <div className="flex gap-4 mt-2">
            <Link
              to={`/recipes/${recipe.id}`}
              className="text-blue-500 underline"
            >
              View
            </Link>
            <Link
              to={`/recipes/${recipe.id}/edit`}
              className="text-green-500 underline"
            >
              Edit
            </Link>
            <DeleteRecipeButton id={recipe.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
