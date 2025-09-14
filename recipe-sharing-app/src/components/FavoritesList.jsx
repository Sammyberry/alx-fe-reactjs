// src/components/FavoritesList.jsx
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) {
    return <p className="text-gray-500">No favorite recipes yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      <ul className="space-y-3">
        {favorites.map(
          (recipe) =>
            recipe && (
              <li key={recipe.id} className="p-3 border rounded">
                <h3 className="font-semibold">{recipe.title}</h3>
                <div className="flex gap-4 mt-2">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-blue-500 underline"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => removeFavorite(recipe.id)}
                    className="text-red-500 underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default FavoritesList;
