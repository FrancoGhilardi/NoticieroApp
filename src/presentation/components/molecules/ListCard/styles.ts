import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(18),
    borderWidth: 1,
    borderColor: Colors.GrayscaleG05,
    padding: RFValue(8),
    borderRadius: RFValue(8),
  },
  image: {
    width: "100%",
    height: RFValue(180),
    borderRadius: RFValue(8),
  },
  title: {
    fontWeight: "bold",
    fontSize: RFValue(16),
    marginVertical: RFValue(8),
    color: Colors.Black,
  },
  content: { color: Colors.GrayscaleG07, fontSize: RFValue(12) },
});
