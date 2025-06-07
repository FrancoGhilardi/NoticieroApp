import { News } from "@/src/domain/entities/News";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keys } from "../constants/keys";

export const saveFavorites = async (favorites: News[]) => {
  try {
    await AsyncStorage.setItem(Keys.FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error al guardar favoritos", error);
  }
};

export const getFavorites = async (): Promise<News[]> => {
  try {
    const stored = await AsyncStorage.getItem(Keys.FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error al obtener favoritos", error);
    return [];
  }
};
