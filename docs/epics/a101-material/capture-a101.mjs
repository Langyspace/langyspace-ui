/* global document, window, innerWidth */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
const output = '.github/evidence/a101'
await mkdir(output, { recursive: true })
const sourcePath = process.env.A101_REFERENCE_HTML
if (!sourcePath)
  throw new Error(
    'Set A101_REFERENCE_HTML to the reconciled published reference HTML',
  )
const sourceHtml = await readFile(sourcePath, 'utf8')
const sourceSha256 = createHash('sha256').update(sourceHtml).digest('hex')
const sourceUrl = pathToFileURL(sourcePath).href
const order = [
  1, 21, 22, 23, 24, 25, 26, 4, 51, 52, 53, 54, 55, 56, 6, 14, 71, 72, 16, 17,
  8, 9, 10, 18, 15, 13,
]
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  reducedMotion: 'reduce',
})
const page = await context.newPage(),
  before = await context.newPage()
await before.addInitScript(() => {
  try {
    window.localStorage.clear()
    window.sessionStorage.clear()
  } catch {
    /* file origins may deny storage */
  }
})
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
const results = []
const active = () => page.locator('[data-slide-id][data-current="true"]')
const ready = async (target) => {
  await target.evaluate(() => document.fonts.ready)
  await target
    .locator('img')
    .evaluateAll((images) =>
      Promise.all(images.map((image) => image.decode().catch(() => {}))),
    )
}
const go = async (number) => {
  await page.goto(
    `http://localhost:6016/iframe.html?id=materials-a1-01--complete-lesson&viewMode=story&args=initialPageId:s${number}`,
  )
  await page
    .locator(`[data-slide-id="s${number}"][data-current="true"]`)
    .waitFor()
  await ready(page)
  await before.goto('about:blank')
  await before.goto(`${sourceUrl}#p=${number}`)
  await before.locator(`#s${number}`).waitFor()
  await ready(before)
  await before.locator(`#s${number}`).evaluate((section) => {
    section.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
}
const verifyScene = async (number) => {
  if ([6, 8].includes(number) && (await active().locator('img').count()) !== 6)
    throw new Error('Missing dialogue portraits')
  const broken = await active()
    .locator('img')
    .evaluateAll((images) =>
      images.some((image) => !image.complete || !image.naturalWidth),
    )
  if (broken) throw new Error(`Broken image on page ${number}`)
  if ((number >= 21 && number <= 26) || (number >= 51 && number <= 56)) {
    const bounded = await active()
      .locator('img')
      .first()
      .evaluate((image) => {
        const r = image.getBoundingClientRect(),
          p = image.parentElement.getBoundingClientRect()
        return (
          r.top >= p.top - 0.5 &&
          r.bottom <= p.bottom + 0.5 &&
          r.left >= p.left - 0.5 &&
          r.right <= p.right + 0.5
        )
      })
    if (!bounded)
      throw new Error(`Illustration escapes warm-up media: ${number}`)
  }
}
const snapshot = async (name) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  )
  if (overflow) throw new Error(`Horizontal overflow: ${name}`)
  await before.screenshot({ path: `${output}/before-${name}.png` })
  await page.screenshot({ path: `${output}/after-${name}.png` })
  results.push({
    name,
    viewport: page.viewportSize(),
    horizontalOverflow: false,
  })
}
const selectedPage = async (id) =>
  page.waitForFunction(
    (id) =>
      document
        .querySelector(`[data-slide-id="${id}"]`)
        ?.getAttribute('data-current') === 'true',
    id,
  )
try {
  for (const width of [1280, 390]) {
    const size = { width, height: width === 1280 ? 720 : 844 }
    await page.setViewportSize(size)
    await before.setViewportSize(size)
    await page.mouse.move(0, 0)
    await before.mouse.move(0, 0)
    await go(1)
    for (const number of order) {
      await page.locator(`[data-slide-id="s${number}"]`).evaluate((section) => {
        const viewport = section.parentElement
        const top =
          section.getBoundingClientRect().top -
          viewport.getBoundingClientRect().top +
          viewport.scrollTop
        viewport.scrollTo({ top, behavior: 'instant' })
      })
      await selectedPage(`s${number}`)
      await before
        .locator(`#s${number}`)
        .evaluate((section) =>
          section.scrollIntoView({ behavior: 'instant', block: 'start' }),
        )
      await verifyScene(number)
      await snapshot(`s${number}-${width}`)
    }
    console.log(`Captured all 26 reference/React pages at ${width}px`)
    await go(1)
    await active()
      .getByRole('button', { name: 'Mostrar todas as palavras', exact: true })
      .click()
    await before
      .locator('#s1')
      .getByRole('button', { name: 'Mostrar todas as palavras', exact: true })
      .click()
    await snapshot(`vocabulary-revealed-${width}`)
    await go(21)
    await active().locator('[data-ui-quiz-option]').nth(1).click()
    await before.locator('#s21 .opt').nth(1).click()
    await active()
      .getByRole('status')
      .filter({ hasText: 'Cold é com frio.' })
      .waitFor()
    await snapshot(`warm-up-wrong-${width}`)
    await active().locator('[data-ui-quiz-option]').nth(0).click()
    await before.locator('#s21 .opt').nth(0).click()
    await snapshot(`warm-up-correct-${width}`)
    await page.locator('[data-slide-viewport]').focus()
    await page.keyboard.press('PageDown')
    await selectedPage('s22')
    await page.keyboard.press('PageUp')
    await selectedPage('s21')
    if (!(await active().locator('[data-ui-quiz-option]').nth(0).isDisabled()))
      throw new Error('Page return lost warm-up response')
    await go(71)
    await active()
      .getByRole('button', { name: 'I’m from Brazil.', exact: true })
      .click()
    await before.locator('#s71 .gx-ex').nth(0).click()
    await snapshot(`grammar-translation-${width}`)
    await go(17)
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
    if (
      !(await active()
        .getByRole('button', { name: /What’s your name/ })
        .isDisabled())
    )
      throw new Error('Correct pair did not lock')
    await snapshot(`matching-correct-${width}`)
    await go(8)
    await active()
      .getByRole('button', {
        name: 'Lacuna 1: mostrar a resposta',
        exact: true,
      })
      .click()
    await before.locator('#s8 [data-act="blrev"]').nth(0).click()
    await snapshot(`dialogue-gap-${width}`)
    await go(10)
    await active().getByRole('button', { name: 'Tom', exact: true }).click()
    await before.locator('#s10 [data-act="xck"]').nth(0).click()
    await snapshot(`guess-who-marked-${width}`)
    await go(18)
    await active()
      .getByRole('button', { name: /You are tired/ })
      .click()
    await before.locator('#s18 .inv-c').nth(0).click()
    await snapshot(`question-revealed-${width}`)
    await go(15)
    await active()
      .getByRole('button', { name: /Are you happy/ })
      .click()
    await before.locator('#s15 .talk-q').nth(0).click()
    await snapshot(`conversation-marked-${width}`)
  }
  results.push({
    interaction:
      'wrong/correct feedback, source image/copy/order, retained warm-up selection, grammar translation, matching rejection/completion, dialogue gaps, Guess who, question reveal, conversation marking',
    passed: true,
  })
  await page.setViewportSize({ width: 1280, height: 720 })
  await before.setViewportSize({ width: 1280, height: 720 })
  await go(9)
  const voice = active().locator('[data-playback]')
  await active()
    .getByRole('button', { name: 'Ouvir áudio', exact: true })
    .click()
  await page.waitForFunction(
    () =>
      document
        .querySelector('[data-playback]')
        ?.getAttribute('data-playback') === 'playing',
  )
  if ((await voice.getAttribute('data-listens')) !== '1')
    throw new Error('First native listen not counted')
  await active()
    .locator('audio')
    .evaluate((audio) => {
      audio.currentTime = audio.duration - 0.06
    })
  await page.waitForFunction(
    () =>
      document
        .querySelector('[data-playback]')
        ?.getAttribute('data-playback') === 'ended',
  )
  await active()
    .getByRole('button', { name: 'Ouvir novamente', exact: true })
    .click()
  await page.waitForFunction(
    () =>
      document.querySelector('[data-listens]')?.getAttribute('data-listens') ===
      '2',
  )
  await active()
    .getByRole('region', { name: 'Transcrição' })
    .getByText('Hi! How are you? I’m really tired, and I’m also hungry!', {
      exact: true,
    })
    .waitFor()
  await page.screenshot({
    path: `${output}/after-listening-transcript-1280.png`,
  })
  await page.locator('[data-slide-viewport]').focus()
  await page.keyboard.press('PageDown')
  await selectedPage('s10')
  if (!(await page.locator('audio').evaluate((audio) => audio.paused)))
    throw new Error('Leaving slide did not pause native audio')
  results.push({
    interaction:
      'real MP3 playing/ended/second playing, second-listen transcript, departing-slide native pause',
    passed: true,
  })
  await go(1)
  const popupPromise = page.waitForEvent('popup')
  await page
    .getByRole('button', { name: 'Notas da professora', exact: true })
    .click()
  const popup = await popupPromise
  await popup
    .getByRole('heading', { name: 'Notas da professora · A1.01', exact: true })
    .waitFor()
  if (await page.getByText('Can you hear?', { exact: false }).count())
    throw new Error('Private notes leaked into shared lesson')
  await popup
    .getByRole('button', { name: 'Iniciar relógio', exact: true })
    .click()
  await popup
    .getByRole('button', { name: 'Reiniciar relógio', exact: true })
    .waitFor()
  await popup.screenshot({
    path: `${output}/after-private-teacher-notes-1280.png`,
  })
  await popup.close()
  results.push({
    interaction:
      'private notes popup with source guidance and elapsed clock, no teacher notes in lesson DOM',
    passed: true,
  })
  await go(13)
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {
    origin: 'http://localhost:6016',
  })
  await active()
    .getByRole('button', { name: 'Copy links', exact: true })
    .click()
  await active()
    .getByRole('button', { name: 'Copied ✓', exact: true })
    .waitFor()
  const clipboard = await page.evaluate(() => navigator.clipboard.readText())
  if (
    !clipboard.includes('deck-a1-01') ||
    !clipboard.includes('tab=shadowing') ||
    !clipboard.includes('tab=quiz')
  )
    throw new Error('Homework clipboard message lost source destinations')
  results.push({
    interaction:
      'actual clipboard copy of all three source homework destinations',
    passed: true,
  })
  for (const name of ['default', 'dark', 'narrow-long-content']) {
    await page.goto(
      `http://localhost:6016/iframe.html?id=exercise-components--${name}&viewMode=story`,
    )
    await page.locator('.lsui-sc-exercise-panel').waitFor()
    await ready(page)
    for (const marker of [
      'exercise-panel',
      'vocabulary-grid',
      'learning-dialogue',
      'reveal-card',
      'match-pairs',
    ])
      if (!(await page.locator(`.lsui-sc-${marker}`).count()))
        throw new Error(`Missing public contract ${marker}`)
    await page.screenshot({
      path: `${output}/after-components-${name}-1280.png`,
      fullPage: true,
    })
  }
  if (errors.length) throw new Error(errors.join('\n'))
  if ((await readFile(sourcePath, 'utf8')) !== sourceHtml)
    throw new Error('Reference changed during capture')
  await writeFile(
    `${output}/results.json`,
    JSON.stringify(
      {
        passed: true,
        sourceSha256,
        reference:
          'local published prototype; content reconciled with rendered Claude, local styling retained for before captures',
        results,
      },
      null,
      2,
    ) + '\n',
  )
  console.log(
    JSON.stringify(
      {
        passed: true,
        pairedCaptures: results.filter((r) => r.name).length,
        interactions: results.filter((r) => r.interaction),
      },
      null,
      2,
    ),
  )
} finally {
  await browser.close()
}
