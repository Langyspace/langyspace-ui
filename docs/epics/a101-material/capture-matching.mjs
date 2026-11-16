/* global document, window, innerWidth */
import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
const output = '.github/evidence/a101'
if (!process.env.A101_REFERENCE_HTML)
  throw new Error('Set A101_REFERENCE_HTML to the frozen reference')
const browser = await chromium.launch(),
  page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    reducedMotion: 'reduce',
  }),
  before = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    reducedMotion: 'reduce',
  })
await before.addInitScript(() => {
  window.sessionStorage.clear()
})
const active = () => page.locator('[data-slide-id="s17"]')
const snapshot = async (name) => {
  await before.screenshot({ path: `${output}/before-${name}.png` })
  await page.screenshot({ path: `${output}/after-${name}.png` })
}
const metrics = []
try {
  for (const width of [1280, 390]) {
    const size = { width, height: width === 1280 ? 720 : 844 }
    await page.setViewportSize(size)
    await before.setViewportSize(size)
    await page.goto(
      'http://localhost:6016/iframe.html?id=materials-a1-01--matching&viewMode=story',
    )
    await page.locator('[data-slide-id="s17"][data-current="true"]').waitFor()
    await page.evaluate(() => document.fonts.ready)
    await before.goto('about:blank')
    await before.goto(
      pathToFileURL(process.env.A101_REFERENCE_HTML).href + '#p=17',
    )
    await before.locator('#s17').waitFor()
    await before.evaluate(() => document.fonts.ready)
    await before
      .locator('#s17')
      .evaluate((section) =>
        section.scrollIntoView({ behavior: 'instant', block: 'start' }),
      )
    const bounds = await active()
      .getByRole('group', { name: 'Perguntas', exact: true })
      .getByRole('button')
      .evaluateAll((buttons) =>
        buttons.map((button) => ({
          top: button.getBoundingClientRect().top,
          bottom: button.getBoundingClientRect().bottom,
        })),
      )
    const viewport = await page.locator('[data-slide-viewport]').boundingBox()
    if (
      bounds.length !== 8 ||
      bounds.some(
        (rect) =>
          rect.top < viewport.y || rect.bottom > viewport.y + viewport.height,
      )
    )
      throw new Error(`Not all eight questions visible at ${width}px`)
    if (
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      )
    )
      throw new Error('Horizontal overflow')
    metrics.push({ width, allEightQuestionsVisible: true, bounds })
    await snapshot(`s17-${width}`)
    await active()
      .getByRole('button', { name: /What’s your name/ })
      .click()
    await active()
      .getByRole('button', { name: /Yes, she is/ })
      .click()
    await before.locator('#s17 [data-act="mtq"]').nth(0).click()
    await before.locator('#s17 [data-act="mta"]').nth(0).click()
    await snapshot(`matching-wrong-${width}`)
    await active()
      .getByRole('button', { name: /I’m Ana/ })
      .click()
    await before.locator('#s17 [data-act="mta"]').nth(3).click()
    await snapshot(`matching-correct-${width}`)
  }
  await page.setViewportSize({ width: 1280, height: 720 })
  for (const name of ['default', 'dark', 'narrow-long-content']) {
    await page.goto(
      `http://localhost:6016/iframe.html?id=exercise-components--${name}&viewMode=story`,
    )
    await page.locator('.lsui-sc-match-pairs').waitFor()
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({
      path: `${output}/after-components-${name}-1280.png`,
      fullPage: true,
    })
  }
  const data = JSON.parse(await readFile(`${output}/results.json`, 'utf8'))
  data.results.push({
    interaction:
      'compact matching labels: all eight questions visible at both widths, wrong/correct feedback, component dark/narrow rereview',
    passed: true,
    metrics,
  })
  await writeFile(
    `${output}/results.json`,
    JSON.stringify(data, null, 2) + '\n',
  )
  console.log(
    JSON.stringify({
      passed: true,
      matching: metrics.map(({ width, allEightQuestionsVisible }) => ({
        width,
        allEightQuestionsVisible,
      })),
    }),
  )
} finally {
  await browser.close()
}
