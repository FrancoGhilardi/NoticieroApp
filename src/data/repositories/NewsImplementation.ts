import { News } from "../../domain/entities/News";
import { INewsRepository } from "../../domain/repositories/NewsRepository";
import { fetchNews } from "../services/newsService";

export class NewsRepositoryImpl implements INewsRepository {
  private cachedNews: News[] | null = null;

  async getNewsList(): Promise<News[]> {
    if (this.cachedNews) return this.cachedNews;
    const news = await fetchNews();
    this.cachedNews = news;
    return news;
  }

  clearCache() {
    this.cachedNews = null;
  }
}
