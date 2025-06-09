import { API_BASE_URL } from "@env";
import { toNewsEntity } from "../models/NewsModels";

export const fetchNews = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  const json = await response.json();
  return json.map(toNewsEntity);
};
