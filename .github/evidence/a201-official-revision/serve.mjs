import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { styledComponentsBuild } from '../../../scripts/styled-components-build.mjs'
const server = await createServer({
  configFile: false,
  root: process.cwd(),
  plugins: [styledComponentsBuild(), react()],
  define: {
    __MATERIAL_SOURCE_COMMIT__: JSON.stringify(
      'cfc558ed36d4ffaacb4d43854961a15cc10b3581',
    ),
  },
  cacheDir: '.github/evidence/a201-official-revision/vite-cache',
  server: { host: '127.0.0.1', port: 6066, strictPort: true },
})
await server.listen()
console.log('A201 private source preview:6066')
