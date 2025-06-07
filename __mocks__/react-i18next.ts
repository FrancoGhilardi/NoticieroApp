export const useTranslation = () => {
  return {
    t: (key: string) => {
      const translations: Record<string, string> = {
        "read-more": "Leer más",
      };
      return translations[key] || key;
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  };
};
