export const useGetInitials = (first: string, last: string): string => {
  const firstInitial = first?.charAt(0).toUpperCase() || "";
  const lastInitial = last?.charAt(0).toUpperCase() || "";
  return firstInitial + lastInitial;
};
