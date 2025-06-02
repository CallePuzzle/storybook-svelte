# Storybook Svelte library

This is a Storybook and Svelte library for Callepuzzle's projects.

The goal is to create a shared (or core) UI library to streamline development, making it faster and more efficient.

The project uses [bun](https://bun.sh/docs/installation) as a runtime environment.

```sh
bun install
bun storybook
```

## TursoDB

```sh
turso dev --db-file dev.db

npx prisma migrate diff \
            --from-empty \
            --to-schema-datamodel ./prisma/schema.prisma \
            --script \
            --output prisma/migrations/0001_initial.sql

turso db shell http://127.0.0.1:8080 < prisma/migrations/0001_initial.sql
```
