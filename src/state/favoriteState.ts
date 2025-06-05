import { News } from "@/src/domain/entities/News";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface FavoritesState {
  favorites: News[];
  toggleFavorite: (news: News) => void;
  isFavorite: (id: number) => boolean;
  loadFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  toggleFavorite: (news) => {
    const { favorites } = get();
    const exists = favorites.find((item) => item.id === news.id);
    const newFavorites = exists
      ? favorites.filter((item) => item.id !== news.id)
      : [...favorites, news];

    AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  isFavorite: (id) => get().favorites.some((item) => item.id === id),

  loadFavorites: async () => {
    const stored = await AsyncStorage.getItem("favorites");
    if (stored) set({ favorites: JSON.parse(stored) });
  },
}));
