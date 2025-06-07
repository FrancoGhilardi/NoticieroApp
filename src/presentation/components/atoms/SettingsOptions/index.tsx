import { Text, TouchableOpacity } from "react-native";
import { buildStyles } from "./styles";

type Props = {
  onPress: () => void;
  label: string;
  selected: boolean;
};

const SettingsOptions: React.FC<Props> = ({ onPress, label, selected }) => {
  const styles = buildStyles(selected);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      testID="Button-setting-options"
    >
      <Text style={styles.text} testID="text-setting-options">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SettingsOptions;
