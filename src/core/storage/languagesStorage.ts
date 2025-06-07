import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keys } from "../constants/keys";

export const getLanguage = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(Keys.LANGUAGE_KEY);
};

export const setLanguage = async (lang: string): Promise<void> => {
  await AsyncStorage.setItem(Keys.LANGUAGE_KEY, lang);
};
