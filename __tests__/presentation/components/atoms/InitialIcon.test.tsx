import * as getInitialsModule from "@/src/core/utils/getInitials";
import InitialIcon from "@/src/presentation/components/atoms/InitialIcons";
import { render } from "@testing-library/react-native";
import React from "react";

describe("InitialIcon", () => {
  const firstname = "Franco";
  const lastname = "Ghilardi";

  it("debería renderizar el componente con el contenedor y el texto", () => {
    const { getByTestId } = render(
      <InitialIcon firstname={firstname} lastname={lastname} />
    );

    const container = getByTestId("Initial-icon-container");
    const text = getByTestId("Initial-icon-text");

    expect(container).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it("debería mostrar las iniciales correctas calculadas por getInitials", () => {
    const initials = "FG";
    jest.spyOn(getInitialsModule, "getInitials").mockReturnValue(initials);

    const { getByTestId } = render(
      <InitialIcon firstname={firstname} lastname={lastname} />
    );

    expect(getByTestId("Initial-icon-text").props.children).toBe(initials);
    expect(getInitialsModule.getInitials).toHaveBeenCalledWith(
      firstname,
      lastname
    );
  });

  it("debería manejar nombres vacíos correctamente", () => {
    jest.spyOn(getInitialsModule, "getInitials").mockReturnValue("");

    const { getByTestId } = render(<InitialIcon firstname="" lastname="" />);

    expect(getByTestId("Initial-icon-text").props.children).toBe("");
  });
});
