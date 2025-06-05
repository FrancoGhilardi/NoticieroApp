import { NewsDetailRouteProp } from "@/src/core/types/navigation";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text } from "react-native";

const NewsDetailScreen: React.FC = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { title, content, image, publishedAt } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image
        source={{ uri: image }}
        style={{ height: 200, borderRadius: 12 }}
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12 }}>
        {title}
      </Text>
      <Text style={{ color: "gray", marginBottom: 8 }}>{publishedAt}</Text>
      <Text>{content}</Text>
    </ScrollView>
  );
};

export default NewsDetailScreen;
