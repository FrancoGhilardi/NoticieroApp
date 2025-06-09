import { NewsDetailRouteProp } from "@/src/core/types/navigation";
import { formatPublishedAt } from "@/src/core/utils/dateFormatted";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, Text } from "react-native";
import { styles } from "./styles/FavoritesScreens-styles";

const NewsDetailScreen: React.FC = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { title, content, image, publishedAt } = route.params;
  const { i18n } = useTranslation();
  const date = formatPublishedAt(publishedAt, i18n.language);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.publishedAt}>{date}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

export default NewsDetailScreen;
