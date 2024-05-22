import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/*", // Adjust the base path if your app is hosted in a subdirectory
  build: {
    assetsDir: "assets", // Ensure assets are placed in the 'assets' directory
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]", // Configure asset filenames
      },
    },
  },
});
