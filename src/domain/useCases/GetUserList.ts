import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class GetUsersList {
  constructor(private repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.getUsers();
  }
}
