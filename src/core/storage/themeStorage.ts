import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeMode } from "../types/theme";

const THEME_KEY = "theme";

export const storeTheme = async (theme: ThemeMode) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error("Error storing theme", error);
  }
};

export const getStoredTheme = async (): Promise<ThemeMode | null> => {
  try {
    const theme = await AsyncStorage.getItem(THEME_KEY);
    return theme === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Error getting stored theme", error);
    return null;
  }
};
