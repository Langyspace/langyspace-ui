/* global window, document, innerWidth, requestAnimationFrame */
import { chromium } from 'playwright'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const out = '.github/evidence/b201',
  current = 'http://127.0.0.1:6033',
  baseline = 'http://127.0.0.1:6032',
  source = 'http://127.0.0.1:6034/index.html'
const capturePages = process.env.CAPTURE_PAGES?.split(',')
const prior = capturePages
  ? JSON.parse(await readFile(out + '/results.json', 'utf8'))
  : null
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
  's63',
  's7',
  's8',
  's9',
  's10',
  's11',
  's12',
]
for (const d of ['a', 'b']) await mkdir(out + '/' + d, { recursive: true })
const browser = await chromium.launch(),
  context = await browser.newContext({ reducedMotion: 'reduce' })
await context.addInitScript(() => {
  localStorage.clear()
  sessionStorage.clear()
  Date.now = () => 1794928000000
  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: {
      paused: false,
      getVoices: () => [],
      cancel() {},
      pause() {
        this.paused = true
      },
      resume() {
        this.paused = false
      },
      speak(u) {
        setTimeout(() => {
          u.onstart?.()
          setTimeout(() => u.onend?.(), 1)
        }, 0)
      },
    },
  })
})
const now = await context.newPage(),
  ref = await context.newPage(),
  old = await context.newPage(),
  errors = [],
  comparisons = [],
  screens = []
now.on('pageerror', (e) => errors.push(e.message))
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r)),
    )
  })
}
async function go(p, id, s = false) {
  await p
    .locator(s ? '#' + id : '[data-slide-id="' + id + '"]')
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  if (!s)
    await p
      .locator('[data-slide-id="' + id + '"][data-current="true"]')
      .waitFor()
  await ready(p)
  await p.mouse.move(0, 0)
}
async function shot(p, path, id, s = false) {
  const metrics = await p
    .locator(s ? '#' + id : '[data-slide-id="' + id + '"]')
    .evaluate((e) => ({
      width: e.clientWidth,
      height: e.clientHeight,
      scrollWidth: e.scrollWidth,
      viewportOverflow: document.documentElement.scrollWidth > innerWidth + 1,
      broken: [...e.querySelectorAll('img')]
        .filter((i) => !i.naturalWidth)
        .map((i) => i.getAttribute('src')),
    }))
  if (!s) {
    assert(metrics.scrollWidth <= metrics.width + 1, path)
    assert(!metrics.viewportOverflow, path)
    assert.deepEqual(metrics.broken, [], path)
  }
  await p.screenshot({ path: out + '/' + path })
  return metrics
}
async function pair(label, id, stem) {
  const b = 'b/' + stem + '.png',
    a = 'a/' + stem + '.png'
  const before = await shot(ref, b, id, true),
    after = await shot(now, a, id)
  comparisons.push({
    label,
    before: b,
    after: a,
    source: 'Claude artifact 1794927936-f09e',
  })
  screens.push({ label, id, before, after })
}
for (const [width, height] of [
  [1280, 800],
  [1280, 620],
  [390, 844],
]) {
  for (const p of [now, ref, old]) await p.setViewportSize({ width, height })
  await ref.goto(source)
  await now.goto(
    current + '/iframe.html?id=materials-b2-01--complete-lesson&viewMode=story',
  )
  await now.locator('[data-slide-id="s1"]').waitFor()
  assert.deepEqual(
    await now
      .locator('[data-slide-id]')
      .evaluateAll((es) => es.map((e) => e.dataset.slideId)),
    ids,
  )
  for (const id of ids.filter(
    (id) => !capturePages || capturePages.includes(id),
  )) {
    await go(ref, id, true)
    await go(now, id)
    await pair(
      id + ' ' + width + '×' + height,
      id,
      id + '-' + width + 'x' + height,
    )
  }
  if (height === 620) continue
  for (const [id, state] of [
    ['s2', 'revealed'],
    ['s32', 'options'],
    ['s4', 'unlocked'],
    ['s7', 'unlocked'],
    ['s8', 'swapped'],
    ['s9', 'answers'],
    ['s11', 'notes'],
  ]) {
    if (capturePages && !capturePages.includes(id)) continue
    await go(now, id)
    await go(ref, id, true)
    const n = now.locator('[data-slide-id="' + id + '"]'),
      r = ref.locator('#' + id)
    if (id === 's2') {
      await n.getByRole('button', { name: 'Show all', exact: true }).click()
      await r
        .getByRole('button', { name: 'Show all the words', exact: true })
        .click()
    }
    if (id === 's32') {
      await n.getByRole('button', { name: 'Show options', exact: true }).click()
      await r.getByRole('button', { name: 'Show options', exact: true }).click()
    }
    if (id === 's4' || id === 's7') {
      const nr = n.getByRole('button', { name: /Reveal (form|expression)/ })
      while (await nr.count()) await nr.first().click()
      const rr = r.locator(
        id === 's4' ? '[data-act="ex4"]' : '[data-act="grev"]',
      )
      while (await rr.count()) await rr.first().click()
    }
    if (id === 's8') {
      await n.getByRole('button', { name: '⇄ Swap roles', exact: true }).click()
      await r.getByRole('button', { name: '⇄ Swap roles', exact: true }).click()
    }
    if (id === 's9') {
      for (const [i, yes] of [false, true, false, false].entries()) {
        await n
          .locator('fieldset')
          .nth(i)
          .getByRole('button', { name: yes ? 'Yes' : 'No', exact: true })
          .click()
        await r
          .locator(
            '[data-act="waopt"][data-q="' +
              i +
              '"][data-i="' +
              (yes ? '0' : '1') +
              '"]',
          )
          .click()
      }
    }
    if (id === 's11') {
      await n
        .getByRole('textbox', { name: 'When? Where?', exact: true })
        .fill('Monday, New York')
      const fields = await r.getByRole('textbox').all()
      await fields[0].fill('Monday, New York')
    }
    await ready(now)
    await ready(ref)
    await pair(
      id + ' ' + state + ' ' + width,
      id,
      id + '-' + state + '-' + width,
    )
  }
  if (!capturePages)
    for (const [name, story, id] of [
      ['vocabulary', 'exercise-components--contextual-scenes'],
      ['tooltip', 'exercise-components--fixed-columns-with-tooltips'],
      ['voice', 'voicemessage-voicemessageexercise--default'],
    ]) {
      for (const [p, url] of [
        [now, current],
        [old, baseline],
      ]) {
        await p.goto(url + '/iframe.html?id=' + story + '&viewMode=story')
        await p.locator('#storybook-root > *').first().waitFor()
        await ready(p)
        if (id) await go(p, id)
      }
      const stem = 'regression-' + name + '-' + width
      await old.screenshot({ path: out + '/b/' + stem + '.png' })
      await now.screenshot({ path: out + '/a/' + stem + '.png' })
      comparisons.push({
        label: stem,
        before: 'b/' + stem + '.png',
        after: 'a/' + stem + '.png',
        source: 'UI 4f267a809c7aefdaf2592cf7b9a5a905a2f21d10',
      })
    }
  console.log('Captured ' + width + '×' + height)
}
assert.deepEqual(errors, [])
await writeFile(
  out + '/results.json',
  JSON.stringify(
    {
      reference: JSON.parse(
        await readFile('stories/materials/B201/source-provenance.json', 'utf8'),
      ),
      comparisons: [
        ...new Map(
          [...(prior?.comparisons ?? []), ...comparisons].map((x) => [
            x.label,
            x,
          ]),
        ).values(),
      ],
      screens: [
        ...new Map(
          [...(prior?.screens ?? []), ...screens].map((x) => [x.label, x]),
        ).values(),
      ],
      errors,
      speech:
        'Deterministic browser speech only for screenshots; native Raj MP3 tested without media mocks in verify-journeys.mjs.',
    },
    null,
    2,
  ) + '\n',
)
await browser.close()
console.log(
  comparisons.length +
    ' comparisons; no broken images, horizontal overflow or page errors.',
)
