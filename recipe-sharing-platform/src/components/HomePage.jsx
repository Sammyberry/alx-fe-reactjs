// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import data from "../data.json"; // using mock data from src

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes into state
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🍴 Recipe Sharing Platform
      </h1>

      {/* Responsive Grid for Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {/* Recipe Image */}
            <div className="overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full object-contain max-h-60 bg-gray-50"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
