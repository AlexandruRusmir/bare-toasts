import { defineConfig } from "tsup";

export default defineConfig({
    minify: true,
    format: ["esm"],
    entry: ["src/index.ts"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});
