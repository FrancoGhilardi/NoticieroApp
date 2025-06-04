import { SafeAreaProvider } from "react-native-safe-area-context";
import NewsScreen from "./src/presentation/screens/NewsScreens";

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "blue" }}>
      {/* <UsersScreen /> */}
      <NewsScreen />
    </SafeAreaProvider>
  );
};

export default App;
