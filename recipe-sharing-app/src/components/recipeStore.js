// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // search state
  searchTerm: "",

  // update search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  // add new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  // edit recipe
  editRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // computed filtered recipes (always up-to-date)
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm.trim()) return recipes;

    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
