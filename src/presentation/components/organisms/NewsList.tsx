import { FlatList } from "react-native";
import { useNewsViewModel } from "../../viewModels/useNewsViewModel";
import ListCard from "../molecules/ListCard";

const NewsList: React.FC = () => {
  const { news } = useNewsViewModel();

  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => <ListCard item={item} />}
    />
  );
};

export default NewsList;
