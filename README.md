# CallePuzzle Frontend Library

Libraría para crear apps frontend de CallePuzzle.

Este monorepo contiene:
- dos paquetes UI:
  - react-ui
  - sveltekit-ui

- dos demos:
  - usando el framework de astro para probar la librería de react
  - usando sveltekit

Arrancar las demos:

Desde `packages/sveltekit-ui`:
```bash
bunx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide
```

```bash
bun run db:generate
bun run db:migrate:dev
turso dev --db-file dev.db
bun run dev:sveltekit
```



Arrancar el storybook:

```bash
bun run stoybook
```
