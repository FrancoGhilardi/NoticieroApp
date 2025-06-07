import { getInitials } from "@/src/core/utils/getInitials";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
};

const InitialIcon: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container} testID="Initial-icon-container">
      <Text style={styles.text} testID="Initial-icon-text">
        {getInitials(name)}
      </Text>
    </View>
  );
};

export default InitialIcon;
