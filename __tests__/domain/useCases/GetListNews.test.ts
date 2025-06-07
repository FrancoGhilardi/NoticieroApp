import { mockNews } from "@/jest/setup";
import { INewsRepository } from "@/src/domain/repositories/NewsRepository";
import { GetNewsList } from "@/src/domain/useCases/GetListNews";

describe("GetNewsList UseCase", () => {
  let mockRepo: jest.Mocked<INewsRepository>;
  let useCase: GetNewsList;

  beforeEach(() => {
    mockRepo = {
      getNewsList: jest.fn(),
    };
    useCase = new GetNewsList(mockRepo);
  });

  it("should return a list of news from the repository", async () => {
    mockRepo.getNewsList.mockResolvedValue(mockNews);

    const result = await useCase.execute();

    expect(mockRepo.getNewsList).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockNews);
  });

  it("should throw an error if the repository fails", async () => {
    const error = new Error("Failed to fetch news");
    mockRepo.getNewsList.mockRejectedValue(error);

    await expect(useCase.execute()).rejects.toThrow("Failed to fetch news");
    expect(mockRepo.getNewsList).toHaveBeenCalledTimes(1);
  });
});
