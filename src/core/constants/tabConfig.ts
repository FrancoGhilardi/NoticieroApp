import { IoniconsName } from "@/src/presentation/navigation/AppNavigator";
import FavoritesScreens from "@/src/presentation/screens/FavoritesScreens";
import NewsScreens from "@/src/presentation/screens/NewsScreens";
import SettingsScreen from "@/src/presentation/screens/SettingsScreen";
import UsersScreen from "@/src/presentation/screens/UsersScreen";

export type TabConfig = {
  key: string;
  component: React.ComponentType<any>;
  icon: IoniconsName;
};

export const TAB_SCREENS: TabConfig[] = [
  {
    key: "tabs.news",
    component: NewsScreens,
    icon: "newspaper",
  },
  {
    key: "tabs.favorites",
    component: FavoritesScreens,
    icon: "heart",
  },
  {
    key: "tabs.users",
    component: UsersScreen,
    icon: "people",
  },
  {
    key: "tabs.settings",
    component: SettingsScreen,
    icon: "settings",
  },
];
