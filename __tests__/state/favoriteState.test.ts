import * as favoritesStorage from "@/src/core/storage/favoritesStorage";
import { News } from "@/src/domain/entities/News";
import { useFavoritesStore } from "@/src/state/favoriteState";
import { act } from "@testing-library/react-native";

jest.mock("@/src/core/storage/favoritesStorage");

describe("useFavoritesStore", () => {
  const fakeNews1: News = {
    id: 1,
    slug: "news-1",
    url: "http://news.com/1",
    title: "News 1",
    content: "Content 1",
    image: "http://image.com/1.jpg",
    thumbnail: "http://thumb.com/1.jpg",
    status: "published",
    category: "general",
    publishedAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    userId: 1,
  };
  const fakeNews2: News = { ...fakeNews1, id: 2, title: "News 2" };

  beforeEach(() => {
    jest.clearAllMocks();
    act(() => {
      useFavoritesStore.setState({ favorites: [] });
    });
  });

  it("debe inicializar con un arreglo vacío", () => {
    const favorites = useFavoritesStore.getState().favorites;
    expect(favorites).toEqual([]);
  });

  it("toggleFavorite debe agregar una noticia si no está en favoritos", () => {
    act(() => {
      useFavoritesStore.getState().toggleFavorite(fakeNews1);
    });
    const favorites = useFavoritesStore.getState().favorites;
    expect(favorites).toContainEqual(fakeNews1);
    expect(favoritesStorage.saveFavorites).toHaveBeenCalledWith([fakeNews1]);
  });

  it("toggleFavorite debe eliminar una noticia si ya está en favoritos", () => {
    act(() => {
      useFavoritesStore.setState({ favorites: [fakeNews1] });
      useFavoritesStore.getState().toggleFavorite(fakeNews1);
    });
    const favorites = useFavoritesStore.getState().favorites;
    expect(favorites).toEqual([]);
    expect(favoritesStorage.saveFavorites).toHaveBeenCalledWith([]);
  });

  it("isFavorite debe retornar true si la noticia está en favoritos", () => {
    act(() => {
      useFavoritesStore.setState({ favorites: [fakeNews1] });
    });
    const isFav = useFavoritesStore.getState().isFavorite(fakeNews1.id);
    expect(isFav).toBe(true);
  });

  it("isFavorite debe retornar false si la noticia no está en favoritos", () => {
    act(() => {
      useFavoritesStore.setState({ favorites: [] });
    });
    const isFav = useFavoritesStore.getState().isFavorite(fakeNews1.id);
    expect(isFav).toBe(false);
  });

  it("loadFavorites debe cargar los favoritos desde getFavorites y actualizar el estado", async () => {
    (favoritesStorage.getFavorites as jest.Mock).mockResolvedValue([
      fakeNews1,
      fakeNews2,
    ]);
    await act(async () => {
      await useFavoritesStore.getState().loadFavorites();
    });
    const favorites = useFavoritesStore.getState().favorites;
    expect(favorites).toEqual([fakeNews1, fakeNews2]);
    expect(favoritesStorage.getFavorites).toHaveBeenCalledTimes(1);
  });
});
