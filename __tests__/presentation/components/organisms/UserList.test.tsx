import UsersList from "@/src/presentation/components/organisms/UserList";
import { render } from "@testing-library/react-native";
import React from "react";

jest.mock("@/src/presentation/viewModels/useUsersViewModel", () => () => ({
  users: [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@example.com",
      phone: "123-456-7890",
      username: "juanp",
      website: "juan.com",
      address: {
        city: "Buenos Aires",
        street: "Calle Falsa",
        suite: "Apt. 123",
        zipcode: "1234",
        geo: { lat: "0", lng: "0" },
      },
      company: {
        name: "Empresa SA",
        bs: "negocios",
        catchPhrase: "Hacemos cosas",
      },
    },
    {
      id: 2,
      name: "Ana López",
      email: "ana@example.com",
      phone: "987-654-3210",
      username: "anal",
      website: "ana.com",
      address: {
        city: "Córdoba",
        street: "Otra Calle",
        suite: "Depto. B",
        zipcode: "5678",
        geo: { lat: "1", lng: "1" },
      },
      company: {
        name: "Compañía SRL",
        bs: "servicios",
        catchPhrase: "Conectamos personas",
      },
    },
  ],
}));

describe("UsersList", () => {
  it("renderiza correctamente los usuarios", () => {
    const { getAllByTestId } = render(<UsersList />);

    const containers = getAllByTestId("User-card-container");
    expect(containers).toHaveLength(2);

    const names = getAllByTestId("User-card-name").map(
      (el) => el.props.children
    );
    expect(names).toEqual(["Juan Pérez", "Ana López"]);

    const emails = getAllByTestId("User-card-email").map(
      (el) => el.props.children
    );
    expect(emails).toEqual(["juan@example.com", "ana@example.com"]);

    const phones = getAllByTestId("User-card-phone").map(
      (el) => el.props.children
    );
    expect(phones).toEqual(["123-456-7890", "987-654-3210"]);
  });
});
