import { Suspense } from "react";
import { Text, View } from "react-native";
import ErrorBoundary from "../components/organisms/ErrorBoundary";
import NewsList from "../components/organisms/NewsList";

const NewsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ErrorBoundary
        fallback={<Text>Ocurrió un error al cargar las noticias.</Text>}
      >
        <Suspense fallback={<Text>Cargando noticias...</Text>}>
          <NewsList />
        </Suspense>
      </ErrorBoundary>
    </View>
  );
};

export default NewsScreen;
