import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'
import { chromium } from 'playwright'

const root = resolve(import.meta.dirname, '..')
const reportRoot = resolve(root, '.local/react-composition')
await mkdir(reportRoot, { recursive: true })
const server = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  resolve: {
    alias: { '../../src/index': resolve(root, 'dist/index.js') },
    dedupe: ['react', 'react-dom', 'styled-components', 'react-hook-form'],
  },
  server: { host: '127.0.0.1', port: 0 },
})
await server.listen()
const origin = `http://127.0.0.1:${server.httpServer.address().port}`
const browser = await chromium.launch({ headless: true })
const results = []
try {
  for (const width of [390, 901, 1440])
    for (const reset of [false, true]) {
      const page = await browser.newPage({
        viewport: { width, height: 844 },
        reducedMotion: 'reduce',
      })
      const errors = []
      page.on('pageerror', (error) => errors.push(error.message))
      await page.route('**/*', (route) =>
        route.request().url().startsWith(origin)
          ? route.continue()
          : route.abort(),
      )
      const visit = async (surface) => {
        await page.goto(
          `${origin}/quality/review/index.html?surface=${surface}${reset ? '&reset' : ''}`,
        )
        await page.waitForFunction(() => window.reviewReady)
      }
      await visit('flashcard')
      assert.equal(
        await page
          .getByTestId('flashcard-footer')
          .evaluate((element) => getComputedStyle(element).paddingTop),
        '12px',
        'footer recipe requires an undeclared global safe-area variable',
      )
      assert.equal(
        await page
          .getByTestId('flashcard-footer')
          .evaluate((element) => getComputedStyle(element).paddingBottom),
        '16px',
      )
      const overriddenPadding = await page
        .getByTestId('flashcard-footer')
        .evaluate((element) => {
          element.parentElement.style.setProperty(
            '--safe-area-inset-bottom',
            '24px',
          )
          const padding = getComputedStyle(element).paddingBottom
          element.parentElement.style.removeProperty('--safe-area-inset-bottom')
          return padding
        })
      assert.equal(
        overriddenPadding,
        '40px',
        'explicit consumer safe-area override must keep working',
      )
      const frontGeometry = await page.evaluate(() => {
        const face = document
          .querySelector('[data-testid="front-face"]')
          .getBoundingClientRect()
        const content = document
          .querySelector('[data-testid="front-content"]')
          .getBoundingClientRect()
        return { face: face.toJSON(), content: content.toJSON() }
      })
      assert(
        frontGeometry.content.bottom <= frontGeometry.face.bottom + 1,
        `front overflows face: ${JSON.stringify({ width, reset, ...frontGeometry })}`,
      )
      await page
        .getByRole('button', { name: 'Ouvir palavra', exact: true })
        .click()
      assert.equal(await page.evaluate(() => window.reviewEvents.audio), 1)
      assert.equal(
        await page.getByTestId('back-face').getAttribute('inert'),
        '',
      )
      await page
        .getByRole('button', { name: 'Virar cartão', exact: true })
        .focus()
      await page.keyboard.press('Space')
      await page.getByRole('button', { name: 'Lembrei', exact: true }).waitFor()
      assert(
        await page
          .getByRole('button', { name: 'Lembrei', exact: true })
          .evaluate((element) => document.activeElement === element),
      )
      assert.equal(
        await page.getByTestId('front-face').getAttribute('inert'),
        '',
      )
      await page
        .getByRole('button', { name: 'Ouvir tradução', exact: true })
        .click()
      assert.equal(await page.evaluate(() => window.reviewEvents.audio), 2)
      await visit('schedule')
      await page.getByRole('button', { name: 'Entrar', exact: true }).focus()
      await page.keyboard.press('Enter')
      assert.deepEqual(await page.evaluate(() => window.reviewEvents), {
        open: 0,
        action: 1,
        audio: 0,
      })
      await page
        .getByRole('button', { name: 'Abrir aula', exact: true })
        .focus()
      await page.keyboard.press('Space')
      assert.equal(await page.evaluate(() => window.reviewEvents.open), 1)
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        'schedule viewport overflow',
      )
      await visit('calendar')
      await page
        .getByRole('button', { name: '09:00 · Aula', exact: true })
        .click()
      assert.deepEqual(await page.evaluate(() => window.reviewEvents), {
        open: 0,
        action: 1,
        audio: 0,
      })
      await page.getByTestId('day').click({ position: { x: 180, y: 110 } })
      assert.equal(await page.evaluate(() => window.reviewEvents.open), 1)
      await visit('dialog')
      await page
        .getByRole('button', { name: 'Abrir modal', exact: true })
        .click()
      const dialog = page.getByRole('dialog')
      const box = await dialog.boundingBox()
      assert(
        box.x >= -1 && box.x + box.width <= width + 1,
        `dialog outside viewport: ${JSON.stringify({ width, reset, box })}`,
      )
      await page
        .getByRole('button', { name: 'Ações da aula', exact: true })
        .click()
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Escape')
      assert(await dialog.isVisible(), 'menu Escape dismissed parent dialog')
      assert(
        await page
          .getByRole('button', { name: 'Ações da aula', exact: true })
          .evaluate((element) => document.activeElement === element),
      )
      await page
        .getByRole('button', { name: 'Ações da aula', exact: true })
        .click()
      await page.keyboard.press('Tab')
      assert(
        await page
          .getByRole('button', { name: 'Continuar', exact: true })
          .evaluate((element) => document.activeElement === element),
        'nested Tab trapped twice',
      )
      assert.deepEqual(errors, [])
      results.push({
        width,
        reset,
        checks: [
          'flashcard bounds/audio/flip/inert/focus',
          'schedule commands',
          'calendar hit targets',
          'dialog bounds/menu Escape/Tab',
        ],
      })
      await page.close()
    }
  await writeFile(
    resolve(reportRoot, 'report.json'),
    JSON.stringify({ results }, null, 2) + '\n',
  )
  console.log(
    'React composition browser checks passed:',
    results.length,
    'viewport/reset combinations.',
  )
} finally {
  await browser.close()
  await server.close()
}
