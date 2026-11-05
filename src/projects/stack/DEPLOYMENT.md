# Stack applications

The repository root is the pnpm/Turbo monorepo. `src/projects/mzhvv` hosts both
the main page and the Stack routes in one Next.js app, so `/` and `/stack` share
the same layout. Stack's dashboard and application pages are sourced from
`src/projects/stack/host`; React, Vue, and Angular remain separate workspaces and
are embedded in iframes.

## Run locally

From the repository root:

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000/` for the main page and `http://localhost:3000/stack`
for the Stack dashboard. React, Vue, and Angular run on ports `5173`, `5174`, and
`5175`.

## Build, type-check, and test

```sh
pnpm build
pnpm typecheck
pnpm test
```

Set `NEXT_PUBLIC_REACT_APP_URL`, `NEXT_PUBLIC_VUE_APP_URL`, and
`NEXT_PUBLIC_ANGULAR_APP_URL` on the `mzhvv` app to the corresponding deployed
application URLs. Child apps allow iframe embedding from any origin for this
demo; restrict `frame-ancestors` in their `vercel.json` files for production.
