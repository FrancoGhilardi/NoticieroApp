import { getInitials } from "@/src/core/utils/getInitials";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  firstname: string;
  lastname: string;
};

const InitialIcon: React.FC<Props> = ({ firstname, lastname }) => {
  const initials = getInitials(firstname, lastname);
  return (
    <View style={styles.container} testID="Initial-icon-container">
      <Text style={styles.text} testID="Initial-icon-text">
        {initials}
      </Text>
    </View>
  );
};

export default InitialIcon;
