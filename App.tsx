import { SafeAreaProvider } from "react-native-safe-area-context";
import UsersScreen from "./src/presentation/screens/UsersScreen";

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "blue" }}>
      <UsersScreen />
    </SafeAreaProvider>
  );
};

export default App;
