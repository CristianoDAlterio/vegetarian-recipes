import { useRecipes } from "../context/useRecipes";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { results, loading, error, searchRecipes } = useRecipes();

  return (
    <div>
      {/* Barra di ricerca */}
      <SearchBar onSearch={searchRecipes} />

      {/* Stato */}
      {loading && <Loader />}
      <ErrorMessage message={error} />

      {/* Risultati */}
      <div className="grid">
        {results.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
