import InitialIcon from "@/src/presentation/components/atoms/InitialIcons";
import { render } from "@testing-library/react-native";
import React from "react";

describe("InitialIcon", () => {
  it("debe renderizar el componente con el contenedor y el texto", () => {
    const { getByTestId } = render(<InitialIcon name="Franco Ghilardi" />);

    const container = getByTestId("Initial-icon-container");
    const text = getByTestId("Initial-icon-text");

    expect(container).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it("debe mostrar las iniciales correctamente", () => {
    const { getByTestId } = render(<InitialIcon name="Franco Ghilardi" />);
    const text = getByTestId("Initial-icon-text");

    expect(text.props.children).toBe("FG");
  });

  it("debe mostrar '??' si no se reconoce el nombre", () => {
    const { getByTestId } = render(<InitialIcon name="" />);
    const text = getByTestId("Initial-icon-text");

    expect(text.props.children).toBe("??");
  });
});
