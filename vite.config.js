import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['fsevents']
  },
  base: '/portfolio-website/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['fsevents']
    }
  }
})