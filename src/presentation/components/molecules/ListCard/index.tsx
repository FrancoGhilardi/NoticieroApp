import { RootStackParamListProps } from "@/src/core/types/navigation";
import { News } from "@/src/domain/entities/News";
import { useFavoritesStore } from "@/src/state/favoriteState";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import FavIconButton from "../../atoms/FavIconButton";
import ReadMoreButton from "../../atoms/ReadMoreButton";
import { styles } from "./styles";

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
    <View style={styles.container} testID="ListCard-container">
      <Image
        source={{ uri: thumbnail }}
        style={styles.image}
        testID="ListCard-image"
      />
      <FavIconButton
        onPress={() => toggleFavorite(item)}
        isFavorite={isFavorite}
      />
      <Text style={styles.title} testID="ListCard-title">
        {title}
      </Text>
      <Text numberOfLines={2} style={styles.content} testID="ListCard-content">
        {content}
      </Text>
      <ReadMoreButton onPress={handlePress} />
    </View>
  );
};

export default ListCard;
