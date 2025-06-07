/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-expo|expo-modules-core|expo|react-native|@react-native|@react-navigation|react-native-responsive-fontsize|react-native-iphone-x-helper)/)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    //useCases
    "src/domain/useCases/GetListNews.ts",
    "src/domain/useCases/GetUserList.ts",
    //repositories
    "src/data/repositories/NewsImplementation.ts",
    "src/data/repositories/UserImplementation.ts",
    //storage
    "src/core/storage/favoritesStorage.ts",
    "src/core/storage/languagesStorage.ts",
    //state
    "src/state/favoriteState.ts",
    //viewModels
    "src/presentation/viewModels/useNewsViewModel.ts",
    //atoms
    "src/presentation/components/atoms/FavIconButton/index.tsx",
    "src/presentation/components/atoms/InitialIcons/index.tsx",
    "src/presentation/components/atoms/ReadMoreButton/index.tsx",
    "src/presentation/components/atoms/Sercher/index.tsx",
    "src/presentation/components/atoms/SettingsOptions/index.tsx",
    "src/presentation/components/atoms/ErrorLoad/index.tsx",
    //molecules
    "src/presentation/components/molecules/ListCard/index.tsx",
    "src/presentation/components/molecules/SettingsCard/index.tsx",
    "src/presentation/components/molecules/UserCard/index.tsx",
    //organisms
    "src/presentation/components/organisms/ErrorBoundary.tsx",
    "src/presentation/components/organisms/NewsList.tsx",
    "src/presentation/components/organisms/UserList.tsx",
  ],
  coverageReporters: ["text", "lcov", "json-summary"],
  setupFiles: ["<rootDir>/jest/setup.ts"],
  moduleNameMapper: {
    "^@expo/vector-icons$": "<rootDir>/__mocks__/@expo/vector-icons.ts",
    "^react-i18next$": "<rootDir>/__mocks__/react-i18next.ts",
  },
};
