import { RootStackParamListProps } from "@/src/core/types/navigation";
import { News } from "@/src/domain/entities/News";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity } from "react-native";

interface Props {
  item: News;
}

const ListCard: React.FC<Props> = ({ item }) => {
  const { title, content, thumbnail, image, publishedAt } = item;
  const navigation = useNavigation<RootStackParamListProps>();

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
