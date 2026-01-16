import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//bringing in tailwindcss
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Allow Vite to treat GLB assets as static files instead of code
  assetsInclude: ['**/*.glb'],
  // Ensure CommonJS deps like prop-types are pre-optimized correctly
  optimizeDeps: {
    include: ['prop-types'],
  },
  // Force prop-types resolution path to avoid esbuild resolver edge cases
  resolve: {
    alias: {
      'prop-types': path.resolve(__dirname, 'node_modules/prop-types/index.js'),
    },
  },
})
