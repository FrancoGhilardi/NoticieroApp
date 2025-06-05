import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  children: ReactNode;
};

const SettingsCard: React.FC<Props> = ({ label, children }) => {
  return (
    <View style={styles.cards}>
      <Text style={styles.title}>{label}</Text>
      {children}
    </View>
  );
};

export default SettingsCard;
