/* global document, innerWidth, getComputedStyle */
import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const output = '.github/evidence/material-dark'
for (const d of ['before', 'after'])
  await mkdir(output + '/' + d, { recursive: true })
const lessons = [
  ['a1-01', 'materials-a1-01'],
  ['a2-01', 'materials-a2-01'],
  ['b1-01', 'materials-b1-01'],
  ['b2-01', 'materials-b2-01'],
  ['trial-a1-a2', 'materials-a1-trial'],
]
const browser = await chromium.launch(),
  context = await browser.newContext({
    reducedMotion: 'reduce',
    colorScheme: 'light',
  }),
  before = await context.newPage(),
  after = await context.newPage(),
  rows = [],
  metrics = [],
  errors = []
after.on('pageerror', (e) => errors.push(e.message))
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
}
async function go(p, id) {
  await p
    .locator('[data-slide-id="' + id + '"]')
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  await p.locator('[data-slide-id="' + id + '"][data-current="true"]').waitFor()
  await ready(p)
}
async function pair(key, id) {
  for (const [p, side] of [
    [before, 'before'],
    [after, 'after'],
  ]) {
    await p.mouse.move(0, 0)
    await p.screenshot({
      path: output + '/' + side + '/' + key + '.jpg',
      type: 'jpeg',
      quality: 85,
    })
  }
  rows.push({
    label: key,
    before: 'before/' + key + '.jpg',
    after: 'after/' + key + '.jpg',
  })
  if (id) {
    const m = await after
      .locator('[data-slide-id="' + id + '"]')
      .evaluate((e) => ({
        w: e.clientWidth,
        s: e.scrollWidth,
        bg: getComputedStyle(e.firstElementChild).backgroundColor,
        fg: getComputedStyle(e.firstElementChild).color,
        broken: [...e.querySelectorAll('img')].filter((i) => !i.naturalWidth)
          .length,
        viewport: document.documentElement.scrollWidth <= innerWidth + 1,
      }))
    assert(m.s <= m.w + 1 && !m.broken && m.viewport, key)
    assert.equal(m.bg, 'rgb(11, 11, 12)', key + ' forced dark')
    metrics.push({ key, ...m })
  }
}
try {
  for (const [width, height] of [
    [1280, 800],
    [1280, 620],
    [390, 844],
  ]) {
    for (const p of [before, after]) await p.setViewportSize({ width, height })
    for (const [key] of lessons) {
      await before.goto(
        'http://127.0.0.1:6032/index.html?studentPortalOrigin=https://student.staging.langy.space#' +
          key,
        { waitUntil: 'domcontentloaded' },
      )
      await after.goto(
        'http://127.0.0.1:6033/index.html?studentPortalOrigin=https://student.staging.langy.space#' +
          key,
        { waitUntil: 'domcontentloaded' },
      )
      await before.reload({ waitUntil: 'domcontentloaded' })
      await after.reload({ waitUntil: 'domcontentloaded' })
      await after.locator('[data-slide-id="s1"]').waitFor()
      await before.locator('[data-slide-id="s1"]').waitFor()
      await ready(before)
      await ready(after)
      const ids = await after
        .locator('[data-slide-id]')
        .evaluateAll((es) => es.map((e) => e.dataset.slideId))
      assert.deepEqual(
        ids,
        await before
          .locator('[data-slide-id]')
          .evaluateAll((es) => es.map((e) => e.dataset.slideId)),
      )
      for (const id of ids) {
        await go(before, id)
        await go(after, id)
        await pair(key + '-' + id + '-' + width + 'x' + height, id)
      }
      console.log(key, width, height, ids.length, 'pages passed')
      // The OS preference never selects the lesson theme.
      await after.emulateMedia({ colorScheme: 'dark' })
      await go(after, 's1')
      assert.equal(
        await after
          .locator('[data-slide-id="s1"] > div')
          .first()
          .evaluate((e) => getComputedStyle(e).backgroundColor),
        'rgb(11, 11, 12)',
      )
      await after.emulateMedia({ colorScheme: 'light' })
    }
  }
  assert.deepEqual(errors, [])
  await writeFile(
    output + '/pages.json',
    JSON.stringify(
      {
        baseline:
          'UI producer59097dc6756392b03c71c2939e6ca3956425ee48 / Teacher cdd32a79 frozen runtime',
        rows,
        metrics,
        errors,
      },
      null,
      2,
    ) + '\n',
  )
} finally {
  await browser.close()
}
