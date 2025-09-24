import { useState } from "react";

const TYPES = ["", "main course", "side dish", "dessert", "appetizer", "salad", "soup", "bread", "breakfast"];
const CUISINES = ["", "italian", "indian", "mexican", "french", "japanese", "greek", "thai", "spanish"];

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, type, cuisine);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cerca una ricetta vegetariana..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Tipo</option>
        {TYPES.map((t) => (
          <option key={t} value={t}>{t || "Qualsiasi"}</option>
        ))}
      </select>
      <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
        <option value="">Cucina</option>
        {CUISINES.map((c) => (
          <option key={c} value={c}>{c || "Qualsiasi"}</option>
        ))}
      </select>
      <button type="submit">Cerca</button>
    </form>
  );
}
