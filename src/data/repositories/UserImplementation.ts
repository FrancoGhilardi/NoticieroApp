import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { fetchUsers } from "../services/userService";

export class UserRepositoryImpl implements UserRepository {
  async getUsers(): Promise<User[]> {
    const users = await fetchUsers();
    return users;
  }
}
