import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { chromium } from 'playwright'

const phase = process.argv[2]
assert.ok(['before', 'after'].includes(phase))
const out = path.resolve('.github/evidence/a1-image-style')
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const report = []
if (phase === 'after') {
  let count = 0
  for (const lesson of ['A101', 'A103', 'A104', 'A105', 'A106']) {
    const dir = path.resolve('stories/materials', lesson)
    const prompts = JSON.parse(
      await fs.readFile(path.join(dir, 'image-scenes.json'), 'utf8'),
    )
    const manifest = JSON.parse(
      await fs.readFile(path.join(dir, 'assets/generated-scenes.json'), 'utf8'),
    )
    assert.equal(prompts.scenes.length, manifest.images.length)
    for (const image of manifest.images) {
      const bytes = await fs.readFile(path.join(dir, 'assets', image.file))
      assert.equal(
        crypto.createHash('sha256').update(bytes).digest('hex'),
        image.sha256,
      )
      assert.equal(image.width, 768)
      assert.equal(image.height, 512)
      assert.equal(image.hasAlpha, false)
      const prompt = prompts.scenes.find((scene) => scene.id === image.id)
      assert.ok(
        prompt.prompt.includes('LANGY SPACE — FIXED 3D ILLUSTRATION STYLE'),
      )
      assert.ok(prompt.generationHistory.length > 0)
      count++
    }
  }
  assert.equal(count, 59)
}
try {
  for (const width of [1280, 390]) {
    const page = await browser.newPage({
      viewport: { width, height: width === 390 ? 844 : 900 },
      reducedMotion: 'reduce',
    })
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    for (const lesson of process.argv.includes('--room-only')
      ? ['A106']
      : ['A101', 'A103', 'A104', 'A105', 'A106']) {
      await page.goto(
        `http://localhost:6006/iframe.html?id=materials-a1-0${lesson.at(-1)}--complete-lesson&viewMode=story`,
      )
      await page.locator('[data-slide-id]').first().waitFor()
      await page.evaluate(async () => {
        await globalThis.document.fonts.ready
        await Promise.all(
          [...globalThis.document.images].map((img) =>
            img.decode().catch(() => {}),
          ),
        )
      })
      const slides = page.locator('[data-slide-id]')
      for (
        let i = 0;
        i < (process.argv.includes('--room-only') ? 0 : await slides.count());
        i++
      ) {
        const slide = slides.nth(i)
        const images = await slide.locator('img').evaluateAll((elements) =>
          elements
            .filter((img) => /scene-/.test(img.src))
            .map((img) => ({
              src: img.getAttribute('src'),
              loaded: img.complete && img.naturalWidth > 0,
            })),
        )
        if (!images.length) continue
        const id = await slide.getAttribute('data-slide-id')
        assert.ok(
          images.every((img) => img.loaded),
          `${lesson}/${id}: broken image`,
        )
        await slide.evaluate((el) =>
          el.scrollIntoView({ block: 'start', behavior: 'instant' }),
        )
        assert.equal(
          await slide.evaluate((el) => el.scrollWidth > el.clientWidth + 2),
          false,
          `${lesson}/${id}/${width}: overflow`,
        )
        await page.screenshot({
          path: path.join(out, `${phase}-${lesson}-${id}-${width}.jpg`),
          type: 'jpeg',
          quality: 78,
        })
        report.push({ lesson, id, width, images: images.length })
      }
      if (lesson === 'A106') {
        const room = page.locator('[data-slide-id="s12"]')
        await room.evaluate((el) =>
          el.scrollIntoView({ block: 'start', behavior: 'instant' }),
        )
        for (const location of ['Sofa', 'Bed', 'Table', 'Box']) {
          await room
            .getByRole('button', {
              name: `Mostrar Mia: ${location}`,
              exact: true,
            })
            .click()
          await room
            .locator('img')
            .first()
            .evaluate((img) => img.decode())
          await room.evaluate((el) =>
            el.scrollIntoView({ block: 'start', behavior: 'instant' }),
          )
          await page.screenshot({
            path: path.join(
              out,
              `${phase}-A106-s12-${location.toLowerCase()}-${width}.jpg`,
            ),
            type: 'jpeg',
            quality: 78,
          })
          report.push({
            lesson,
            id: `s12-${location.toLowerCase()}`,
            width,
            images: 1,
          })
        }
      }
    }
    assert.deepEqual(errors, [])
    await page.close()
  }
} finally {
  await browser.close()
}
await fs.writeFile(
  path.join(
    out,
    `${phase}${process.argv.includes('--room-only') ? '-room' : ''}-report.json`,
  ),
  JSON.stringify(report, null, 2),
)
console.log(
  `${phase}: ${report.length} matching lesson screenshots; images load; no overflow/runtime errors`,
)
