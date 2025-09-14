import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
