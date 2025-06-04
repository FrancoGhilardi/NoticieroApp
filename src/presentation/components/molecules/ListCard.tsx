import { News } from "@/src/domain/entities/News";
import { Image, Text, View } from "react-native";

interface Props {
  item: News;
}

const ListCard: React.FC<Props> = ({ item }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: "100%", height: 200, borderRadius: 8 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 8 }}>
        {item.title}
      </Text>
      <Text numberOfLines={2} style={{ color: "#666" }}>
        {item.content}
      </Text>
    </View>
  );
};
export default ListCard;
