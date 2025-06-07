import { Colors } from "@/src/core/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
  isFavorite: boolean;
};

const FavIconButton: React.FC<Props> = ({ onPress, isFavorite }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      testID="Button-Fav-Icon"
    >
      <View testID="Fav-Icon">
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={RFValue(20)}
          color={isFavorite ? Colors.Danger : Colors.GrayscaleG07}
        />
      </View>
    </TouchableOpacity>
  );
};
export default FavIconButton;
