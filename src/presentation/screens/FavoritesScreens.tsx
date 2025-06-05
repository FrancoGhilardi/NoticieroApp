import { useFavoritesStore } from "@/src/state/favoriteState";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorLoad from "../components/molecules/ErrorLoad";
import ListCard from "../components/molecules/ListCard";

const FavoritesScreens: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const { t } = useTranslation();

  if (!favorites.length) return <ErrorLoad label={t("not_saved_news")} />;

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreens;
