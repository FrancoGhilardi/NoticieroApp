import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
};

const ErrorLoad: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container} testID="Error-container">
      <Text style={styles.text} testID="Error-text">
        {label}
      </Text>
    </View>
  );
};

export default ErrorLoad;
