import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initI18n } from "./src/core/i18n";
import AppNavigation from "./src/presentation/navigation";
import { useThemeStore } from "./src/state/themeState";

const App: React.FC = () => {
  const [ready, setReady] = useState<boolean>(false);
  const loadTheme = useThemeStore((state) => state.loadTheme);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  useEffect(() => {
    const setup = async () => {
      await initI18n();
      setReady(true);
    };
    setup();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
