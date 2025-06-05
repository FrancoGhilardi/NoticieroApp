import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import AppNavigation from "./AppNavigator";

export type RootStackParamList = {
  Tabs: undefined;
  NewsDetail: {
    title: string;
    content: string;
    image: string;
    publishedAt: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={AppNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailsScreen}
          options={{ title: "Noticias" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
