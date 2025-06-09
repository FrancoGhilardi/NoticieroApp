import { API_BASE_URL } from "@env";
import { toUserEntity } from "../models/UserModel";

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  const json = await response.json();
  return json.map(toUserEntity);
};
