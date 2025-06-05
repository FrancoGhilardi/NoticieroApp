import { TAB_SCREENS } from "@/src/core/constants/tabConfig";
import { DarkThemeCustom, LightTheme } from "@/src/core/theme/theme";
import { useFavoritesStore } from "@/src/state/favoriteState";
import { useThemeStore } from "@/src/state/themeState";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ComponentProps, useEffect } from "react";
import { useTranslation } from "react-i18next";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator();

const AppNavigation: React.FC = () => {
  const { t } = useTranslation();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <NavigationContainer
      theme={theme === "dark" ? DarkThemeCustom : LightTheme}
    >
      <Tab.Navigator
        screenOptions={({ route }) => {
          const screen = TAB_SCREENS.find((s) => s.key === route.name);
          const iconName = screen?.icon ?? "help";
          return {
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
            headerShown: false,
          };
        }}
      >
        {TAB_SCREENS.map((tab) => (
          <Tab.Screen
            key={tab.key}
            name={tab.key}
            component={tab.component}
            options={{
              title: t(tab.key),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
