import { mockNavigate, mockNews } from "@/jest/setup";
import ListCard from "@/src/presentation/components/molecules/ListCard";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn();

jest.mock("@/src/state/favoriteState", () => ({
  useFavoritesStore: jest.fn((selector) => {
    const fakeState = {
      toggleFavorite: mockToggleFavorite,
      isFavorite: mockIsFavorite,
    };
    return selector(fakeState);
  }),
}));

const fakeNewsItem = mockNews[0];

describe("ListCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debería renderizar correctamente los elementos con testID y mostrar texto", () => {
    const { getByTestId } = render(<ListCard item={fakeNewsItem} />);

    expect(getByTestId("ListCard-container")).toBeTruthy();
    expect(getByTestId("ListCard-image").props.source.uri).toBe(
      fakeNewsItem.thumbnail
    );
    expect(getByTestId("ListCard-title").props.children).toBe(
      fakeNewsItem.title
    );
    expect(getByTestId("ListCard-content").props.children).toContain(
      "Contenido de prueba"
    );
  });

  it("debería llamar toggleFavorite al presionar FavIconButton", () => {
    const { getByTestId } = render(<ListCard item={fakeNewsItem} />);
    const favButton = getByTestId("Button-Fav-Icon");
    fireEvent.press(favButton);
    expect(mockToggleFavorite).toHaveBeenCalledWith(fakeNewsItem);
  });

  it("debería navegar a NewsDetail con los datos correctos al presionar ReadMoreButton", () => {
    const { getByTestId } = render(<ListCard item={fakeNewsItem} />);

    const readMoreButton = getByTestId("Button-read-more");
    fireEvent.press(readMoreButton);

    expect(mockNavigate).toHaveBeenCalledWith("NewsDetail", {
      title: fakeNewsItem.title,
      content: fakeNewsItem.content,
      image: fakeNewsItem.image,
      publishedAt: fakeNewsItem.publishedAt,
    });
  });
});
