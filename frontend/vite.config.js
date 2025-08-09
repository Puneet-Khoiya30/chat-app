import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    proxy: {
      // Proxy API calls starting with /api to backend server
      '/api': {
        target: 'http://localhost:5001', // 🔁 Change to your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: remove /api prefix
      },
      '/socket.io': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        ws: true // Enable WebSocket support
      }
    }
  }
})
