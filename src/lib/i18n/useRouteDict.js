import { rootRouteId, useRouterState } from "@tanstack/react-router";
import { DICTS, LANGUAGES } from "./dictionaries";

// Strings for screens that render outside I18nProvider (the 404 and error
// boundaries): the language comes from the root loader, as for the page.
export function useRouteDict() {
  const lang = useRouterState({
    select: (state) => state.matches.find((match) => match.routeId === rootRouteId)?.loaderData?.lang,
  });
  return DICTS[lang] ?? DICTS[LANGUAGES[0]];
}
