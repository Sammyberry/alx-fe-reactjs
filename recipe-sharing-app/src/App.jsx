// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

const Home = () => (
  <div className="p-8 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing App</h1>
    <AddRecipeForm />
    <RecipeList />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto p-4">
          <Link to="/" className="text-xl font-semibold">
            Recipe Sharing
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
