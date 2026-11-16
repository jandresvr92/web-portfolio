import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { detectLang } from "@/lib/i18n/detectLang";
import { LANGUAGES } from "@/lib/i18n/dictionaries";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  // The visitor's language (toggle cookie, else browser), resolved per request
  // so the server renders the page in it. Pages read it from here.
  loader: () => ({ lang: detectLang() }),
  // Per-page <title>/meta come from each route's head(); this is the shared base.
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jaime Andrés Dev - Frontend Analyst" },
      {
        name: "description",
        content:
          "Portafolio de Jaime Andrés Vélez Rojas, Frontend Analyst: interfaces web, integraciones backend y flujos automatizados.",
      },
      { name: "author", content: "Jaime Andrés Vélez Rojas" },
      { name: "theme-color", content: "#09090b" },
      { name: "color-scheme", content: "dark" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:title", content: "Jaime Andrés Dev - Frontend Analyst" },
      {
        property: "og:description",
        content: "Portafolio de Jaime Andrés Vélez Rojas, Frontend Analyst.",
      },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
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
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
