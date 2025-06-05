import { Suspense } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorBoundary from "../components/organisms/ErrorBoundary";
import NewsList from "../components/organisms/NewsList";

const NewsScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary
        fallback={<Text>Ocurrió un error al cargar las noticias.</Text>}
      >
        <Suspense fallback={<Text>Cargando noticias...</Text>}>
          <NewsList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

export default NewsScreen;
