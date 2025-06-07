import { Colors } from "@/src/core/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

const ReadMoreButton: React.FC<Props> = ({ onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      testID="Button-read-more"
    >
      <Text style={styles.text} testID="Text-read-more">
        {t("read-more")}
      </Text>
      <View testID="Icon-chevron-foward">
        <Ionicons
          name="chevron-forward"
          size={RFValue(16)}
          color={Colors.Black}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};
export default ReadMoreButton;
