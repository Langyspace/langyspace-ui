/* global document, innerWidth, requestAnimationFrame */
import { chromium } from 'playwright'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
const out = '.github/evidence/b101-material'
const source = process.env.B101_REFERENCE_URL ?? 'http://127.0.0.1:6020'
const current = process.env.B101_STORYBOOK_URL ?? 'http://127.0.0.1:6021'
const baseline = process.env.B101_BASELINE_URL ?? 'http://127.0.0.1:6022'
const ids = [
  's1',
  's2',
  's31',
  's32',
  's33',
  's4',
  's51',
  's52',
  's6',
  's62',
  's61',
  's7',
  's8',
  's9',
  's10',
  's11',
  's12',
]
for (const name of ['before', 'after'])
  await mkdir(`${out}/${name}`, { recursive: true })
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  reducedMotion: 'reduce',
  permissions: ['clipboard-read', 'clipboard-write'],
})
const ref = await context.newPage(),
  react = await context.newPage(),
  old = await context.newPage()
const errors = [],
  results = [],
  comparisons = []
react.on('pageerror', (e) => errors.push(e.message))
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
}
async function goto(p, id, isSource = false) {
  await p
    .locator(isSource ? `#${id}` : `[data-slide-id="${id}"]`)
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  if (!isSource)
    await p.locator(`[data-slide-id="${id}"][data-current="true"]`).waitFor()
  await p.mouse.move(0, 0)
  await p.evaluate(
    () =>
      new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  )
}
async function snap(p, id, path, isSource = false) {
  await ready(p)
  const report = await p
    .locator(isSource ? `#${id}` : `[data-slide-id="${id}"]`)
    .evaluate((e) => ({
      width: e.clientWidth,
      height: e.clientHeight,
      scrollWidth: e.scrollWidth,
      overflow: e.scrollWidth > e.clientWidth + 1,
      viewportOverflow: document.documentElement.scrollWidth > innerWidth + 1,
    }))
  if (!isSource)
    assert.equal(report.overflow, false, `${path} horizontal overflow`)
  if (!isSource)
    assert.equal(report.viewportOverflow, false, `${path} viewport overflow`)
  await p.screenshot({ path: `${out}/${path}.png` })
  return report
}
for (const [width, height] of [
  [1280, 800],
  [1280, 620],
  [390, 844],
]) {
  for (const p of [ref, react, old]) await p.setViewportSize({ width, height })
  await ref.goto(source)
  await react.goto(
    `${current}/iframe.html?id=materials-b1-01--complete-lesson&viewMode=story`,
  )
  await react
    .getByRole('heading', { name: 'Last class', exact: true })
    .waitFor()
  assert.deepEqual(
    await react
      .locator('[data-slide-id]')
      .evaluateAll((nodes) => nodes.map((n) => n.dataset.slideId)),
    ids,
  )
  for (const id of ids) {
    await goto(ref, id, true)
    await goto(react, id)
    const stem = `${id}-${width}x${height}`
    const before = await snap(ref, id, `before/${stem}`, true),
      after = await snap(react, id, `after/${stem}`)
    results.push({ id, width, height, before, after })
    comparisons.push({
      label: `B1.01 ${id} · default · ${width}×${height}`,
      before: `before/${stem}.png`,
      after: `after/${stem}.png`,
      source: 'local-authoring-export',
    })
  }
  const stories = [
    'slide-slidepage--default',
    'slide-slidepage--with-introduction',
    'exercise-components--fixed-columns-with-tooltips',
    'exercise-ux-lab--hidden-grammar',
    'materials-a1-01--dialogue',
    'materials-a1-01--complete-lesson',
  ]
  if (height !== 620)
    for (const story of stories) {
      const response = await fetch(`${current}/index.json`),
        index = await response.json()
      if (!index.entries[story]) throw Error(`Story missing: ${story}`)
      for (const [p, url] of [
        [old, baseline],
        [react, current],
      ]) {
        await p.goto(`${url}/iframe.html?id=${story}&viewMode=story`)
        await p.locator('#storybook-root').waitFor()
        await ready(p)
        await p.waitForTimeout(150)
      }
      const stem = `${story}-${width}x${height}`
      await old.screenshot({ path: `${out}/before/${stem}.png` })
      await react.screenshot({ path: `${out}/after/${stem}.png` })
      comparisons.push({
        label: `Existing ${story} · ${width}×${height}`,
        before: `before/${stem}.png`,
        after: `after/${stem}.png`,
        source: 'main-1bb191a',
      })
    }
  console.log(`Captured ${width}×${height}`)
}
assert.deepEqual(errors, [])
const hash = createHash('sha256')
  .update(await readFile('.local/b101/reference/published.html'))
  .digest('hex')
await writeFile(
  `${out}/results.json`,
  JSON.stringify(
    {
      referenceHash: hash,
      referenceVersion: 'local-export-2026-11-16T20:47:10Z',
      baselineSha: '1bb191ad5f66be08c97b17594a2b3906086fd09e',
      screens: results,
      comparisons,
      errors,
    },
    null,
    2,
  ) + '\n',
)
await browser.close()
console.log(
  `Saved ${comparisons.length} paired captures; React has no horizontal overflow or page errors.`,
)
