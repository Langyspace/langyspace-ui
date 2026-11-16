import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { styledComponentsBuild } from './scripts/styled-components-build.mjs'

export default defineConfig({
  base: './',
  plugins: [styledComponentsBuild(), react()],
  build: {
    minify: 'terser',
    terserOptions: { ecma: 2020, compress: { passes: 3 } },
    lib: {
      entry: { form: 'src/form.ts', index: 'src/index.ts' },
      fileName: (_format, entryName) => `${entryName}.js`,
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
      output: { chunkFileNames: 'chunks/[name].js' },
    },
  },
})
