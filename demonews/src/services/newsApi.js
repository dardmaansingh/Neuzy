import axios from "axios";

const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;

const API = axios.create({
  baseURL: "https://newsdata.io/api/1",
});

export const getTopNews = async () => {
  const response = await API.get("/latest", {
    params: {
      apikey: apiKey,
      language: "en",
      country: "us",
      category: "top",
    },
  });

  return response.data;
};

export const getCategoryNews = async (category) => {
  const formattedCategory = !category || category === "general" ? "top" : category.toLowerCase();

  const response = await API.get("/latest", {
    params: {
      apikey: apiKey,
      language: "en",
      country: "us",
      category: formattedCategory,
    },
  });

  return response.data;
};

export const searchNews = async (query) => {
  if (!query || !query.trim()) return [];

  const response = await API.get("/latest", {
    params: {
      apikey: apiKey,
      language: "en",
      q: query,
    },
  });

  return response.data.results || [];
};