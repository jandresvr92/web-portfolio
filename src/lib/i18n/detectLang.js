import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import { LANG_COOKIE, pickLang, readLangCookie } from "./lang";

// Language for the page being rendered. On the server it reads the request, so
// the HTML (and the boot terminal's first frame) already comes in the
// visitor's language and hydration matches it. On the client, for in-app
// navigations, it reads the same signals from the browser.
export const detectLang = createIsomorphicFn()
  .server(() => {
    // The HTML now depends on these headers: keep shared caches from serving
    // one visitor's language to another.
    setResponseHeader("Vary", "Accept-Language, Cookie");
    return pickLang({
      cookie: getCookie(LANG_COOKIE),
      acceptLanguage: getRequestHeader("accept-language"),
    });
  })
  .client(() =>
    pickLang({
      cookie: readLangCookie(),
      acceptLanguage: navigator.languages?.join(",") || navigator.language,
    })
  );
