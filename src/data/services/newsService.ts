import { toNewsEntity } from "../models/NewsModels";

export const fetchNews = async () => {
  const response = await fetch("https://jsonplaceholder.org/posts");
  const json = await response.json();
  return json.map(toNewsEntity);
};
