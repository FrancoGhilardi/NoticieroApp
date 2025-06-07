import { mockUsers } from "@/jest/setup";
import { UserRepository } from "@/src/domain/repositories/UserRepository";
import { GetUsersList } from "@/src/domain/useCases/GetUserList";

describe("GetUsersList UseCase", () => {
  let mockRepository: jest.Mocked<UserRepository>;
  let getUsersList: GetUsersList;

  beforeEach(() => {
    mockRepository = {
      getUsers: jest.fn(),
    };
    getUsersList = new GetUsersList(mockRepository);
  });

  it("should return a list of users when repository returns data", async () => {
    mockRepository.getUsers.mockResolvedValue(mockUsers);

    const result = await getUsersList.execute();

    expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUsers);
  });

  it("should throw an error if the repository fails", async () => {
    const error = new Error("Repository error");
    mockRepository.getUsers.mockRejectedValue(error);

    await expect(getUsersList.execute()).rejects.toThrow("Repository error");
    expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
  });
});
