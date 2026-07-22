import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "typed-openapi",
      description: "Generate a type-safe TypeScript API client from an OpenAPI document.",
      social: [
        {
          icon: "github",
          label: "typed-openapi on GitHub",
          href: "https://github.com/astahmer/typed-openapi",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/astahmer/typed-openapi/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: "Start here",
          items: ["getting-started", "configuration", "playground"],
        },
        {
          label: "Clients",
          items: [{ autogenerate: { directory: "clients" } }],
        },
        {
          label: "Validation",
          items: [{ autogenerate: { directory: "validation" } }],
        },
        {
          label: "Integrations",
          items: [{ autogenerate: { directory: "integrations" } }],
        },
        {
          label: "Advanced generation",
          items: [{ autogenerate: { directory: "advanced" } }],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
