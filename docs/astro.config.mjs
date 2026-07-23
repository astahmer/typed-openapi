import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lucode from "lucode-starlight";

const normalizeBase = (value) => {
  const path = value ?? "/";
  return `/${path}`.replace(/\/+/g, "/").replace(/([^/])$/, "$1/");
};

const base = normalizeBase(process.env.DOCS_BASE ?? process.env.ASTRO_BASE);

export default defineConfig({
  base,
  integrations: [
    starlight({
      title: "typed-openapi",
      description: "Generate a type-safe TypeScript API client from an OpenAPI document.",
      favicon: "/favicon.png",
      social: [
        {
          icon: "github",
          label: "typed-openapi on GitHub",
          href: "https://github.com/astahmer/typed-openapi",
        },
        {
          icon: "twitter",
          label: "astahmer on Twitter",
          href: "https://x.com/astahmer_dev",
        },
        {
          icon: "blueSky",
          label: "astahmer on Bluesky",
          href: "https://bsky.app/profile/astahmer.dev",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/astahmer/typed-openapi/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      plugins: [
        lucode({
          navLinks: [
            { label: "Docs", link: "/getting-started/" },
            { label: "Playground", link: "/playground/" },
            { label: "GitHub", link: "https://github.com/astahmer/typed-openapi" },
            { label: "astahmer.dev", link: "https://www.astahmer.dev/" },
          ],
          footerText: "Open-source, type-safe OpenAPI clients for TypeScript.",
        }),
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: "Start here",
          items: ["getting-started", "configuration", "advanced/filtering-and-schema-naming", "playground", "ai"],
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
          items: [
            "advanced/output-shape",
            "advanced/openapi-support",
            "advanced/schema-naming",
            "advanced/library-api",
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
