import { Colors } from "@/src/core/theme/Colors";
import { useTranslation } from "react-i18next";
import { TextInput } from "react-native";
import { styles } from "./styles";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Sercher: React.FC<Props> = ({ query, setQuery }) => {
  const { t } = useTranslation();

  return (
    <TextInput
      placeholder={t("search_placeholder")}
      value={query}
      onChangeText={setQuery}
      style={styles.input}
      placeholderTextColor={Colors.Black}
      testID="Text-input"
    />
  );
};
export default Sercher;
