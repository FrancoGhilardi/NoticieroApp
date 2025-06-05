import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../../../domain/entities/User";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { firstname, lastname, email, phone } = user;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {firstname} {lastname}
      </Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: "#FFF",
    borderRadius: 8,
    elevation: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserCard;
