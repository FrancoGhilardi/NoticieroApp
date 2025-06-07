import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { fetchUsers } from "../services/userService";

export class UserRepositoryImpl implements UserRepository {
  private cachedNews: User[] | null = null;

  async getUsers(): Promise<User[]> {
    if (this.cachedNews) return this.cachedNews;
    const users = await fetchUsers();
    this.cachedNews = users;
    return users;
  }

  clearCache() {
    this.cachedNews = null;
  }
}
