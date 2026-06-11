import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows: import chefImg from '@/assets/about/chef.png'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
