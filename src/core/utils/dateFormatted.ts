import i18next from "i18next";

export const formatPublishedAt = (
  publishedAt: string,
  locale: string = i18next.language
): string => {
  try {
    const [datePart, timePart] = publishedAt.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);

    const date = new Date(year, month - 1, day, hours, minutes);

    const formattedDate = new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    const hourSuffix = locale.startsWith("es") ? "hs" : "h";

    return `${formattedDate} - ${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")} ${hourSuffix}`;
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return publishedAt;
  }
};
