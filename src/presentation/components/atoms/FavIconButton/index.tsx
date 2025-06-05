import { Colors } from "@/src/core/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
  isFavorite: boolean;
};

const FavIconButton: React.FC<Props> = ({ onPress, isFavorite }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={RFValue(20)}
        color={isFavorite ? Colors.Danger : Colors.GrayscaleG07}
      />
    </TouchableOpacity>
  );
};
export default FavIconButton;
