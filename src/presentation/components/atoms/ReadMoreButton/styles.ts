import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    padding: RFValue(8),
    borderRadius: 5,
    marginTop: RFValue(10),
    borderWidth: RFValue(1),
    borderColor: Colors.GrayscaleG05,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: { color: Colors.Black, fontSize: RFValue(12) },
  icon: {
    marginLeft: RFValue(8),
  },
});
