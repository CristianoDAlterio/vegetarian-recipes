import { Routes, Route } from "react-router-dom";
import { RecipesProvider } from "./context/RecipesProvider";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import logo from "./assets/logo.svg";

export default function App() {
  return (
    <RecipesProvider>
      <header>
        <img src={logo} alt="Vegetarian Recipes Logo" className="logo" />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </RecipesProvider>
  );
}

