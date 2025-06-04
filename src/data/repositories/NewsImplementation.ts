import { News } from "../../domain/entities/News";
import { INewsRepository } from "../../domain/repositories/NewsRepository";
import { toNewsEntity } from "../models/NewsModels";

export class NewsRepositoryImpl implements INewsRepository {
  async getNewsList(): Promise<News[]> {
    const response = await fetch("https://jsonplaceholder.org/posts");
    const json = await response.json();
    return json.map(toNewsEntity);
  }
}
