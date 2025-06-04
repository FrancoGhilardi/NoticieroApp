import React, { Suspense } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorBoundary from "../components/organisms/ErrorBoundary";
import UsersList from "../components/organisms/UserList";

const UsersScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary fallback={<Text>Error cargando usuarios.</Text>}>
        <Suspense fallback={<Text>Cargando usuarios...</Text>}>
          <UsersList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

export default UsersScreen;
