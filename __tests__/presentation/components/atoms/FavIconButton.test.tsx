import FavIconButton from "@/src/presentation/components/atoms/FavIconButton";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("FavIconButton", () => {
  it("debe renderizar el ícono con corazón lleno si es favorito", () => {
    const { getByTestId } = render(
      <FavIconButton onPress={() => {}} isFavorite={true} />
    );

    const iconWrapper = getByTestId("Fav-Icon");
    expect(iconWrapper).toBeTruthy();

    const icon = iconWrapper.props.children;
    expect(icon.props.name).toBe("heart");
    expect(icon.props.color).toBeDefined();
  });

  it("debe renderizar el ícono con corazón vacío si NO es favorito", () => {
    const { getByTestId } = render(
      <FavIconButton onPress={() => {}} isFavorite={false} />
    );

    const iconWrapper = getByTestId("Fav-Icon");
    const icon = iconWrapper.props.children;
    expect(icon.props.name).toBe("heart-outline");
  });

  it("debe llamar a la función onPress al tocar el botón", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <FavIconButton onPress={onPressMock} isFavorite={true} />
    );

    const button = getByTestId("Button-Fav-Icon");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
