import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  cards: {
    padding: RFValue(18),
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    borderColor: Colors.GrayscaleG05,
    marginBottom: RFValue(20),
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "700",
    marginBottom: RFValue(10),
  },
});
