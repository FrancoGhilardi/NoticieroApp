import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const buildStyles = (selected: boolean) =>
  StyleSheet.create({
    button: {
      padding: RFValue(8),
      borderWidth: RFValue(1),
      borderRadius: RFValue(5),
      borderColor: Colors.GrayscaleG05,
      backgroundColor: selected ? Colors.Black : Colors.GrayscaleG03,
      marginBottom: RFValue(10),
    },
    text: {
      fontSize: RFValue(13),
      color: selected ? Colors.GrayscaleG02 : Colors.Black,
      fontWeight: "bold",
    },
  });
