import i18n from "@/src/core/i18n";
import { setLanguage } from "@/src/core/storage/languagesStorage";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = async (lang: "en" | "es") => {
    await i18n.changeLanguage(lang);
    await setLanguage(lang);
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text>{t("settings")}</Text>
      <Button title="Español" onPress={() => changeLanguage("es")} />
      <Button title="English" onPress={() => changeLanguage("en")} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
