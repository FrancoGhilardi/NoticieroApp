import { News } from "@/src/domain/entities/News";
import { use, useMemo, useState } from "react";
import { cachePromise } from "../../data/cache/promiseCache";
import { NewsRepositoryImpl } from "../../data/repositories/NewsImplementation";
import { GetNewsList } from "../../domain/useCases/GetListNews";

const getNewsList = new GetNewsList(new NewsRepositoryImpl()).execute();

export const useNewsViewModel = () => {
  const [query, setQuery] = useState<string>("");
  const news: News[] = use(cachePromise("news-list", () => getNewsList));

  const filteredNews = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return news.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery)
    );
  }, [news, query]);
  return { query, setQuery, news: filteredNews };
};
