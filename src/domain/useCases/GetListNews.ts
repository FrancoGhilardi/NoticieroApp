import { News } from "../entities/News";
import { INewsRepository } from "../repositories/NewsRepository";

export class GetNewsList {
  constructor(private repo: INewsRepository) {}

  async execute(): Promise<News[]> {
    return this.repo.getNewsList();
  }
}
