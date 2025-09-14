// src/components/RecipeDetails.jsx
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipe) {
    return <p className="text-gray-500">Recipe not found.</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p className="mb-4">{recipe.description}</p>

      <div className="flex gap-4">
        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="text-green-500 underline"
        >
          Edit
        </Link>
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
        {isFavorite ? (
          <button
            onClick={() => removeFavorite(recipe.id)}
            className="text-red-500 underline"
          >
            💔 Remove Favorite
          </button>
        ) : (
          <button
            onClick={() => addFavorite(recipe.id)}
            className="text-pink-500 underline"
          >
            ❤️ Add Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
