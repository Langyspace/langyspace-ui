import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { styledComponentsBuild } from './scripts/styled-components-build.mjs'

export default defineConfig({
  plugins: [styledComponentsBuild(), react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-hook-form',
        'react/jsx-runtime',
        'styled-components',
      ],
    },
  },
})
