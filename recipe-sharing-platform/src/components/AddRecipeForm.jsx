import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Mock submission (for now just log the new recipe)
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps,
    };

    console.log("New Recipe Added:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          ➕ Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Ingredients
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              placeholder="List ingredients (one per line)"
            />
            {errors.ingredients && (
              <p className="text-red-400 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="6"
              placeholder="Write preparation steps here"
            />
            {errors.steps && (
              <p className="text-red-400 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
