// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.compactif.ai",
  integrations: [
    starlight({
      title: "CompactifAI API",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Hoooman-Studio/multiverse-docs",
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
      customCss: ["./src/styles/fonts.css", "./src/styles/global.css"],
      favicon: "favicon.svg",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
