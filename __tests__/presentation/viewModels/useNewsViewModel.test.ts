import { useNewsViewModel } from "@/src/presentation/viewModels/useNewsViewModel";
import { act, renderHook } from "@testing-library/react-native";

const mockedNews = [
  {
    id: 1,
    slug: "noticia-1",
    url: "https://example.com/1",
    title: "Noticia sobre React Native",
    content: "Contenido interesante",
    image: "",
    thumbnail: "",
    status: "publicado",
    category: "tecnología",
    publishedAt: "2025-06-01",
    updatedAt: "2025-06-01",
    userId: 1,
  },
  {
    id: 2,
    slug: "noticia-2",
    url: "https://example.com/2",
    title: "Noticias del día",
    content: "Otra noticia",
    image: "",
    thumbnail: "",
    status: "publicado",
    category: "actualidad",
    publishedAt: "2025-06-01",
    updatedAt: "2025-06-01",
    userId: 2,
  },
];

jest.mock("react", () => {
  const actualReact = jest.requireActual("react");
  return {
    ...actualReact,
    use: (promise: Promise<any>) => {
      let result: any;
      promise.then((res) => {
        result = res;
      });
      return mockedNews;
    },
  };
});

jest.mock("@/src/data/cache/promiseCache", () => ({
  cachePromise: jest.fn(() => Promise.resolve(mockedNews)),
}));

describe("useNewsViewModel", () => {
  it("debe retornar noticias y query vacía al inicio", () => {
    const { result } = renderHook(() => useNewsViewModel());

    expect(result.current.query).toBe("");
    expect(result.current.news.length).toBe(2);
  });

  it("debe filtrar noticias según el query", () => {
    const { result } = renderHook(() => useNewsViewModel());

    act(() => {
      result.current.setQuery("react");
    });

    expect(result.current.query).toBe("react");
    expect(result.current.news.length).toBe(1);
    expect(result.current.news[0].title).toContain("React Native");
  });
});
