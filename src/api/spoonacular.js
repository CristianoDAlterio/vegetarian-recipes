import axios from "axios";

// Creiamo un'istanza Axios con baseURL dell'API
const api = axios.create({
  baseURL: "https://api.spoonacular.com",
});

// Interceptor: aggiunge sempre l'apiKey ai parametri
api.interceptors.request.use((config) => {
  const key = import.meta.env.VITE_SPOONACULAR_KEY;
  if (!config.params) config.params = {};
  config.params.apiKey = key;
  return config;
});

export default api;
