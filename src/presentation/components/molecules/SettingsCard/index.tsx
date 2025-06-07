import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  children: ReactNode;
};

const SettingsCard: React.FC<Props> = ({ label, children }) => {
  return (
    <View style={styles.cards} testID="Setting-card-container">
      <Text style={styles.title} testID="Setting-card-text">
        {label}
      </Text>
      {children}
    </View>
  );
};

export default SettingsCard;
