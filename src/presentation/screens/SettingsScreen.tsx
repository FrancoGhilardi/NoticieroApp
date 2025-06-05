import i18n from "@/src/core/i18n";
import { setLanguage } from "@/src/core/storage/languagesStorage";
import { useThemeStore } from "@/src/state/themeState";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const { colors } = useTheme();

  const changeLanguage = async (lang: "en" | "es") => {
    await i18n.changeLanguage(lang);
    await setLanguage(lang);
  };

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      padding: 20,
    },
    container: {
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    light: {
      backgroundColor: "#fff",
    },
    dark: {
      backgroundColor: "#121212",
    },
    textLight: {
      color: colors.text,
    },
    textDark: {
      color: colors.text,
    },
    text: {
      fontSize: 20,
      marginBottom: 15,
    },
  });

  return (
    <SafeAreaView
      style={[styles.safeArea, isDark ? styles.dark : styles.light]}
    >
      <Text style={[styles.text, isDark ? styles.textDark : styles.textLight]}>
        {t("settings")}
      </Text>
      <Button title={t("spanish")} onPress={() => changeLanguage("es")} />
      <Button title={t("english")} onPress={() => changeLanguage("en")} />
      <View style={styles.container}>
        <Text
          style={[styles.title, isDark ? styles.textDark : styles.textLight]}
        >
          {t("settings-theme")}
        </Text>

        <Button
          title={t(isDark ? "light_mode" : "dark_mode")}
          onPress={toggleTheme}
          color={isDark ? "#fff" : "#000"}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
