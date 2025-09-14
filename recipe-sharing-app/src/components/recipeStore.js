// src/components/recipeStore.js
import { create } from "zustand";

const STORAGE_KEY = "recipes_v1";

const loadRecipes = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load recipes from localStorage", err);
    return [];
  }
};

const saveRecipes = (recipes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch (err) {
    console.error("Failed to save recipes to localStorage", err);
  }
};

const useRecipeStore = create((set) => ({
  recipes: loadRecipes(),

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      saveRecipes(updated);
      return { recipes: updated };
    });
  },

  updateRecipe: (id, updatedFields) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      );
      saveRecipes(updated);
      return { recipes: updated };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      saveRecipes(updated);
      return { recipes: updated };
    });
  },

  setRecipes: (recipes) => {
    saveRecipes(recipes);
    set({ recipes });
  },
}));

export default useRecipeStore;
