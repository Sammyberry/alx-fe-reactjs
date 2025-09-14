// src/components/SearchBar.jsx
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="border p-2 rounded w-full mb-4"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
