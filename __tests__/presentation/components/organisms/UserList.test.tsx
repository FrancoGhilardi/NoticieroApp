import UsersList from "@/src/presentation/components/organisms/UserList";
import * as useUsersViewModelModule from "@/src/presentation/viewModels/useUsersViewModel";
import { render } from "@testing-library/react-native";
import React from "react";

describe("UsersList", () => {
  const mockUsers = [
    {
      id: 1,
      firstname: "Franco",
      lastname: "Ghilardi",
      email: "franco@example.com",
      phone: "123456789",
      address: {
        city: "Rosario",
        geo: { lat: "0", lng: "0" },
        street: "Mitre",
        suite: "A",
        zipcode: "2000",
      },
      birthDate: "1990-01-01",
      company: { bs: "", catchPhrase: "", name: "ACME" },
      login: {
        md5: "",
        password: "",
        registered: "",
        sha1: "",
        username: "",
        uuid: "",
      },
      website: "example.com",
    },
    {
      id: 2,
      firstname: "Maria",
      lastname: "Lopez",
      email: "maria@example.com",
      phone: "987654321",
      address: {
        city: "CABA",
        geo: { lat: "0", lng: "0" },
        street: "Rivadavia",
        suite: "B",
        zipcode: "1000",
      },
      birthDate: "1985-05-05",
      company: { bs: "", catchPhrase: "", name: "Globant" },
      login: {
        md5: "",
        password: "",
        registered: "",
        sha1: "",
        username: "",
        uuid: "",
      },
      website: "maria.com",
    },
  ];

  beforeEach(() => {
    jest.spyOn(useUsersViewModelModule, "default").mockReturnValue({
      users: mockUsers,
    });
  });

  it("debería renderizar tantos UserCard como usuarios haya en la lista", () => {
    const { getAllByTestId } = render(<UsersList />);

    const userCards = getAllByTestId("User-card-container");

    expect(userCards.length).toBe(mockUsers.length);
  });
});
