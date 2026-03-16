export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string, locale = "pt-BR"): string {
  return new Date(date).toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });
}
