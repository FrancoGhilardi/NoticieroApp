import { useGetInitials } from "@/src/core/utils/hooks/useGetInitials";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  first: string;
  last: string;
};

const InitialIcon: React.FC<Props> = ({ first, last }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{useGetInitials(first, last)}</Text>
    </View>
  );
};

export default InitialIcon;
