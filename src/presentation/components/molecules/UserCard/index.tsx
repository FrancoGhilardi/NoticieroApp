import React from "react";
import { Text, View } from "react-native";
import { User } from "../../../../domain/entities/User";
import InitialIcon from "../../atoms/InitialIcons";
import { styles } from "./styles";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { firstname, lastname, email, phone } = user;
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {firstname} {lastname}
        </Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
      <InitialIcon first={firstname} last={lastname} />
    </View>
  );
};

export default UserCard;
