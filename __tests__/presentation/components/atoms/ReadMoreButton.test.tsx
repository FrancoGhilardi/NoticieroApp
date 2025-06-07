import ReadMoreButton from "@/src/presentation/components/atoms/ReadMoreButton";
import { fireEvent, render } from "@testing-library/react-native";

describe("ReadMoreButton", () => {
  it("debe renderizar el botón con el texto y el ícono", () => {
    const { getByTestId } = render(<ReadMoreButton onPress={() => {}} />);

    const button = getByTestId("Button-read-more");
    const text = getByTestId("Text-read-more");
    const icon = getByTestId("Icon-chevron-foward");

    expect(button).toBeTruthy();
    expect(text.props.children).toBe("Leer más");
    expect(icon).toBeTruthy();
  });

  it("debe llamar a onPress cuando se presiona el botón", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<ReadMoreButton onPress={onPressMock} />);

    fireEvent.press(getByTestId("Button-read-more"));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
