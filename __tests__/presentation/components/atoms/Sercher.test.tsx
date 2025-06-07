import Sercher from "@/src/presentation/components/atoms/Sercher";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Sercher", () => {
  it("debe renderizar el input con el placeholder traducido", () => {
    const { getByPlaceholderText } = render(
      <Sercher query="" setQuery={() => {}} />
    );

    const input = getByPlaceholderText("search_placeholder");

    expect(input).toBeTruthy();
  });

  it("debe renderizar el valor de query correctamente", () => {
    const { getByTestId } = render(
      <Sercher query="React Native" setQuery={() => {}} />
    );

    const input = getByTestId("Text-input");
    expect(input.props.value).toBe("React Native");
  });

  it("debe llamar a setQuery al escribir", () => {
    const setQueryMock = jest.fn();
    const { getByTestId } = render(
      <Sercher query="" setQuery={setQueryMock} />
    );

    const input = getByTestId("Text-input");
    fireEvent.changeText(input, "expo");

    expect(setQueryMock).toHaveBeenCalledWith("expo");
    expect(setQueryMock).toHaveBeenCalledTimes(1);
  });
});
