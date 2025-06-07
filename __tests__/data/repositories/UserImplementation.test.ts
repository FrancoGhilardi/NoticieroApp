import { mockUsers } from "@/jest/setup";
import { UserRepositoryImpl } from "@/src/data/repositories/UserImplementation";
import * as userService from "@/src/data/services/userService";

describe("UserRepositoryImpl", () => {
  let repo: UserRepositoryImpl;

  beforeEach(() => {
    repo = new UserRepositoryImpl();
    (userService.fetchUsers as jest.Mock).mockClear();
    repo.clearCache();
  });

  it("debe llamar a fetchUsers la primera vez y cachear el resultado", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const firstCall = await repo.getUsers();
    expect(userService.fetchUsers).toHaveBeenCalledTimes(1);
    expect(firstCall).toBe(mockUsers);

    const secondCall = await repo.getUsers();
    expect(userService.fetchUsers).toHaveBeenCalledTimes(1);
    expect(secondCall).toBe(firstCall);
  });

  it("clearCache debe limpiar la caché y hacer que se vuelva a llamar al servicio", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    await repo.getUsers();
    expect(userService.fetchUsers).toHaveBeenCalledTimes(1);

    repo.clearCache();

    await repo.getUsers();
    expect(userService.fetchUsers).toHaveBeenCalledTimes(2);
  });
});
