// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // ✅ Use useEffect to load data
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        🍴 Recipe Sharing Platform
      </h1>
      
      {/* Add Recipe Link */}
      <Link
        to="/add"
        className="inline-block mb-6 px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
      >
        ➕ Add New Recipe
      </Link>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {/* Recipe Image */}
            <div className="overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                {recipe.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">{recipe.summary}</p>

              {/* Link */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-yellow-400 font-medium hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
