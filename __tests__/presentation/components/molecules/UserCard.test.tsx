import { mockUsers } from "@/jest/setup";
import UserCard from "@/src/presentation/components/molecules/UserCard";
import { render } from "@testing-library/react-native";
import React from "react";

const fakeUser = mockUsers[0];

describe("UserCard", () => {
  it("debería renderizar correctamente los datos del usuario y el InitialIcon", () => {
    const { getByTestId, getByText } = render(<UserCard user={fakeUser} />);

    expect(getByTestId("User-card-container")).toBeTruthy();

    expect(getByTestId("User-card-container-text")).toBeTruthy();

    expect(getByTestId("User-card-name").props.children).toBe(fakeUser.name);
    expect(getByTestId("User-card-email").props.children).toBe(fakeUser.email);
    expect(getByTestId("User-card-phone").props.children).toBe(fakeUser.phone);

    expect(getByText(fakeUser.name)).toBeTruthy();
    expect(getByText(fakeUser.email)).toBeTruthy();
    expect(getByText(fakeUser.phone)).toBeTruthy();

    expect(getByTestId("Initial-icon-container")).toBeTruthy();
  });
});
