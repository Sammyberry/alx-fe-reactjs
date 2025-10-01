// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // ✅ Use useEffect to load recipe when component mounts
  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <h2 className="text-center mt-10 text-red-400">Recipe not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold text-white mb-4">{recipe.title}</h1>
          <p className="text-gray-300 text-lg mb-8">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
              📝 Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
              👩‍🍳 Instructions
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {recipe.instructions}
            </p>
          </div>

          {/* Back link */}
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
