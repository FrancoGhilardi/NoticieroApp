import { Colors } from "@/src/core/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

const ReadMoreButton: React.FC<Props> = ({ onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{t("read-more")}</Text>
      <Ionicons
        name="chevron-forward"
        size={RFValue(16)}
        color={Colors.Black}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
export default ReadMoreButton;
