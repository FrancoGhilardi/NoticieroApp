import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  card: {
    padding: RFValue(16),
    margin: RFValue(8),
    backgroundColor: Colors.White,
    borderRadius: RFValue(8),
    borderWidth: RFValue(1),
    borderColor: Colors.GrayscaleG04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: RFValue(16),
    color: Colors.Black,
    marginBottom: RFValue(4),
  },
  email: {
    fontSize: RFValue(12),
    color: Colors.GrayscaleG07,
    marginBottom: RFValue(2),
  },
  phone: {
    fontSize: RFValue(12),
    color: Colors.GrayscaleG07,
  },
});
