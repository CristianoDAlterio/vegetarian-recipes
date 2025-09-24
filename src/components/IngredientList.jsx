export default function IngredientList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) return null;

  return (
    <>
      <h2>Ingredienti</h2>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
    </>
  );
}
