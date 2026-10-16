import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { chromium } from 'playwright'
import { captureVisualEvidence } from './capture-visual-evidence.mjs'

const [origin, outputPath, phase] = process.argv.slice(2)
assert(
  /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin),
  'Local Storybook origin required',
)
assert(['before', 'after'].includes(phase), 'before or after required')
const output = resolve(outputPath)
await mkdir(output, { recursive: true })
const index = await (await fetch(`${origin}/index.json`)).json()
const browser = await chromium.launch({ headless: true })
const records =
  JSON.parse(
    await readFile(resolve(output, 'matrix.json'), 'utf8').catch(() => '{}'),
  ).records ?? []
const requested = new Set(
  (process.env.REVIEW_STORIES ?? '').split(',').filter(Boolean),
)
const stories = [
  ...[
    'flashcardframe',
    'flashcardstage',
    'flashcarddeck',
    'flashcardfront',
    'flashcardback',
    'flashcardword',
    'flashcardimagepanel',
    'shadowingreader',
    'shadowingphrasestack',
    'shadowingtranslation',
    'shadowingcontroldock',
  ].map((name) => `molecules-${name}--default`),
  'molecules-flashcardframe--flipped',
  'molecules-togglebutton--default',
  'molecules-togglebutton--unselected',
  'molecules-togglebutton--disabled',
  'molecules-flashcardframe--limited-height',
  'molecules-flashcardframe--long-content',
  'molecules-shadowingpanel--default',
  'molecules-shadowingpanel--long-content',
]
try {
  for (const id of stories) {
    if (!index.entries[id] || (requested.size && !requested.has(id))) continue
    const composed = /limited-height|long-content|shadowingpanel/.test(id)
    const sizes = composed
      ? [
          [390, 568],
          [844, 390],
          [1440, 1000],
        ]
      : [
          [390, 844],
          [844, 390],
          [1440, 1000],
        ]
    for (const [width, height] of sizes) {
      if (
        process.env.REVIEW_WIDTHS &&
        !process.env.REVIEW_WIDTHS.split(',').map(Number).includes(width)
      )
        continue
      const page = await browser.newPage({
        viewport: { width, height },
        reducedMotion: 'reduce',
        locale: 'pt-BR',
      })
      const errors = []
      page.on('pageerror', (e) => errors.push(e.message))
      await page.route('**/*', (r) =>
        r.request().url().startsWith(origin) ||
        /^(data|blob):/.test(r.request().url())
          ? r.continue()
          : r.abort(),
      )
      try {
        await page.goto(`${origin}/iframe.html?id=${id}&viewMode=story`, {
          waitUntil: 'domcontentloaded',
        })
        await page
          .locator('#storybook-root > *')
          .first()
          .waitFor({ timeout: 30000 })
        await page.evaluate(() => document.fonts.ready)
        await page.waitForTimeout(200)
        assert.equal(
          await page.locator('#error-message:visible').count(),
          0,
          `Story render error: ${id}`,
        )
        const record = { id, width, height, errors, images: [] }
        const capture = async (suffix) => {
          const file = `${id}-${width}-${height}${suffix}.png`
          await captureVisualEvidence(page, {
            path: resolve(output, file),
            animations: 'disabled',
          })
          record.images.push(file)
        }
        await capture('')
        if (composed && id.includes('flashcardframe')) {
          const front = page.locator('.lsui-sc-flashcard-front')
          record.frontScroll = await front.evaluate((e) => ({
            height: e.clientHeight,
            extent: e.scrollHeight,
          }))
          if (record.frontScroll.extent > record.frontScroll.height + 2) {
            await front.evaluate((e) => {
              e.scrollTop = e.scrollHeight
            })
            await capture('-front-end')
            record.flipAfterScroll = await page
              .getByRole('button', { name: 'Virar cartão', exact: true })
              .evaluate((e) => {
                const r = e.getBoundingClientRect()
                return {
                  rect: r.toJSON(),
                  hit: e.contains(
                    document.elementFromPoint(
                      r.x + r.width / 2,
                      r.y + r.height / 2,
                    ),
                  ),
                }
              })
            await front.evaluate((e) => {
              e.scrollTop = 0
            })
          }
        }
        if (id.includes('togglebutton')) {
          const button = page.getByRole('button')
          record.rest = await button.evaluate((e) => ({
            color: getComputedStyle(e).color,
            background: getComputedStyle(e).backgroundColor,
          }))
          await button.hover({ force: true })
          await page.waitForTimeout(170)
          record.hover = await button.evaluate((e) => ({
            pressed: e.getAttribute('aria-pressed'),
            color: getComputedStyle(e).color,
            background: getComputedStyle(e).backgroundColor,
          }))
          if (phase === 'after' && id.endsWith('--default'))
            assert.equal(record.hover.color, record.rest.color)
          await capture('-hover')
          if (!id.endsWith('--disabled')) {
            await page.mouse.move(0, 0)
            await page.keyboard.press('Tab')
            await capture('-focus')
          }
        }
        if (composed && id.includes('flashcardframe')) {
          await page
            .getByRole('button', { name: 'Virar cartão', exact: true })
            .click()
          await page.waitForTimeout(700)
          const grades = page.locator('[data-ui-flashcard-rating-button]')
          record.grades = await grades.evaluateAll((es) =>
            es.map((e) => {
              const r = e.getBoundingClientRect()
              return {
                label: e.getAttribute('aria-label'),
                rect: r.toJSON(),
                hit: e.contains(
                  document.elementFromPoint(
                    r.x + r.width / 2,
                    r.y + r.height / 2,
                  ),
                ),
              }
            }),
          )
          assert.equal(record.grades.length, 4)
          assert(
            record.grades.every((g) => g.hit),
            `Covered rating: ${id} ${width}x${height}`,
          )
          await capture('-back')
          await page.getByRole('button', { name: /^Bom/ }).click()
          await page
            .getByRole('button', { name: 'Virar cartão', exact: true })
            .waitFor()
        }
        if (composed && id.includes('shadowingpanel')) {
          for (const name of ['Tocar frase', 'Tradução', '0.5x'])
            await page
              .getByRole('button', { name, exact: true })
              .click({ trial: true })
          await page
            .getByRole('button', { name: 'Tocar frase', exact: true })
            .click()
          await page
            .getByRole('button', { name: 'Pausar frase', exact: true })
            .waitFor()
          await capture('-playing')
          await page
            .getByRole('button', { name: 'Tradução', exact: true })
            .click()
          await capture('-translation-hidden')
        }
        assert.deepEqual(errors, [])
        const previous = records.findIndex(
          (r) => r.id === id && r.width === width && r.height === height,
        )
        if (previous >= 0) records[previous] = record
        else records.push(record)
        await writeFile(
          resolve(output, 'matrix.json'),
          JSON.stringify({ phase, records }, null, 2) + '\n',
        )
      } finally {
        await page.close()
      }
    }
  }
} finally {
  await browser.close()
}
console.log(
  `${phase}: ${records.length} Storybook cases captured with focused assertions`,
)
