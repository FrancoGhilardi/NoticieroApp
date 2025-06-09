import { mockUsers } from "@/jest/setup";
import { User } from "@/src/domain/entities/User";
import UserCard from "@/src/presentation/components/molecules/UserCard";
import { render } from "@testing-library/react-native";
import React from "react";

describe("UserCard", () => {
  const mockUser: User = mockUsers[0];

  it("debería renderizar el contenedor y los textos con la información del usuario", () => {
    const { getByTestId } = render(<UserCard user={mockUser} />);

    const container = getByTestId("User-card-container");
    const nameText = getByTestId("User-card-name");
    const emailText = getByTestId("User-card-email");
    const phoneText = getByTestId("User-card-phone");

    expect(container).toBeTruthy();
    expect(nameText.props.children).toContain(mockUser.firstname);
    expect(nameText.props.children).toContain(mockUser.lastname);
    expect(emailText.props.children).toBe(mockUser.email);
    expect(phoneText.props.children).toBe(mockUser.phone);
  });
});
