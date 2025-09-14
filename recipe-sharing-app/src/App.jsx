// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </div>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
