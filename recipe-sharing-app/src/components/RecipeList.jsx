// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes());
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (recipes.length === 0) {
    return <p className="text-gray-500">No recipes found.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Recipes</h2>
      <ul className="space-y-4">
        {recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <li key={recipe.id} className="p-4 border rounded">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>

              <div className="flex gap-4 mt-2">
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="text-blue-500 underline"
                >
                  View
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
