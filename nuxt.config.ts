import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "description",
          content: "Auto paginated job information display system",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          ref: "/favicon.ico",
        },
      ],
    },
  },
  css: ["~/assets/scss/index.scss"],
});
