import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    padding: RFValue(16),
  },
  image: { height: RFValue(200), borderRadius: RFValue(12) },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginVertical: RFValue(12),
    color: Colors.Black,
  },
  publishedAt: {
    color: Colors.GrayscaleG07,
    marginBottom: RFValue(8),
    fontSize: RFValue(10),
  },
  content: {
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
    color: Colors.GrayscaleG07,
  },
});
