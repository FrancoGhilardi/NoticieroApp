import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguage } from "../storage/languagesStorage";
import en from "./en.json";
import es from "./es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

export const initI18n = async () => {
  const savedLanguage = await getLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};

export default i18n;
