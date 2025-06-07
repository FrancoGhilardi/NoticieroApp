export const getInitials = (name: string): string => {
  if (!name) return "";

  const trimmedName = name.trim();
  if (!trimmedName) return "";

  const parts = trimmedName.split(" ").filter(Boolean);

  const firstInitial = parts[0]?.charAt(0).toUpperCase() || "";
  const lastInitial =
    parts.length > 1 ? parts[parts.length - 1].charAt(0).toUpperCase() : "";

  return firstInitial + lastInitial;
};
