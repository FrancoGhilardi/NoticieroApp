import { mockNews } from "@/jest/setup";
import { Keys } from "@/src/core/constants/keys";
import {
  getFavorites,
  saveFavorites,
} from "@/src/core/storage/favoritesStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("favoritesStorage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("saveFavorites", () => {
    it("debería guardar el array de favoritos en AsyncStorage", async () => {
      await saveFavorites(mockNews);

      expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        Keys.FAVORITES_KEY,
        JSON.stringify(mockNews)
      );
    });

    it("debería manejar errores al guardar y no lanzar excepción", async () => {
      const error = new Error("AsyncStorage error");
      (AsyncStorage.setItem as jest.Mock).mockRejectedValueOnce(error);

      const consoleSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await saveFavorites(mockNews);

      expect(consoleSpy).toHaveBeenCalledWith(
        "Error al guardar favoritos",
        error
      );

      consoleSpy.mockRestore();
    });
  });

  describe("getFavorites", () => {
    it("debería obtener favoritos desde AsyncStorage y parsearlos", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockNews)
      );

      const result = await getFavorites();

      expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith(Keys.FAVORITES_KEY);
      expect(result).toEqual(mockNews);
    });

    it("debería devolver un array vacío si no hay favoritos guardados", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

      const result = await getFavorites();

      expect(result).toEqual([]);
    });

    it("debería manejar errores al obtener favoritos y devolver array vacío", async () => {
      const error = new Error("AsyncStorage get error");
      (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(error);

      const consoleSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const result = await getFavorites();

      expect(consoleSpy).toHaveBeenCalledWith(
        "Error al obtener favoritos",
        error
      );
      expect(result).toEqual([]);

      consoleSpy.mockRestore();
    });
  });
});
