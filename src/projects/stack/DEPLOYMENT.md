# Macrofrontend monorepo

This monorepo contains three independently runnable projects:

- `host` is the Next.js shell: it provides the shared sidebar and routes.
- `apps/react` is a standalone React + Vite application.
- `apps/vue` is a standalone Vue + Vite application.

The host displays each application in an iframe. Each project has its own
dependencies, dev server, and production build. The iframe boundary also
isolates styles and client-side runtimes.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The React app runs on `http://localhost:5173`,
and the Vue app runs on `http://localhost:5174`. The `dev` command starts all
three servers.

## Build and type-check

```sh
npm run typecheck
npm run build:all
```

To run or build one app independently, use npm workspaces:

```sh
npm run dev --workspace=@macrofrontend/react-app
npm run dev --workspace=@macrofrontend/vue-app
npm run build --workspace=@macrofrontend/host
```

## Deploy to Vercel

Import this repository into Vercel three times, creating one Vercel project per
application. For each project, set the **Root Directory** to the path below
(relative to the repository root):

| Vercel project | Root Directory | Framework |
| --- | --- | --- |
| Host | `src/projects/macrofrontend/host` | Next.js |
| React | `src/projects/macrofrontend/apps/react` | Vite |
| Vue | `src/projects/macrofrontend/apps/vue` | Vite |

Each project has its own `vercel.json` and npm lockfile, so Vercel can install
and build it independently of the repository's pnpm workspace. You can also
link multiple Vercel projects from the Git repository root with
`vercel link --repo`.

After deploying the React and Vue projects, add these environment variables to
the **Host** Vercel project for Production (and Preview if needed):

- `NEXT_PUBLIC_REACT_APP_URL` — deployed React project URL, including `https://`
- `NEXT_PUBLIC_VUE_APP_URL` — deployed Vue project URL, including `https://`

Redeploy Host after setting the URLs. Vercel project IDs and `.vercel` link
files are created by `vercel link` or the Vercel dashboard and should not be
committed to the repository.

The child projects allow iframe embedding from any origin for this demo.
Replace `frame-ancestors *` in their `vercel.json` files with the deployed Host
origin when restricting production embeds.
