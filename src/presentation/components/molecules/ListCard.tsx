import { RootStackParamListProps } from "@/src/core/types/navigation";
import { News } from "@/src/domain/entities/News";
import { useFavoritesStore } from "@/src/state/favoriteState";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity } from "react-native";

interface Props {
  item: News;
}

const ListCard: React.FC<Props> = ({ item }) => {
  const { title, content, thumbnail, image, publishedAt } = item;
  const navigation = useNavigation<RootStackParamListProps>();
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(item.id));

  const handlePress = () => {
    navigation.navigate("NewsDetail", {
      title,
      content,
      image,
      publishedAt,
    });
  };

  return (
    <TouchableOpacity style={{ marginBottom: 20 }} onPress={handlePress}>
      <Image
        source={{ uri: thumbnail }}
        style={{ width: "100%", height: 200, borderRadius: 8 }}
      />
      <TouchableOpacity
        onPress={() => toggleFavorite(item)}
        style={{ position: "absolute", right: 10, top: 10 }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color="red"
        />
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 8 }}>
        {title}
      </Text>
      <Text numberOfLines={2} style={{ color: "#666" }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default ListCard;
