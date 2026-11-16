import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { chromium } from 'playwright'

const root = process.cwd()
const catalogOnly = process.argv.includes('--catalog-only')
const evidence = path.join(root, '.github/evidence/a103-a106')
const references = path.resolve(root, '../claude-reference')
await fs.mkdir(evidence, { recursive: true })
const lessons = { A103: 17, A104: 16, A105: 16, A106: 20 }
const sourceFiles = Object.fromEntries(
  Object.keys(lessons).map((code) => [
    `/${code}.html`,
    path.join(references, `A1.0${code.at(-1)}`, 'current.html'),
  ]),
)
sourceFiles['/catalog.html'] = path.join(references, 'materials/index.html')
const referenceServer = http.createServer(async (request, response) => {
  const filename =
    sourceFiles[new URL(request.url, 'http://localhost').pathname]
  if (!filename) {
    response.writeHead(404).end()
    return
  }
  try {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.end(await fs.readFile(filename))
  } catch {
    response.writeHead(404).end()
  }
})
await new Promise((resolve) => referenceServer.listen(0, '127.0.0.1', resolve))
const referencePort = referenceServer.address().port
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const report = { lessons: [], interactionChecks: [], warnings: [] }
const errors = []
const story = (code) =>
  `http://localhost:6006/iframe.html?id=materials-a1-0${code.at(-1)}--complete-lesson&viewMode=story`
async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((image) => image.decode().catch(() => {})),
    )
  })
}
async function screenshot(page, filename) {
  await settle(page)
  await page.screenshot({
    path: path.join(evidence, filename),
    type: 'jpeg',
    quality: 80,
  })
}
try {
  for (const width of [1280, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 900 },
      reducedMotion: 'reduce',
    })
    const page = await context.newPage()
    page.on('pageerror', (error) => errors.push(error.message))
    const before = await context.newPage()
    for (const [code, count] of Object.entries(catalogOnly ? {} : lessons)) {
      await page.goto(story(code))
      await page.locator('[data-slide-id]').first().waitFor()
      assert.equal(
        await page.locator('[data-slide-id]').count(),
        count,
        `${code} screen count`,
      )
      await settle(page)
      const broken = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.getAttribute('src')),
        )
      assert.deepEqual(broken, [], `${code} missing images`)
      await before.goto(`http://127.0.0.1:${referencePort}/${code}.html`)
      await before.locator('#s1').waitFor()
      const slides = page.locator('[data-slide-id]')
      for (let index = 0; index < count; index++) {
        const slide = slides.nth(index)
        const id = await slide.getAttribute('data-slide-id')
        await slide.evaluate((element) =>
          element.scrollIntoView({ block: 'start', behavior: 'instant' }),
        )
        await page.waitForFunction(
          () =>
            !document.querySelector('[data-slide-viewport]') ||
            document.querySelector('[data-slide-viewport]').scrollWidth <=
              document.querySelector('[data-slide-viewport]').clientWidth + 2,
        )
        const overflow = await slide.evaluate(
          (element) => element.scrollWidth > element.clientWidth + 2,
        )
        assert.equal(
          overflow,
          false,
          `${code}/${id}/${width}: horizontal overflow`,
        )
        await screenshot(page, `after-${code}-${id}-${width}.jpg`)
        const original = before.locator(`#${id}`)
        if (await original.count()) {
          await original.evaluate((element) =>
            element.scrollIntoView({ block: 'start', behavior: 'instant' }),
          )
          await screenshot(before, `before-${code}-${id}-${width}.jpg`)
        } else
          report.warnings.push(`Original screen not addressable: ${code}/${id}`)
      }
      report.lessons.push({
        code,
        width,
        screens: count,
        imagesLoaded: true,
        horizontalOverflow: false,
      })
      console.log(
        `${code} ${width}px: ${count} screens rendered, no broken images/overflow`,
      )
    }
    await page.goto(
      'http://localhost:6006/iframe.html?id=materials-overview--materials&viewMode=story',
    )
    const search = page.getByRole('searchbox', { name: 'Buscar materiais' })
    await search.fill('street market')
    await page
      .getByRole('link', { name: /A1.05 At the street market/ })
      .waitFor()
    assert.equal(
      await page.getByRole('link', { name: /Abrir aula/ }).count(),
      1,
    )
    await screenshot(page, `after-catalog-search-${width}.jpg`)
    await search.fill('sem-resultado-qa')
    await page.getByRole('heading', { name: 'Nada encontrado' }).waitFor()
    await page.getByRole('button', { name: 'Limpar busca' }).click()
    await page.getByRole('link', { name: /A1.06 My home and my pet/ }).waitFor()
    await screenshot(page, `after-catalog-${width}.jpg`)
    await before.goto(`http://127.0.0.1:${referencePort}/catalog.html`)
    await before.getByRole('searchbox', { name: 'Buscar aulas' }).waitFor()
    await screenshot(before, `before-catalog-${width}.jpg`)
    await search.fill('airport')
    await page
      .getByRole('heading', { name: 'At the airport', exact: true })
      .waitFor()
    assert.equal(
      await page.getByRole('link', { name: /Abrir aula/ }).count(),
      0,
    )
    await search.fill('')
    await page.getByRole('button', { name: 'A2', exact: true }).click()
    await search.fill('My routine and right now')
    await page
      .getByRole('heading', { name: 'My routine and right now', exact: true })
      .waitFor()
    assert.equal(
      await page.getByRole('link', { name: /Abrir aula/ }).count(),
      0,
    )
    await screenshot(page, `after-catalog-a201-${width}.jpg`)
    report.interactionChecks.push(`catalog search/empty/clear ${width}px`)
    report.interactionChecks.push(
      `verified A1.07/A2.01 titles and honest availability ${width}px`,
    )
    if (catalogOnly) {
      await context.close()
      continue
    }
    await page.goto(story('A106'))
    await page.getByRole('button', { name: 'Notes', exact: true }).click()
    const note = page.getByRole('textbox', { name: 'Anotações da aula' })
    await note.fill('Nota temporária de verificação')
    await page.getByRole('button', { name: 'Done', exact: true }).click()
    await page.getByRole('button', { name: 'Notes', exact: true }).click()
    assert.equal(await note.inputValue(), 'Nota temporária de verificação')
    await page
      .getByRole('dialog')
      .getByRole('button', { name: 'Clear', exact: true })
      .click()
    await note.press('Escape')
    assert.equal(await page.getByRole('dialog').count(), 0)
    report.interactionChecks.push(`notes persist/clear/Escape ${width}px`)
    for (const [location, suffix] of [
      ['Sofa', 'home-sofa'],
      ['Bed', 'home-bed'],
      ['Table', 'home-table'],
      ['Box', 'home'],
    ]) {
      await page
        .getByRole('button', { name: `Mostrar Mia: ${location}`, exact: true })
        .click()
      const image = page.locator('[data-slide-id="s12"] img').first()
      assert.match(
        await image.getAttribute('src'),
        new RegExp(`scene-${suffix}\\.webp`),
      )
      await screenshot(
        page,
        `after-A106-found-${location.toLowerCase()}-${width}.jpg`,
      )
    }
    await page.getByRole('button', { name: 'Hide again', exact: true }).click()
    assert.match(
      await page
        .locator('[data-slide-id="s12"] img')
        .first()
        .getAttribute('src'),
      /scene-home-hidden\.webp/,
    )
    report.interactionChecks.push(`Mia four positions/hide ${width}px`)
    await context.close()
  }
  assert.deepEqual(errors, [], 'Browser runtime errors')
  report.browserErrors = errors
  report.result = 'passed'
  await fs.writeFile(
    path.join(evidence, catalogOnly ? 'report-catalog.json' : 'report.json'),
    JSON.stringify(report, null, 2) + '\n',
  )
  console.log('Scoped material verification passed.')
} catch (error) {
  report.result = 'failed'
  report.error = error.message
  await fs.writeFile(
    path.join(evidence, catalogOnly ? 'report-catalog.json' : 'report.json'),
    JSON.stringify(report, null, 2) + '\n',
  )
  throw error
} finally {
  await browser.close()
  referenceServer.close()
}
