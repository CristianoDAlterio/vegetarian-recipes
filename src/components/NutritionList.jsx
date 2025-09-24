export default function NutritionList({ nutrients }) {
  if (!nutrients || nutrients.length === 0) return null;

  return (
    <>
      <h2>Valori nutrizionali (per porzione)</h2>
      <ul>
        {nutrients.slice(0, 6).map((n) => (
          <li key={n.name}>
            {n.name}: {Math.round(n.amount)} {n.unit}
          </li>
        ))}
      </ul>
    </>
  );
}
