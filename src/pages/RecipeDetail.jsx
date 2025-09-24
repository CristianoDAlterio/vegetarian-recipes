import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/spoonacular";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import IngredientList from "../components/IngredientList";
import Instructions from "../components/Instructions";
import NutritionList from "../components/NutritionList";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/recipes/${id}/information`, {
          params: { includeNutrition: true },
        });
        setRecipe(data);
      } catch {
        setError("Errore durante il caricamento della ricetta.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!recipe) return null;

  return (
    <div className="detail">
      <Link to="/" style={{ textDecoration: "none", color: "var(--accent)" }}>
        ← Torna ai risultati
      </Link>

      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />

      <p>
        ⏱️ {recipe.readyInMinutes} min • 🍽️ {recipe.servings} porzioni
      </p>

      <IngredientList ingredients={recipe.extendedIngredients} />
      <Instructions text={recipe.instructions} />
      <NutritionList nutrients={recipe.nutrition?.nutrients} />
    </div>
  );
}
