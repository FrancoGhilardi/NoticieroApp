import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  input: {
    borderWidth: RFValue(1),
    borderColor: Colors.GrayscaleG07,
    borderRadius: 10,
    padding: RFValue(12),
    marginBottom: RFValue(16),
  },
});
