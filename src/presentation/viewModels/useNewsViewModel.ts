import { use } from "react";
import { cachePromise } from "../../data/cache/promiseCache";
import { NewsRepositoryImpl } from "../../data/repositories/NewsImplementation";
import { GetNewsList } from "../../domain/useCases/GetListNews";

const getNewsList = new GetNewsList(new NewsRepositoryImpl());

export const useNewsViewModel = () => {
  const news = use(cachePromise("news-list", () => getNewsList.execute()));
  return { news };
};
