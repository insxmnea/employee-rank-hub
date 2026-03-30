import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@app",
        replacement: "/src/app",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@widgets",
        replacement: "/src/widgets",
      },
      {
        find: "@features",
        replacement: "/src/features",
      },
      {
        find: "@entities",
        replacement: "/src/entities",
      },
      {
        find: "@shared",
        replacement: "/src/shared",
      },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("http://localhost:5000"),
  },
});
