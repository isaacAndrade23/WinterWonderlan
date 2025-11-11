import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Lista de idiomas soportados
const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  // Valida que el idioma exista
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
