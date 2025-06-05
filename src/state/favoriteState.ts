import { getFavorites, saveFavorites } from "@/src/core/storage/storage";
import { News } from "@/src/domain/entities/News";
import { create } from "zustand";

interface FavoritesState {
  favorites: News[];
  toggleFavorite: (news: News) => void;
  isFavorite: (id: number) => boolean;
  loadFavorites: () => Promise<void>;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  toggleFavorite: (news) => {
    const { favorites } = get();
    const exists = favorites.find((item) => item.id === news.id);
    const newFavorites = exists
      ? favorites.filter((item) => item.id !== news.id)
      : [...favorites, news];

    saveFavorites(newFavorites);
    set({ favorites: newFavorites });
  },

  isFavorite: (id) => get().favorites.some((item) => item.id === id),

  loadFavorites: async () => {
    const loaded = await getFavorites();
    set({ favorites: loaded });
  },
}));
