import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";
import lucode from "lucode-starlight";

const normalizeBase = (value) => {
  const path = value ?? "/";
  return `/${path}`.replace(/\/+/g, "/").replace(/([^/])$/, "$1/");
};

const base = normalizeBase(process.env.DOCS_BASE ?? process.env.ASTRO_BASE);
const site = process.env.SITE_URL ?? "https://typed-openapi-docs.vercel.app";
const withBase = (path) => `${base}${path.replace(/^\//, "")}`;
const socialAsset = (path) => (site ? new URL(withBase(path), site).href : withBase(path));

export default defineConfig({
  base,
  site,
  output: "server",
  // Keep Starlight pages prerendered for Pagefind; Vercel edge middleware handles negotiation before delivery.
  adapter: vercel({ middlewareMode: "edge" }),
  integrations: [
    starlight({
      title: "typed-openapi",
      description: "Generate a type-safe TypeScript API client from an OpenAPI document.",
      favicon: "favicon.png",
      head: [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "typed-openapi",
            description: "Generate type-safe TypeScript clients, runtime validators, and typed API integrations from OpenAPI documents.",
            url: site,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            sameAs: [
              "https://github.com/astahmer/typed-openapi",
              "https://www.npmjs.com/package/typed-openapi",
            ],
          }),
        },
        { tag: "meta", attrs: { property: "og:image", content: socialAsset("og-docs.png") } },
        { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
        { tag: "meta", attrs: { name: "twitter:image", content: socialAsset("og-docs.png") } },
      ],
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
            { label: "Docs", link: withBase("getting-started/") },
            { label: "Playground", link: withBase("playground/") },
            { label: "GitHub", link: "https://github.com/astahmer/typed-openapi" },
            { label: "astahmer.dev", link: "https://www.astahmer.dev/" },
          ],
          footerText: "Open-source, type-safe OpenAPI clients for TypeScript.",
        }),
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      prerender: true,
      sidebar: [
        {
          label: "Start here",
          items: ["getting-started", "configuration", "advanced/filtering-and-schema-naming", "playground", "ai", "developer-resources"],
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
