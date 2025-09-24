import { useState, useMemo } from "react";
import api from "../api/spoonacular";
import { RecipesContext } from "./RecipesContext";

export function RecipesProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ricerca ricette con query + filtri
  const searchRecipes = async (query, type = "", cuisine = "") => {
    try {
      setLoading(true);
      setError("");
      const { data } = await api.get("/recipes/complexSearch", {
        params: {
          query,
          diet: "vegetarian",
          type: type || undefined,
          cuisine: cuisine || undefined,
          number: 12,
          addRecipeInformation: true,
        },
      });
      setResults(data.results || []);
    } catch {
      setError("Errore durante la ricerca.");
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      results,
      loading,
      error,
      searchRecipes,
    }),
    [results, loading, error]
  );

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  );
}
