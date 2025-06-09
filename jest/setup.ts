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
  getInitials: jest.fn(),
}));

export const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

export const mockUsers: User[] = [
  {
    address: {
      city: "Anytown",
      geo: { lat: "0", lng: "0" },
      street: "123 Main Street",
      suite: "Apt. 4",
      zipcode: "12345-6789",
    },
    birthDate: "1973-01-22",
    company: {
      bs: "Marketing",
      catchPhrase: "Innovative solutions for all your needs",
      name: "ABC Company",
    },
    email: "johndoe@example.com",
    firstname: "John",
    id: 1,
    lastname: "Doe",
    login: {
      md5: "c1328472c5794a25723600f71c1b4586",
      password: "jsonplaceholder.org",
      registered: "2023-01-10T10:03:20.022Z",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      username: "johndoe",
      uuid: "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
    },
    phone: "(555) 555-1234",
    website: "www.johndoe.com",
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
