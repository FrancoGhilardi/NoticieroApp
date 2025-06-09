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
    <View style={styles.card} testID="User-card-container">
      <View testID="User-card-container-text">
        <Text style={styles.name} testID="User-card-name">
          {firstname} {lastname}
        </Text>
        <Text style={styles.email} testID="User-card-email">
          {email}
        </Text>
        <Text style={styles.phone} testID="User-card-phone">
          {phone}
        </Text>
      </View>
      <InitialIcon firstname={firstname} lastname={lastname} />
    </View>
  );
};

export default UserCard;
