import { Link, useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-2 underline text-blue-600"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <div className="flex gap-2">
        <Link
          to={`/recipes/${recipeId}/edit`}
          className="text-yellow-600 underline"
        >
          Edit
        </Link>
        <DeleteRecipeButton id={recipeId} />
        <Link to="/" className="text-blue-600 underline">
          Back to list
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
