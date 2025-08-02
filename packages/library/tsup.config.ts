import { defineConfig } from "tsup";

export default defineConfig((options) => {
  const isWatch = options.watch;

  return {
    entry: ["src/index.ts", "src/better-auth/index.ts"],
    format: ["esm"],
    dts: isWatch
      ? false
      : {
          resolve: true,
          compilerOptions: {
            skipLibCheck: true,
            declaration: true,
            emitDeclarationOnly: false,
          },
          exclude: ["src/app.d.ts", "src/**/*.test.ts", "src/**/*.spec.ts"],
        },
    clean: true,
    outDir: "dist",
    splitting: false,
    sourcemap: true,
    external: ["@sveltejs/kit", "better-auth", "nodemailer"],
    ignoreWatch: ["src/app.d.ts", "dist/**"],
  };
});
