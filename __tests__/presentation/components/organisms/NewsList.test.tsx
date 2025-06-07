import NewsList from "@/src/presentation/components/organisms/NewsList";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

jest.mock("@/src/presentation/viewModels/useNewsViewModel", () => ({
  useNewsViewModel: () => ({
    query: "noticia",
    setQuery: jest.fn(),
    news: [
      {
        id: 1,
        slug: "slug-1",
        url: "https://example.com/noticia-1",
        title: "Noticia Uno",
        content: "Contenido de la noticia uno",
        image: "https://example.com/image-1.jpg",
        thumbnail: "https://example.com/thumb-1.jpg",
        status: "published",
        section: "actualidad",
        createdAt: "2025-06-06T10:00:00Z",
        updatedAt: "2025-06-06T10:00:00Z",
        order: 1,
      },
      {
        id: 2,
        slug: "slug-2",
        url: "https://example.com/noticia-2",
        title: "Noticia Dos",
        content: "Contenido de la noticia dos",
        image: "https://example.com/image-2.jpg",
        thumbnail: "https://example.com/thumb-2.jpg",
        status: "published",
        section: "política",
        createdAt: "2025-06-06T11:00:00Z",
        updatedAt: "2025-06-06T11:00:00Z",
        order: 2,
      },
    ],
  }),
}));

describe("NewsList", () => {
  it("debería renderizar el input de búsqueda y la lista de noticias", () => {
    const { getByTestId, getAllByTestId } = render(<NewsList />);
    const input = getByTestId("Text-input");
    expect(input).toBeTruthy();
    const cards = getAllByTestId("ListCard-container");
    expect(cards.length).toBe(2);
  });

  it("debería permitir cambiar el texto del input", () => {
    const { getByTestId } = render(<NewsList />);
    const input = getByTestId("Text-input");
    fireEvent.changeText(input, "react native");
    expect(input.props.value).toBe("noticia");
  });
});
