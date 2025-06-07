import { mockNews } from "@/jest/setup";
import { NewsRepositoryImpl } from "@/src/data/repositories/NewsImplementation";
import * as newsService from "@/src/data/services/newsService";

describe("NewsRepositoryImpl (con servicio separado)", () => {
  let repo: NewsRepositoryImpl;

  beforeEach(() => {
    repo = new NewsRepositoryImpl();
    repo.clearCache();
    jest.clearAllMocks();
  });

  it("debe obtener noticias desde el servicio si no hay caché", async () => {
    (newsService.fetchNews as jest.Mock).mockResolvedValue(mockNews);

    const result = await repo.getNewsList();

    expect(newsService.fetchNews).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockNews);
  });

  it("debe usar la caché en la segunda llamada", async () => {
    (newsService.fetchNews as jest.Mock).mockResolvedValue(mockNews);

    const firstCall = await repo.getNewsList();
    const secondCall = await repo.getNewsList();

    expect(newsService.fetchNews).toHaveBeenCalledTimes(1);
    expect(secondCall).toBe(firstCall);
  });

  it("debe limpiar la caché con clearCache", async () => {
    (newsService.fetchNews as jest.Mock).mockResolvedValue(mockNews);

    await repo.getNewsList();
    repo.clearCache();
    await repo.getNewsList();

    expect(newsService.fetchNews).toHaveBeenCalledTimes(2);
  });
});
