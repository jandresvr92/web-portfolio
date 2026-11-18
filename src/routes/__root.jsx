import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { detectLang } from "@/lib/i18n/detectLang";
import { DICTS, LANGUAGES } from "@/lib/i18n/dictionaries";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import { personJsonLd } from "@/lib/seo";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  // The visitor's language (toggle cookie, else browser), resolved per request
  // so the server renders the page in it. Pages read it from here.
  loader: () => ({ lang: detectLang() }),
  // Base <title>/meta in the visitor's language (the same one the page renders
  // in). A route can override them from its own head().
  head: ({ loaderData }) => {
    const { meta } = DICTS[loaderData?.lang] ?? DICTS[LANGUAGES[0]];
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: meta.title },
        { name: "description", content: meta.description },
        { name: "author", content: "Jaime Andrés Vélez Rojas" },
        { name: "theme-color", content: "#09090b" },
        { name: "color-scheme", content: "dark" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: meta.locale },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:url", content: `${SITE_URL}/` },
        { property: "og:image", content: `${SITE_URL}${OG_IMAGE.path}` },
        { property: "og:image:width", content: String(OG_IMAGE.width) },
        { property: "og:image:height", content: String(OG_IMAGE.height) },
        { property: "og:image:alt", content: meta.imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}${OG_IMAGE.path}` },
        { name: "twitter:image:alt", content: meta.imageAlt },
        // Structured data: who the site is about (schema.org Person).
        { "script:ld+json": personJsonLd({ description: meta.description }) },
      ],
      links: [
        { rel: "canonical", href: `${SITE_URL}/` },
        // favicon.ico stays at the root for clients that request it directly.
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap",
        },
        { rel: "stylesheet", href: appCss },
      ],
    };
  },
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}

// The document. There is no index.html: the server renders <html> from here.
function RootDocument({ children }) {
  // The error and not-found shells can render without loader data.
  const lang = Route.useLoaderData({ select: (data) => data?.lang }) ?? LANGUAGES[0];

  return (
    // Browser extensions (Grammarly, LanguageTool…) add attributes to <html> and
    // <body> before hydration. This ignores those two elements' own attributes
    // only; mismatches deeper in the tree are still reported.
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
