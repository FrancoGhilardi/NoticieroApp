import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initI18n } from "./src/core/i18n";
import RootNavigator from "./src/presentation/navigation/RootNavigator";

const App: React.FC = () => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const setup = async () => {
      await initI18n();
      setReady(true);
    };
    setup();
  }, []);

  if (!ready) return <ActivityIndicator size="large" />;

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
