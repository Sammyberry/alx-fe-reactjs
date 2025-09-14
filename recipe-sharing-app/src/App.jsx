import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Recipe Sharing App</h1>

        <Routes>
          {/* Home page with recipe list and form */}
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />

          {/* Dynamic route for viewing details of a single recipe */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
