import { getStoredTheme, storeTheme } from "@/src/core/storage/themeStorage";
import { create } from "zustand";
import { ThemeMode } from "../core/types/theme";

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  loadTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    storeTheme(newTheme);
    set({ theme: newTheme });
  },

  setTheme: (theme) => {
    storeTheme(theme);
    set({ theme });
  },

  loadTheme: async () => {
    const stored = await getStoredTheme();
    if (stored === "light" || stored === "dark") {
      set({ theme: stored });
    }
  },
}));
