import { RootStackParamList } from "@/src/core/types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsDetailScreen from "../screens/NewsDetailsScreen";
import NewsScreen from "../screens/NewsScreens";
import UsersScreen from "../screens/UsersScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="News"
        screenOptions={{ title: "Noticias", headerTitleAlign: "center" }}
      >
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="User" component={UsersScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
