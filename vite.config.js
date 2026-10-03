import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Dev server menyajikan index.html untuk /proyek, meniru rewrite Vercel.
  appType: 'spa',
})
