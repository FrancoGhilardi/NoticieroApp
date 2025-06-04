import { FlatList } from "react-native";
import useUsersViewModel from "../../viewModels/useUsersViewModel";
import UserCard from "../molecules/UserCard";

const UsersList: React.FC = () => {
  const { users } = useUsersViewModel();

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCard user={item} />}
    />
  );
};

export default UsersList;
