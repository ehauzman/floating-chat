import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const isLib = process.env.LIB_BUILD === "true";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  publicDir: isLib ? false : resolve(__dirname, "public"),
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "~demo": resolve(__dirname, "demo"),
    },
  },
  root: isLib ? __dirname : resolve(__dirname, "demo"),
  build: isLib
    ? {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "FloatingChat",
          formats: ["es", "cjs"],
          fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      }
    : {
        outDir: resolve(__dirname, "demo/dist"),
      },
});
