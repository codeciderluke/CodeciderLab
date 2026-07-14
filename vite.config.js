import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site under /CodeciderLab/ — set VITE_BASE in CI
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
