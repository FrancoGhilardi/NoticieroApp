import { IoniconsName } from "@/src/presentation/navigation";
import FavoritesScreens from "@/src/presentation/screens/FavoritesScreens";
import NewsScreens from "@/src/presentation/screens/NewsScreens";
import SettingsScreen from "@/src/presentation/screens/SettingsScreen";
import UsersScreen from "@/src/presentation/screens/UsersScreen";

export type TabConfig = {
  name: string;
  component: React.ComponentType<any>;
  icon: IoniconsName;
};

export const TAB_SCREENS: TabConfig[] = [
  {
    name: "Noticias",
    component: NewsScreens,
    icon: "home",
  },
  {
    name: "Favotios",
    component: FavoritesScreens,
    icon: "heart",
  },
  {
    name: "Usuarios",
    component: UsersScreen,
    icon: "person",
  },
  {
    name: "Ajustes",
    component: SettingsScreen,
    icon: "settings",
  },
];
