import { TAB_SCREENS } from "@/src/core/constants/tabConfig";
import { useFavoritesStore } from "@/src/state/favoriteState";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ComponentProps, useEffect } from "react";
import { useTranslation } from "react-i18next";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator();

const AppNavigation: React.FC = () => {
  const { t } = useTranslation();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
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
  );
};

export default AppNavigation;
