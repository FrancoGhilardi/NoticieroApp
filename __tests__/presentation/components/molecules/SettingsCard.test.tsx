import SettingsCard from "@/src/presentation/components/molecules/SettingsCard";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("SettingsCard", () => {
  const label = "Título de la tarjeta";

  it("debería renderizar el contenedor y el texto con el label correcto", () => {
    const { getByTestId, getByText } = render(
      <SettingsCard label={label}>
        <Text>Contenido hijo</Text>
      </SettingsCard>
    );

    const container = getByTestId("Setting-card-container");
    const labelText = getByTestId("Setting-card-text");

    expect(container).toBeTruthy();
    expect(labelText).toBeTruthy();
    expect(labelText.props.children).toBe(label);
    expect(getByText("Contenido hijo")).toBeTruthy();
  });

  it("debería renderizar correctamente los children recibidos", () => {
    const { getByText } = render(
      <SettingsCard label={label}>
        <Text testID="child-text">Texto hijo de prueba</Text>
      </SettingsCard>
    );

    expect(getByText("Texto hijo de prueba")).toBeTruthy();
  });
});
