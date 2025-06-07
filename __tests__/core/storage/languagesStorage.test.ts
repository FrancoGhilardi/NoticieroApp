import { Keys } from "@/src/core/constants/keys";
import { getLanguage, setLanguage } from "@/src/core/storage/languagesStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("languageStorage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debería llamar a AsyncStorage.getItem con la clave correcta en getLanguage", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue("es");

    const result = await getLanguage();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith(Keys.LANGUAGE_KEY);
    expect(result).toBe("es");
  });

  it("debería llamar a AsyncStorage.setItem con la clave y valor correctos en setLanguage", async () => {
    (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

    await setLanguage("en");

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(Keys.LANGUAGE_KEY, "en");
  });

  it("getLanguage debería devolver null si no hay valor guardado", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await getLanguage();

    expect(result).toBeNull();
  });
});
