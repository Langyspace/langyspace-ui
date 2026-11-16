/* global document, window, getComputedStyle, innerWidth, requestAnimationFrame */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { pathToFileURL } from 'node:url'
import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const output = '.github/evidence/a101-fidelity'
await mkdir(output, { recursive: true })
const componentsOnly = process.env.A101_CAPTURE_SCOPE === 'components'
const checkpoint = componentsOnly
  ? JSON.parse(await readFile(`${output}/lesson-checkpoint.json`, 'utf8'))
  : undefined
const referencePath = process.env.A101_REFERENCE_HTML
assert.ok(
  referencePath,
  'Set A101_REFERENCE_HTML to the frozen, reconciled reference',
)
const referenceHash = createHash('sha256')
  .update(await readFile(referencePath))
  .digest('hex')
const sceneAssets = JSON.parse(
  await readFile('stories/materials/A101/assets/generated-scenes.json', 'utf8'),
)
for (const asset of sceneAssets.images) {
  assert.equal(
    createHash('sha256')
      .update(await readFile(`stories/materials/A101/assets/${asset.file}`))
      .digest('hex'),
    asset.sha256,
  )
}
const ids = [
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
  's6',
  's14',
  's71',
  's72',
  's16',
  's17',
  's8',
  's9',
  's10',
  's18',
  's15',
  's13',
]
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  reducedMotion: 'reduce',
  permissions: ['clipboard-read', 'clipboard-write'],
})
const current = await context.newPage(),
  baseline = await context.newPage(),
  reference = await context.newPage()
const errors = [],
  results = checkpoint?.results ?? [],
  comparisons = checkpoint?.comparisons ?? [],
  journeys = checkpoint?.journeys ?? []
current.on('pageerror', (error) => errors.push(error.message))
const active = () => current.locator('[data-slide-id][data-current="true"]')
const frames = async (page) => {
  await page.bringToFront()
  await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      ),
  )
}
const ready = async (page) => {
  await page.evaluate(async () => {
    await document.fonts.load('400 16px Montserrat')
    await document.fonts.load('700 16px Montserrat')
    await document.fonts.ready
  })
  assert.equal(
    await page.evaluate(() => document.fonts.check('400 16px Montserrat')),
    true,
    `Montserrat must load: ${page.url()}`,
  )
  if (page === reference)
    assert.equal(
      await page.evaluate(() =>
        document.fonts.check('700 16px "Space Grotesk"'),
      ),
      true,
    )
  await page
    .locator('img')
    .evaluateAll((items) =>
      Promise.all(items.map((image) => image.decode().catch(() => {}))),
    )
  await frames(page)
}
const go = async (page, id, source = false, end = false) => {
  await page.locator(source ? `#${id}` : `[data-slide-id="${id}"]`).evaluate(
    (section, options) => {
      if (options.source) {
        const y = section.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top:
            y +
            (options.end
              ? Math.max(
                  0,
                  section.getBoundingClientRect().height - window.innerHeight,
                )
              : 0),
          behavior: 'instant',
        })
      } else {
        const viewport = section.parentElement
        const y =
          section.getBoundingClientRect().top -
          viewport.getBoundingClientRect().top +
          viewport.scrollTop
        viewport.scrollTo({
          top:
            y +
            (options.end
              ? Math.max(
                  0,
                  section.getBoundingClientRect().height -
                    viewport.clientHeight,
                )
              : 0),
          behavior: 'instant',
        })
      }
    },
    { source, end },
  )
  if (!source)
    await page.locator(`[data-slide-id="${id}"][data-current="true"]`).waitFor()
  await page.mouse.move(0, 0)
  await frames(page)
}
const capture = async (name, includeReference = true) => {
  assert.equal(
    await current.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
    `Horizontal overflow: ${name}`,
  )
  assert.equal(
    await active()
      .locator('img')
      .evaluateAll((items) =>
        items.every((image) => image.complete && image.naturalWidth),
      ),
    true,
  )
  await current.screenshot({ path: `${output}/after-${name}.png` })
  await baseline.screenshot({ path: `${output}/before-${name}.png` })
  if (includeReference)
    await reference.screenshot({ path: `${output}/reference-${name}.png` })
  results.push({
    name,
    viewport: current.viewportSize(),
    kind: 'lesson',
    includeReference,
    baseline: '62848623cffa02211a9b14bd4419b0b10981d6d9',
  })
}
const goAll = async (id, end = false) => {
  await go(reference, id, true, end)
  await go(baseline, id, false, end)
  await go(current, id, false, end)
}
const heading = async (page, selector) =>
  page.locator(selector).evaluate((section) => {
    const title = section.querySelector('h2'),
      style = getComputedStyle(title),
      rect = title.getBoundingClientRect()
    return {
      x: rect.x,
      y: rect.y,
      fontFamily: style.fontFamily,
      fontSize: parseFloat(style.fontSize),
      pageHeight: section.getBoundingClientRect().height,
    }
  })
try {
  for (const width of componentsOnly ? [] : [1280, 390]) {
    const size = { width, height: width === 1280 ? 720 : 844 }
    for (const page of [current, baseline, reference])
      await page.setViewportSize(size)
    await reference.goto(pathToFileURL(referencePath).href)
    // file:// navigation to the same URL can retain the preceding width's state.
    if (width !== 1280) {
      await reference.evaluate(() => {
        localStorage.clear()
        sessionStorage.clear()
      })
      await reference.reload()
    }
    await baseline.goto(
      'http://localhost:6017/iframe.html?id=materials-a1-01--complete-lesson&viewMode=story',
    )
    await baseline.locator('[data-current="true"]').waitFor()
    await current.goto(
      'http://localhost:6016/iframe.html?id=materials-a1-01--complete-lesson&viewMode=story',
    )
    await active().waitFor()
    for (const page of [reference, baseline, current]) await ready(page)
    for (const id of ids) {
      await goAll(id)
      const actual = await heading(current, `[data-slide-id="${id}"]`)
      const target = await heading(reference, `#${id}`)
      assert.match(actual.fontFamily, /Space Grotesk/)
      assert.ok(
        Math.abs(actual.fontSize - target.fontSize) <= 0.1,
        `Heading size: ${id} at ${width}`,
      )
      assert.ok(
        Math.abs(actual.x - target.x) <= 1,
        `Heading column: ${id} at ${width}`,
      )
      comparisons.push({
        id,
        viewport: size,
        target,
        actual,
        yDifference: actual.y - target.y,
      })
      await capture(`${id}-${width}`)
      if (Math.max(actual.pageHeight, target.pageHeight) > size.height + 2) {
        await goAll(id, true)
        await capture(`${id}-end-${width}`)
      }
    }
    await goAll('s1')
    const grid = active().locator('[class*="lsui-sc-vocabulary-grid"]')
    const boxes = await grid
      .getByRole('button')
      .evaluateAll((items) =>
        items.slice(0, 3).map((item) => item.getBoundingClientRect().top),
      )
    assert.equal(
      new Set(boxes).size,
      1,
      'Three vocabulary columns are retained on mobile',
    )
    for (const page of [current, baseline])
      await page
        .locator('[data-slide-id="s1"]')
        .getByRole('button', { name: 'Mostrar todas as palavras', exact: true })
        .click()
    await reference
      .locator('#s1')
      .getByRole('button', { name: 'Mostrar todas as palavras', exact: true })
      .click()
    await capture(`vocabulary-revealed-${width}`)
    await grid.getByRole('button').first().focus()
    await current.keyboard.press('Enter')
    await current.mouse.move(0, 0)
    assert.equal(
      await grid.getByRole('button').first().getAttribute('aria-expanded'),
      'true',
    )
    journeys.push({
      name: 'fixed-columns-and-keyboard-reveal',
      width,
      passed: true,
    })
    await goAll('s21')
    for (const page of [current, baseline])
      await page
        .locator('[data-slide-id="s21"] [data-ui-quiz-option]')
        .nth(1)
        .click()
    await reference.locator('#s21 .opt').nth(1).click()
    await active()
      .getByRole('status')
      .filter({ hasText: 'Cold é com frio.' })
      .waitFor()
    await capture(`warm-up-wrong-${width}`)
    for (const page of [current, baseline])
      await page
        .locator('[data-slide-id="s21"] [data-ui-quiz-option]')
        .nth(0)
        .click()
    await reference.locator('#s21 .opt').nth(0).click()
    await active().getByRole('status').filter({ hasText: 'Correto!' }).waitFor()
    await capture(`warm-up-correct-${width}`)
    await current.locator('[data-slide-viewport]').focus()
    await current.keyboard.press('PageDown')
    await current
      .locator('[data-slide-id="s22"][data-current="true"]')
      .waitFor()
    await current.getByRole('button', { name: 'Back', exact: true }).click()
    await current
      .locator('[data-slide-id="s21"][data-current="true"]')
      .waitFor()
    assert.equal(
      await active().locator('[data-ui-quiz-option]').first().isDisabled(),
      true,
    )
    journeys.push({
      name: 'keyboard-navigation-back-and-state',
      width,
      passed: true,
    })
    await goAll('s71')
    for (const page of [current, baseline])
      await page
        .locator('[data-slide-id="s71"]')
        .getByRole('button', { name: 'I’m from Brazil.', exact: true })
        .click()
    await reference.locator('#s71 .gx-ex').first().click()
    await capture(`grammar-translation-${width}`)
    await goAll('s17')
    for (const page of [current, baseline]) {
      await page
        .locator('[data-slide-id="s17"]')
        .getByRole('button', { name: /What’s your name/ })
        .click()
      await page
        .locator('[data-slide-id="s17"]')
        .getByRole('button', { name: /Yes, she is/ })
        .click()
    }
    await reference.locator('#s17 [data-act="mtq"]').first().click()
    await reference.locator('#s17 [data-act="mta"]').first().click()
    await capture(`matching-wrong-${width}`)
    for (const page of [current, baseline])
      await page
        .locator('[data-slide-id="s17"]')
        .getByRole('button', { name: /I’m Ana/ })
        .click()
    await reference.locator('#s17 [data-act="mta"]').nth(3).click()
    assert.equal(
      await active()
        .getByRole('button', { name: /What’s your name/ })
        .isDisabled(),
      true,
    )
    await capture(`matching-correct-${width}`)
    if (width === 390) {
      await go(current, 's17')
      const viewport = current.locator('[data-slide-viewport]')
      await viewport.focus()
      const start = await viewport.evaluate((element) => element.scrollTop)
      await current.keyboard.press('PageDown')
      await current.waitForFunction(
        (start) =>
          document.querySelector('[data-slide-viewport]').scrollTop >
          start + 20,
        start,
      )
      assert.equal(await active().getAttribute('data-slide-id'), 's17')
      journeys.push({
        name: 'oversized-slide-scrolls-before-page-change',
        passed: true,
      })
    }
    await goAll('s9')
    for (const page of [current, baseline]) {
      const section = page.locator('[data-slide-id="s9"]')
      await section
        .getByRole('button', { name: 'Ouvir áudio', exact: true })
        .click()
      await page.waitForFunction(() => document.querySelector('audio')?.ended)
      await section
        .getByRole('button', { name: 'Ouvir novamente', exact: true })
        .click()
      await section
        .getByRole('region', { name: 'Transcrição', exact: true })
        .getByText(/Hi/)
        .waitFor()
      await section
        .getByRole('button', { name: 'Pausar áudio', exact: true })
        .click()
    }
    await go(current, 's9')
    await go(baseline, 's9')
    await capture(`listening-transcript-${width}`, false)
    if (width === 390) {
      await go(current, 's9', false, true)
      await go(baseline, 's9', false, true)
      await capture(`listening-transcript-end-${width}`, false)
    }
    journeys.push({
      name: 'native-audio-second-listen-transcript',
      width,
      passed: true,
    })
    if (width === 1280) {
      await goAll('s1')
      for (const [page, prefix] of [
        [current, 'after'],
        [baseline, 'before'],
      ]) {
        const popupPromise = context.waitForEvent('page')
        await page
          .getByRole('button', { name: 'Notas da professora', exact: true })
          .click()
        const popup = await popupPromise
        await popup.setViewportSize({ width: 480, height: 720 })
        await popup
          .getByRole('heading', { name: 'Notas da professora · A1.01' })
          .waitFor()
        await frames(popup)
        await popup.screenshot({
          path: `${output}/${prefix}-private-notes-480.png`,
        })
        await go(page, 's21')
        await popup
          .getByRole('heading', { name: /Warm up · Choose the correct answer/ })
          .waitFor()
        assert.equal(
          await page
            .getByRole('heading', { name: 'Notas da professora · A1.01' })
            .count(),
          0,
        )
        await popup.close()
      }
      results.push({
        name: 'private-notes-480',
        viewport: { width: 480, height: 720 },
        kind: 'component',
        hasBaseline: true,
      })
      journeys.push({ name: 'private-notes-follow-active-page', passed: true })
    }
    console.log(
      `Captured all 26 pages, typography, columns, feedback and matching at ${width}px`,
    )
  }
  if (!componentsOnly)
    await writeFile(
      `${output}/lesson-checkpoint.json`,
      JSON.stringify({ results, comparisons, journeys }, null, 2) + '\n',
    )
  const stories = [
    ...[
      'default',
      'warm-up',
      'long-content',
      'narrow',
      'empty',
      'single-page',
      'controlled',
    ].map((name) => [`slide-slidedeck--${name}`, true]),
    ...['default', 'focused', 'inverse', 'long-heading', 'theme-override'].map(
      (name) => [`slide-slidepage--${name}`, true],
    ),
    ...[
      'default',
      'dark',
      'narrow-long-content',
      'contextual-scenes',
      'dark-scenes',
      'narrow-scenes',
    ].map((name) => [`exercise-components--${name}`, true]),
    ['quiz-quizoption--compact', true],
    ['voicemessage-voicemessageexercise--default', true],
    ['voicemessage-voicemessageexercise--in-slide-deck', true],
    ['slide-slidepage--reading', false],
    ['slide-slidepage--with-introduction', false],
    ['exercise-components--fixed-columns-with-tooltips', false],
  ]
  for (const [id, hasBaseline] of stories) {
    for (const width of [1280, 390]) {
      const size = { width, height: width === 1280 ? 720 : 844 }
      await current.setViewportSize(size)
      await current.goto(
        `http://localhost:6016/iframe.html?id=${id}&viewMode=story`,
      )
      await current.locator('#storybook-root').waitFor()
      await current.locator('[class*="lsui-sc-"]').first().waitFor()
      await ready(current)
      if (!id.endsWith('--empty'))
        assert.ok(
          (await current.locator('#storybook-root').innerText()) ||
            (await current.locator('#storybook-root img').count()),
          `Rendered content: ${id}`,
        )
      assert.equal(
        await current.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        `Story overflow: ${id}`,
      )
      await current.screenshot({ path: `${output}/after-${id}-${width}.png` })
      if (hasBaseline) {
        await baseline.setViewportSize(size)
        await baseline.goto(
          `http://localhost:6017/iframe.html?id=${id}&viewMode=story`,
        )
        await baseline.locator('#storybook-root').waitFor()
        await baseline.locator('[class*="lsui-sc-"]').first().waitFor()
        await ready(baseline)
        await baseline.screenshot({
          path: `${output}/before-${id}-${width}.png`,
        })
      }
      results.push({
        name: `${id}-${width}`,
        viewport: size,
        kind: 'component',
        hasBaseline,
      })
    }
  }
  assert.deepEqual(errors, [])
  assert.equal(
    createHash('sha256')
      .update(await readFile(referencePath))
      .digest('hex'),
    referenceHash,
  )
  await writeFile(
    `${output}/results.json`,
    JSON.stringify(
      {
        passed: true,
        referenceHash,
        baseline: '62848623cffa02211a9b14bd4419b0b10981d6d9',
        results,
        comparisons,
        journeys,
        errors,
      },
      null,
      2,
    ) + '\n',
  )
  console.log(
    `Passed ${results.length} visual states and ${journeys.length} interaction journeys`,
  )
} finally {
  await browser.close()
}
