import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: RFValue(10),
    top: RFValue(10),
    backgroundColor: Colors.GrayscaleG03,
    padding: RFValue(8),
    margin: RFValue(5),
    borderRadius: RFValue(10),
  },
});
