import { Colors } from "@/src/core/theme/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontWeight: "bold", fontSize: RFValue(20), color: Colors.Black },
});
