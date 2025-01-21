// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-aos"],
  fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      // only resolve this font with the `google` provider
      { name: "Poppins", provider: "google" },
      // specify specific font data - this will bypass any providers
    ],
  },
  compatibilityDate: "2025-01-20",
});