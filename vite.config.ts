import { fileURLToPath } from 'url'

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const PREFIX_ENV = ''

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), PREFIX_ENV)
  //define env
  const { PORT } = env

  return {
    plugins: [legacy(), react()],
    resolve: {
      alias: {
        // for TypeScript path alias import like : @/x/y/z
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      port: Number(PORT) || 3000,
    },
    build: {
      outDir: 'build',
    },
  }
})
