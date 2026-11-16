/* global document, innerWidth, getComputedStyle */
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const output = '.github/evidence/a101-scenes'
await mkdir(output, { recursive: true })
const baseline = 'f84a6fabc89464cd0a5c88bf546e5385c94e2f2d'
const images = JSON.parse(
  await readFile('stories/materials/A101/assets/generated-scenes.json', 'utf8'),
)
assert.equal(images.images.length, 15)
for (const image of images.images) {
  const bytes = await readFile(`stories/materials/A101/assets/${image.file}`)
  assert.equal(createHash('sha256').update(bytes).digest('hex'), image.sha256)
  assert.equal(image.hasAlpha, false)
  assert.equal(image.width, 768)
  assert.equal(image.height, 768)
}
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ reducedMotion: 'reduce' })
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
const results = []
const active = () => page.locator('[data-slide-id][data-current="true"]')
const ready = async () => {
  await page.evaluate(() => document.fonts.ready)
  await active()
    .locator('img')
    .evaluateAll((items) => Promise.all(items.map((image) => image.decode())))
}
const go = async (id) => {
  await page.locator(`[data-slide-id="${id}"]`).evaluate((section) => {
    const viewport = section.parentElement
    const top =
      section.getBoundingClientRect().top -
      viewport.getBoundingClientRect().top +
      viewport.scrollTop
    viewport.scrollTo({ top, behavior: 'instant' })
  })
  await page.locator(`[data-slide-id="${id}"][data-current="true"]`).waitFor()
  await ready()
  await page.mouse.move(0, 0)
}
const snapshot = async (name, beforeName = name) => {
  await ready()
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
    `Horizontal overflow: ${name}`,
  )
  assert.equal(
    await active()
      .locator('img')
      .evaluateAll((items) =>
        items.every((image) => image.complete && image.naturalWidth > 0),
      ),
    true,
  )
  await page.screenshot({ path: `${output}/after-${name}.png` })
  if (beforeName)
    await copyFile(
      `.github/evidence/a101/after-${beforeName}.png`,
      `${output}/before-${name}.png`,
    )
  results.push({
    name,
    viewport: page.viewportSize(),
    before: beforeName ? baseline : null,
    horizontalOverflow: false,
  })
}
try {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: width === 1280 ? 720 : 844 })
    await page.goto(
      'http://localhost:6016/iframe.html?id=materials-a1-01--complete-lesson&viewMode=story',
    )
    await active().waitFor()
    for (const id of [
      's1',
      's21',
      's22',
      's23',
      's24',
      's25',
      's26',
      's4',
      's51',
      's52',
      's53',
      's54',
      's55',
      's56',
      's10',
    ]) {
      await go(id)
      if (id !== 's1' && id !== 's10' && id !== 's4') {
        const scene = active().locator('img').first()
        assert.match(await scene.getAttribute('src'), /scene-/)
        const fit = await scene.evaluate((image) => {
          const rect = image.getBoundingClientRect(),
            parent = image.parentElement.getBoundingClientRect()
          return (
            rect.width > 150 &&
            rect.height > 150 &&
            rect.left >= parent.left - 0.5 &&
            rect.right <= parent.right + 0.5 &&
            rect.top >= parent.top - 0.5 &&
            rect.bottom <= parent.bottom + 0.5
          )
        })
        assert.equal(fit, true, `Scene frame: ${id}`)
        if (Number(id.slice(1)) >= 51) {
          assert.equal(await active().locator('img').count(), 2)
          assert.match(
            await active().locator('img').nth(1).getAttribute('src'),
            /(?:^data:image\/svg\+xml|flag-.*\.svg)/,
          )
        }
      }
      await snapshot(`${id}-${width}`)
    }
    await go('s1')
    await active()
      .getByRole('button', { name: 'Mostrar todas as palavras', exact: true })
      .click()
    await snapshot(`vocabulary-revealed-${width}`)
    await go('s21')
    await active().locator('[data-ui-quiz-option]').nth(1).click()
    await active()
      .getByRole('status')
      .filter({ hasText: 'Cold é com frio.' })
      .waitFor()
    await snapshot(`warm-up-wrong-${width}`)
    await active().locator('[data-ui-quiz-option]').nth(0).click()
    await active().getByRole('status').filter({ hasText: 'Correto!' }).waitFor()
    await snapshot(`warm-up-correct-${width}`)
    await go('s10')
    await active().getByRole('button', { name: 'Tom', exact: true }).click()
    assert.equal(
      await active()
        .getByRole('button', { name: 'Tom: já descoberta', exact: true })
        .getAttribute('aria-pressed'),
      'true',
    )
    await snapshot(`guess-who-marked-${width}`)
    console.log(`A1.01 scenes and interactions captured at ${width}px`)
  }
  for (const story of ['contextual-scenes', 'dark-scenes', 'narrow-scenes']) {
    for (const width of [1280, 390]) {
      await page.setViewportSize({ width, height: width === 1280 ? 720 : 844 })
      await page.goto(
        `http://localhost:6016/iframe.html?id=exercise-components--${story}&viewMode=story`,
      )
      const grid = page.locator('[class*="lsui-sc-vocabulary-grid"]')
      await grid.waitFor()
      await page.evaluate(() => document.fonts.ready)
      await grid
        .locator('img')
        .evaluateAll((items) =>
          Promise.all(items.map((image) => image.decode())),
        )
      const button = grid.getByRole('button').first()
      await button.focus()
      await page.keyboard.press('Enter')
      assert.equal(await button.getAttribute('aria-expanded'), 'true')
      await button.blur()
      await page.mouse.move(0, 0)
      assert.equal(await button.getAttribute('aria-expanded'), 'true')
      assert.ok(
        (await button.getAttribute('aria-label')).includes('happy: feliz'),
      )
      const label = button.locator('b')
      assert.equal(await label.isVisible(), true)
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
      )
      assert.equal(
        await grid
          .locator('img')
          .first()
          .evaluate((image) => getComputedStyle(image).objectFit),
        'cover',
      )
      await page.screenshot({ path: `${output}/after-${story}-${width}.png` })
      results.push({
        name: `${story}-${width}`,
        viewport: page.viewportSize(),
        keyboardReveal: true,
        before: null,
      })
    }
  }
  assert.deepEqual(errors, [])
  await writeFile(
    `${output}/results.json`,
    JSON.stringify(
      { passed: true, baseline, images: 15, results, errors },
      null,
      2,
    ) + '\n',
  )
  console.log(
    `Passed ${results.length} scene captures, keyboard reveals, warm-up feedback, guest marking and asset hashes`,
  )
} finally {
  await browser.close()
}
