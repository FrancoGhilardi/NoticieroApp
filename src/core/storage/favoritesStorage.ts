import { News } from "@/src/domain/entities/News";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export const saveFavorites = async (favorites: News[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error al guardar favoritos", error);
  }
};

export const getFavorites = async (): Promise<News[]> => {
  try {
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error al obtener favoritos", error);
    return [];
  }
};
