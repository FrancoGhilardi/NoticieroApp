import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorLoad from "../components/molecules/ErrorLoad";
import ErrorBoundary from "../components/organisms/ErrorBoundary";
import UsersList from "../components/organisms/UserList";

const UsersScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary fallback={<ErrorLoad label={t("error_loading_users")} />}>
        <Suspense fallback={<ErrorLoad label={t("loading_users")} />}>
          <UsersList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

export default UsersScreen;
