import { Colors } from "@/src/core/theme/Colors";
import SettingsOptions from "@/src/presentation/components/atoms/SettingsOptions";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("SettingsOptions", () => {
  it("debe renderizar el label correctamente", () => {
    const { getByTestId } = render(
      <SettingsOptions onPress={() => {}} label="Tema Claro" selected={false} />
    );

    const text = getByTestId("text-setting-options");
    expect(text.props.children).toBe("Tema Claro");
  });

  it("debe aplicar estilos correctos cuando selected=true", () => {
    const { getByTestId } = render(
      <SettingsOptions onPress={() => {}} label="Oscuro" selected={true} />
    );

    const button = getByTestId("Button-setting-options");
    const text = getByTestId("text-setting-options");

    expect(button.props.style.backgroundColor).toBe(Colors.Black);
    expect(text.props.style.color).toBe(Colors.GrayscaleG02);
  });

  it("debe aplicar estilos correctos cuando selected=false", () => {
    const { getByTestId } = render(
      <SettingsOptions onPress={() => {}} label="Claro" selected={false} />
    );

    const button = getByTestId("Button-setting-options");
    const text = getByTestId("text-setting-options");

    expect(button.props.style.backgroundColor).toBe(Colors.GrayscaleG03);
    expect(text.props.style.color).toBe(Colors.Black);
  });

  it("debe llamar a onPress al hacer tap", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <SettingsOptions onPress={onPressMock} label="Claro" selected={false} />
    );

    fireEvent.press(getByTestId("Button-setting-options"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
