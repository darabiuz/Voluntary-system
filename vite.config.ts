import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@help": path.resolve(__dirname, "src/help"),
      "@safeApi": path.resolve(__dirname, "src/safe-api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@routes": path.resolve(__dirname, "src/routes")
    }
  }
})
