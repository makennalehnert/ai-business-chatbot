import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Make all built asset paths relative so manual uploads (Hostinger public_html) work
  base: './',
  plugins: [react()],
})
