import { useFavoritesStore } from "@/src/state/favoriteState";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListCard from "../components/molecules/ListCard";

const FavoritesScreens: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {favorites.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No hay noticias guardadas.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ListCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreens;
