import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alacarte: resolve(__dirname, 'alacarte.html'),
        halfpension: resolve(__dirname, 'halfpension.html'),
        drinks: resolve(__dirname, 'drinks.html'),
        lunch: resolve(__dirname, 'lunch.html'),
        impressie: resolve(__dirname, 'impressie.html'),
        juridisch: resolve(__dirname, 'juridisch.html'),
      }
    }
  }
})
