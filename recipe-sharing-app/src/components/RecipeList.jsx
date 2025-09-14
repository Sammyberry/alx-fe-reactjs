// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add your first recipe!</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipes</h2>
      <div className="grid gap-4">
        {recipes.map((r) => (
          <div key={r.id} className="p-4 border rounded bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{r.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {r.description.length > 120
                ? r.description.slice(0, 120) + "…"
                : r.description}
            </p>
            <div className="flex gap-2">
              <Link to={`/recipes/${r.id}`} className="text-blue-600 underline">
                View
              </Link>
              <Link
                to={`/recipes/${r.id}/edit`}
                className="text-yellow-600 underline"
              >
                Edit
              </Link>
              <DeleteRecipeButton id={r.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
