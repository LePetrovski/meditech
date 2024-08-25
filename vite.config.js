import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const vitePluginSass = require('vite-plugin-sass');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSass()
  ],
})
