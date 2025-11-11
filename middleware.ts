import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Lista de todos los idiomas que soportas
  locales: ["en", "es"], // Idioma por defecto si no se encuentra uno que coincida

  defaultLocale: "en",
});

export const config = {
  // Solo se ejecuta en estas rutas
  // (evita que corra en /_next, /api, /favicon.ico, etc.)
  matcher: ["/", "/(es|en)/:path*"],
};
