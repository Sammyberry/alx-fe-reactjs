// src/components/RecipeDetails.jsx
import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p className="text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h1 className="text-xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <p className="text-sm text-gray-500">Recipe ID: {recipe.id}</p>
      {/* Later: Add EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};

export default RecipeDetails;
