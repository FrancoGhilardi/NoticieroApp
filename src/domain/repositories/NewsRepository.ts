import { News } from "../entities/News";

export interface INewsRepository {
  getNewsList(): Promise<News[]>;
}
