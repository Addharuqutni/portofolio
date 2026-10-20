import { defineConfig } from 'vite'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Dev server menyajikan index.html untuk /proyek, meniru rewrite Vercel.
// Fallback itu juga menelan URL folder statis (/design/x/), jadi arahkan dulu
// ke index.html miliknya bila ada. Preview & Vercel sudah benar tanpa ini.
const publicDirs = {
  name: 'serve-public-dir-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url.endsWith('/') && existsSync(join(server.config.publicDir, req.url, 'index.html'))) {
        req.url += 'index.html'
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss(), publicDirs],
  appType: 'spa',
})
