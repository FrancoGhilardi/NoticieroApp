import { toUserEntity } from "../models/UserModel";

export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  return json.map(toUserEntity);
};
