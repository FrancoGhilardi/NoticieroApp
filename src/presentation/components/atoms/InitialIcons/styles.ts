import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GrayscaleG04,
    padding: RFValue(15),
    borderRadius: RFValue(50),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.Black,
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
});
