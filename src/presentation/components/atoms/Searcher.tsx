import { useTranslation } from "react-i18next";
import { TextInput } from "react-native";

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
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
      }}
    />
  );
};
export default Sercher;
