import { NewsDetailRouteProp } from "@/src/core/types/navigation";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text } from "react-native";
import { styles } from "./styles/FavoritesScreens-styles";

const NewsDetailScreen: React.FC = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { title, content, image, publishedAt } = route.params;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.publishedAt}>{publishedAt}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

export default NewsDetailScreen;
