import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
};

const ErrorLoad: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default ErrorLoad;
