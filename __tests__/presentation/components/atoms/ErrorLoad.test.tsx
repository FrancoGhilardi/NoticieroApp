import ErrorLoad from "@/src/presentation/components/atoms/ErrorLoad";
import { render } from "@testing-library/react-native";
import React from "react";

describe("ErrorLoad", () => {
  const label = "Ocurrió un error al cargar los datos";

  it("debería renderizar el componente correctamente con el texto", () => {
    const { getByTestId, getByText } = render(<ErrorLoad label={label} />);

    const container = getByTestId("Error-container");
    const text = getByTestId("Error-text");

    expect(container).toBeTruthy();
    expect(text).toBeTruthy();
    expect(getByText(label)).toBeTruthy();
  });

  it("debería mostrar el texto correcto pasado por props", () => {
    const { getByText } = render(<ErrorLoad label="Error personalizado" />);
    expect(getByText("Error personalizado")).toBeTruthy();
  });
});
