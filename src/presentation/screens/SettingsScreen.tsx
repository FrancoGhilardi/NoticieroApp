import i18n from "@/src/core/i18n";
import { setLanguage } from "@/src/core/storage/languagesStorage";
import React from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsOptions from "../components/atoms/SettingsOptions";
import SettingsCard from "../components/molecules/SettingsCard";
import { styles } from "./styles/SettingsScreen-styles";

const SettingsScreen: React.FC = () => {
  const currentLanguage = i18n.language;
  const { t } = useTranslation();

  const changeLanguage = async (lang: "en" | "es") => {
    await i18n.changeLanguage(lang);
    await setLanguage(lang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SettingsCard label={t("language")}>
        <SettingsOptions
          label={t("spanish")}
          onPress={() => changeLanguage("es")}
          selected={currentLanguage === "es"}
        />
        <SettingsOptions
          label={t("english")}
          onPress={() => changeLanguage("en")}
          selected={currentLanguage === "en"}
        />
      </SettingsCard>
      <SettingsCard label={t("settings-theme")}>
        <SettingsOptions
          label={t("light_mode")}
          onPress={() => changeLanguage("es")}
          selected={true}
        />
        <SettingsOptions
          label={t("dark_mode")}
          onPress={() => changeLanguage("en")}
          selected={false}
        />
      </SettingsCard>
    </SafeAreaView>
  );
};

export default SettingsScreen;
