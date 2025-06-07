import ErrorBoundary from "@/src/presentation/components/organisms/ErrorBoundary";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("ErrorBoundary", () => {
  const ProblemChild = () => {
    throw new Error("Error for testing");
  };

  it("renderiza los hijos cuando no hay error", () => {
    render(
      <ErrorBoundary>
        <Text testID="child-text">Contenido sin error</Text>
      </ErrorBoundary>
    );

    expect(screen.getByTestId("child-text")).toBeTruthy();
    expect(screen.getByTestId("child-text").props.children).toBe(
      "Contenido sin error"
    );
  });

  it("muestra el mensaje de error por defecto cuando ocurre un error", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(getByText("Ocurrió un error inesperado.")).toBeTruthy();
    expect(getByText("Error for testing")).toBeTruthy();

    consoleErrorSpy.mockRestore();
  });

  it("muestra el fallback personalizado cuando se pasa como prop", () => {
    const fallbackText = "Fallback personalizado";

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { getByText } = render(
      <ErrorBoundary fallback={<Text>{fallbackText}</Text>}>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(getByText(fallbackText)).toBeTruthy();

    consoleErrorSpy.mockRestore();
  });
});
