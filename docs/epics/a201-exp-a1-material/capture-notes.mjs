/* global document */
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
const root = '.github/evidence/a201-trial'
const browser = await chromium.launch()
const context = await browser.newContext({ reducedMotion: 'reduce' })
const before = await context.newPage(),
  after = await context.newPage()
const pairs = []
for (const width of [1280, 390]) {
  for (const page of [before, after])
    await page.setViewportSize({ width, height: width === 1280 ? 620 : 844 })
  for (const kind of ['source', 'baseline']) {
    const story = kind === 'source' ? 'materials-a2-01' : 'materials-b1-01'
    await before.goto(
      kind === 'source'
        ? 'http://127.0.0.1:6030/a2-01/saida/langy-a2-01.html'
        : `http://127.0.0.1:6032/iframe.html?id=${story}--complete-lesson&viewMode=story`,
    )
    await after.goto(
      `http://127.0.0.1:6031/iframe.html?id=${story}--complete-lesson&viewMode=story`,
    )
    for (const page of [before, after]) {
      await page.getByRole('button', { name: 'Notes', exact: true }).click()
      await page
        .locator('textarea')
        .filter({ visible: true })
        .fill('usually = normalmente\nThis week I’m working in Porto.')
      await page.evaluate(async () => {
        await document.fonts.ready
        await Promise.all(
          [...document.images].map((i) => i.decode().catch(() => {})),
        )
      })
      await page.mouse.move(0, 0)
    }
    const file = 'x-' + kind + '-notes-' + width + '.png'
    await before.screenshot({ path: root + '/b/' + file })
    await after.screenshot({ path: root + '/a/' + file })
    pairs.push({
      label: kind + ' notes ' + width,
      before: 'b/' + file,
      after: 'a/' + file,
      source:
        kind === 'source' ? 'frozen-authoring-export' : 'baseline-83b70fb',
    })
  }
}
const r = JSON.parse(await readFile(root + '/results.json', 'utf8'))
r.comparisons = [
  ...new Map([...r.comparisons, ...pairs].map((x) => [x.label, x])).values(),
]
await writeFile(root + '/results.json', JSON.stringify(r, null, 2) + '\n')
await browser.close()
console.log('Four Notes state comparisons captured.')
