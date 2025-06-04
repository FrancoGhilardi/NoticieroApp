import React, { Suspense } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "../components/molecules/UserCard";
import useUsersViewModel from "../viewModels/useUsersViewModel";

const UsersList = () => {
  const { users } = useUsersViewModel();

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCard user={item} />}
    />
  );
};

const UsersScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Suspense fallback={<Text>Cargando usuarios...</Text>}>
        <UsersList />
      </Suspense>
    </SafeAreaView>
  );
};

export default UsersScreen;
