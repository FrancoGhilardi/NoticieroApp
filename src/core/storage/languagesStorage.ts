import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGE_KEY = "language";

export const getLanguage = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(LANGUAGE_KEY);
};

export const setLanguage = async (lang: string): Promise<void> => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
};
