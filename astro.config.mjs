// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.multiversecomputing.com",
  integrations: [
    starlight({
      title: "Multiverse",
      logo: {
        src: "./src/assets/multiverse-logo.png",
        replacesTitle: true,
      },
      customCss: [
        "./src/styles/global.css",
        "./src/styles/fonts.css",
        "@fontsource-variable/jetbrains-mono",
      ],
      social: [
        {
          icon: "youtube",
          label: "Youtube",
          href: "https://www.youtube.com/@multiversecomputing",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      favicon: "favicon.ico",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
