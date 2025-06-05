import { TAB_SCREENS } from "@/src/core/constants/tabConfig";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ComponentProps } from "react";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const screen = TAB_SCREENS.find((s) => s.name === route.name);
            const iconName = screen?.icon ?? "help";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        {TAB_SCREENS.map(({ name, component }) => (
          <Tab.Screen key={name} name={name} component={component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
