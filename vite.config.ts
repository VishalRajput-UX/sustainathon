import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('ipv4first')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.MOV', '**/*.mov'],
  server: {
    host: true,
    strictPort: false
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap-vendor': ['gsap'],
          'framer-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  }
})
