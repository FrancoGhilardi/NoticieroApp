import { FlatList, View } from "react-native";
import { useNewsViewModel } from "../../viewModels/useNewsViewModel";
import Sercher from "../atoms/Sercher";
import ListCard from "../molecules/ListCard";

const NewsList: React.FC = () => {
  const { news, query, setQuery } = useNewsViewModel();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Sercher query={query} setQuery={setQuery} />
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListCard item={item} />}
      />
    </View>
  );
};

export default NewsList;
