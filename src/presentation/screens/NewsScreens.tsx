import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorLoad from "../components/atoms/ErrorLoad";
import ErrorBoundary from "../components/organisms/ErrorBoundary";
import NewsList from "../components/organisms/NewsList";

const NewsScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary fallback={<ErrorLoad label={t("error_loading_news")} />}>
        <Suspense fallback={<ErrorLoad label={t("loading_news")} />}>
          <NewsList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

export default NewsScreen;
