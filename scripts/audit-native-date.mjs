import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { chromium, webkit } from 'playwright'
import { createServer } from 'vite'

const root = resolve(process.env.NATIVE_DATE_ROOT || '.')
const phase = process.env.CAPTURE_PHASE || 'after'
const output = resolve(
  process.env.NATIVE_DATE_OUTPUT || '.github/evidence/native-date-mobile',
  phase,
)
const fixture = `import React from 'react';
import { createRoot } from 'react-dom/client';
import { TextInput } from '/src/components/Form/TextInput.tsx';
createRoot(document.getElementById('root')).render(<main style={{maxWidth:512,margin:'24px auto',padding:16,fontFamily:'sans-serif',display:'grid',gap:16}}>
<h1>Campo de data</h1>{['lg','md','sm'].map(size=><section key={size} style={{display:'grid',gap:8,minWidth:0}}><h2>{size}</h2>
<TextInput aria-label={'Referência '+size} size={size} defaultValue="Maria Alves" />
{['empty','filled','invalid','disabled'].map(state=><label key={state} style={{display:'grid',gap:4,minWidth:0}}>{state}<TextInput data-state={state} aria-label={size+' '+state} type="date" size={size} defaultValue={state==='filled'||state==='disabled'?'1994-08-21':''} aria-invalid={state==='invalid'||undefined} disabled={state==='disabled'} /></label>)}</section>)}</main>);
`
const server = await createServer({
  root,
  logLevel: 'error',
  server: { host: '127.0.0.1', port: 0 },
  plugins: [
    {
      name: 'native-date-audit-fixture',
      configureServer(vite) {
        vite.middlewares.use(async (request, response, next) => {
          if (request.url === '/__native-date') {
            response.setHeader('Content-Type', 'text/html')
            response.end(
              await vite.transformIndexHtml(
                '/__native-date',
                '<html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0}</style><body><div id="root"></div><script type="module" src="/__native-date.tsx"></script></body></html>',
              ),
            )
          } else next()
        })
      },
      resolveId(id) {
        if (id === '/__native-date.tsx')
          return resolve(root, '__native-date.tsx')
      },
      load(id) {
        if (id === resolve(root, '__native-date.tsx')) return fixture
      },
    },
  ],
})
const report = []
await mkdir(output, { recursive: true })
try {
  await server.listen()
  const origin = server.resolvedUrls.local[0]
  for (const [engine, type] of Object.entries({ chromium, webkit })) {
    const browser = await type.launch({
      executablePath:
        process.env[
          engine === 'chromium'
            ? 'BIRTH_DATE_CHROMIUM_EXECUTABLE_PATH'
            : 'BIRTH_DATE_WEBKIT_EXECUTABLE_PATH'
        ],
    })
    try {
      for (const width of [390, 768, 1440]) {
        const page = await browser.newPage({
          viewport: { width, height: 1200 },
          deviceScaleFactor: 1,
          reducedMotion: 'reduce',
          locale: 'pt-BR',
        })
        await page.route('**/*', (route) =>
          new URL(route.request().url()).origin === new URL(origin).origin
            ? route.continue()
            : route.abort(),
        )
        await page.goto(origin + '__native-date')
        await page.getByLabel('lg filled').waitFor()
        const geometry = await page
          .locator('input[type=date]')
          .evaluateAll((inputs) =>
            inputs.map((input) => {
              const box = input.getBoundingClientRect()
              const reference = input
                .closest('section')
                .querySelector('input[type=text], input:not([type])')
                .getBoundingClientRect()
              const owner = input.parentElement.getBoundingClientRect()
              return {
                label: input.getAttribute('aria-label'),
                width: box.width,
                height: box.height,
                referenceHeight: reference.height,
                contained:
                  box.right <= owner.right + 1 && box.left >= owner.left - 1,
                native: input.type === 'date',
                value: input.value,
              }
            }),
          )
        for (const item of geometry) {
          assert(item.contained && item.native)
          assert(Math.abs(item.height - item.referenceHeight) <= 1)
        }
        await page.getByLabel('lg filled').focus()
        await page.screenshot({
          path: resolve(output, `${engine}-${width}.png`),
          fullPage: true,
        })
        report.push({ engine, width, geometry })
        await page.close()
      }
    } finally {
      await browser.close()
    }
  }
  await writeFile(
    resolve(output, 'report.json'),
    JSON.stringify(report, null, 2) + '\n',
  )
  console.log(
    `Native date: ${report.length * 12} size/state scenarios passed (${phase})`,
  )
} finally {
  await server.close()
}
