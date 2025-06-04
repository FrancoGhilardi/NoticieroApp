import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../../../domain/entities/User";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {user.firstname} {user.lastname}
      </Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
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
