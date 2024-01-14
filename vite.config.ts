import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: "src/*",
      exclude: ["node_modules", "src/__tests__"],
      extension: [".js", ".ts", ".vue"],
      requireEnv: true,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
});
