// src/components/RecommendationsList.jsx
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p className="text-gray-500">No recommendations right now.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Recommended Recipes</h2>
      <ul className="space-y-3">
        {recommendations.map((recipe) => (
          <li key={recipe.id} className="p-3 border rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <Link
              to={`/recipes/${recipe.id}`}
              className="text-blue-500 underline"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
