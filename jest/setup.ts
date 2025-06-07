import { News } from "@/src/domain/entities/News";
import { User } from "@/src/domain/entities/User";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
}));

jest.mock("@/src/data/services/userService");

jest.mock("@/src/data/services/newsService", () => ({
  fetchNews: jest.fn(),
}));

jest.mock("@/src/core/utils/getInitials", () => ({
  getInitials: (name: string) => {
    return name === "Franco Ghilardi" ? "FG" : "??";
  },
}));

export const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "123-456-7890",
    username: "juanp",
    website: "juan.com",
    address: {
      city: "Buenos Aires",
      street: "Calle Falsa",
      suite: "Apt. 123",
      zipcode: "1234",
      geo: { lat: "0", lng: "0" },
    },
    company: {
      name: "Empresa SA",
      bs: "negocios",
      catchPhrase: "Hacemos cosas",
    },
  },
];

export const mockNews: News[] = [
  new News(
    1,
    "test-slug",
    "https://example.com",
    "Título de prueba",
    "Contenido de prueba",
    "https://example.com/image.jpg",
    "https://example.com/thumb.jpg",
    "published",
    "general",
    "2025-06-06T12:00:00Z",
    "2025-06-06T12:00:00Z",
    42
  ),
];
