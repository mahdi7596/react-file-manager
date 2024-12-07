import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174, // Specify the port
  },
  publicDir: false,
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.js",
      name: "ReactFileManager",
      fileName: (format) => `react-file-manager.${format}.js`,
      formats: ["es"],
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
  },
});
