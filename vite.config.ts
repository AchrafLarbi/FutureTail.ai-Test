import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Split chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          heroui: ['@heroui/react'],
        },
      },
    },
  },
})
