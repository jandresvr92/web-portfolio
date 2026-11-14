# jandres-portfolio

Isometric 3D portfolio of Jaime Andrés Vélez Rojas. Built with [TanStack Start](https://tanstack.com/start) (React 19, plain JavaScript), Tailwind CSS and Framer Motion. Pages are server-rendered, and the site is deployed on Vercel.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # Nitro → .output/ (Node server)
npm run preview    # serve that build locally
npm run lint
```

## Deploy to Vercel

Import the repository in Vercel. The default settings work as-is: Nitro detects Vercel during the build and writes `.vercel/output/`, so there is no `vercel.json`, and you don't need to set a build command or output directory. To test the Vercel output locally, run `NITRO_PRESET=vercel npm run build`.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/routes/__root.jsx` | The HTML document (`<html>`, `<head>`, base meta tags). There is no `index.html`. |
| `src/routes/index.jsx` | The only page (`/`): boot sequence + the map |
| `src/components/core/topology/` | Desktop map: node layout (`layout.js`), billboards, cables, detail view |
| `src/components/core/mobile/` | Mobile column and node sheets |
| `src/components/core/{profile,projects,stack,experience,hobbies}/` | Each section's panel and its data (`*Data.js`, copy in es/en/de) |
| `src/lib/i18n/` | Language provider and shared strings |
| `src/lib/TopologyContext.jsx` | Hovered / opened node shared by the map and the director hub |
| `public/images/`, `public/cv/` | Room artwork, avatar and the downloadable CV |

Keep static files outside `public/assets/`. Vite writes its hashed bundles there, and Vercel caches that path for a year.
