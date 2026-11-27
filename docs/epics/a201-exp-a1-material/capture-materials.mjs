/* global window, document, innerWidth, requestAnimationFrame */
import { chromium } from 'playwright'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const out = '.github/evidence/a201-trial'
const current = 'http://127.0.0.1:6031',
  baseline = 'http://127.0.0.1:6032',
  source = 'http://127.0.0.1:6030'
const partial = ['a2', 'a2states'].includes(process.env.CAPTURE_GROUP)
const previous = partial
  ? JSON.parse(await readFile(out + '/results.json', 'utf8'))
  : null
const lessons = [
  {
    key: 'a2',
    story: 'materials-a2-01--complete-lesson',
    url: '/a2-01/saida/langy-a2-01.html',
    ids: [
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
    ],
  },
  {
    key: 't',
    story: 'materials-a1-trial--complete-lesson',
    url: '/experimentais/saida/langy-exp-a1.html',
    ids: ['s1', 's2', 's3', 's41', 's42', 's43', 's5', 's6'],
  },
]
const regressions = [
  ['call', 'exercise-ux-lab--call'],
  ['call2', 'exercise-ux-lab--advanced-call'],
  ['scene', 'exercise-ux-lab--explore-the-scene'],
  ['scene2', 'exercise-ux-lab--advanced-scene'],
  ['role', 'exercise-ux-lab--role-play'],
  ['slide', 'slide-slidepage--default'],
  ['split', 'slide-slidepage--split-introduction'],
  ['choice', 'choicecard--default'],
  ['choice0', 'choicecard--unselected'],
  ['choiceoff', 'choicecard--disabled'],
  ['context', 'exercise-components--contextual-scenes'],
  ['b1-vocab', 'materials-b1-01--complete-lesson', 's2'],
  ['b1', 'materials-b1-01--complete-lesson'],
  ['b1-listen', 'materials-b1-01--complete-lesson', 's9'],
  ['b1-role', 'materials-b1-01--complete-lesson', 's11'],
  ['b1-talk', 'materials-b1-01--complete-lesson', 's8'],
]
const added = [
  ['video', 'exercise-ux-lab--video-call'],
  ['labels', 'exercise-ux-lab--labeled-scene'],
  ['tracker', 'exercise-ux-lab--guided-role-play'],
  ['lesson', 'choicecard--lesson'],
  ['selected', 'choicecard--lesson-selected'],
  ['disabled', 'choicecard--lesson-disabled'],
  ['expanded', 'slide-slidepage--expanded'],
  ['regular', 'exercise-components--regular-scenes'],
]
for (const dir of ['a', 'b']) await mkdir(out + '/' + dir, { recursive: true })
const browser = await chromium.launch()
const context = await browser.newContext({ reducedMotion: 'reduce' })
await context.addInitScript(() => {
  localStorage.clear()
  sessionStorage.clear()
  Date.now = () => 1794906000000
  const synth = {
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
  }
  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: synth,
  })
})
const ref = await context.newPage(),
  now = await context.newPage(),
  old = await context.newPage()
const errors = [],
  screens = [],
  comparisons = []
now.on('pageerror', (e) => errors.push(e.message))
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
    await Promise.all(
      [...document.querySelectorAll('audio')].map((a) =>
        a.readyState || a.error
          ? null
          : new Promise((r) => {
              a.addEventListener('loadedmetadata', r, { once: true })
              a.addEventListener('error', r, { once: true })
              setTimeout(r, 2000)
            }),
      ),
    )
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r)),
    )
  })
}
async function go(p, id, isSource = false) {
  await p
    .locator(isSource ? '#' + id : '[data-slide-id="' + id + '"]')
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  if (!isSource)
    await p
      .locator('[data-slide-id="' + id + '"][data-current="true"]')
      .waitFor()
  await ready(p)
  await p.mouse.move(0, 0)
}
async function shot(p, path, id, isSource = false) {
  const metrics = await p
    .locator(isSource ? '#' + id : '[data-slide-id="' + id + '"]')
    .evaluate((e) => ({
      width: e.clientWidth,
      height: e.clientHeight,
      scrollWidth: e.scrollWidth,
      viewportOverflow: document.documentElement.scrollWidth > innerWidth + 1,
      broken: [...e.querySelectorAll('img')]
        .filter((i) => !i.naturalWidth)
        .map((i) => i.getAttribute('src')),
    }))
  if (!isSource) {
    assert(
      metrics.scrollWidth <= metrics.width + 1,
      path + ' horizontal overflow',
    )
    assert(!metrics.viewportOverflow, path + ' viewport overflow')
    assert.deepEqual(metrics.broken, [], path + ' missing images')
  }
  await p.screenshot({ path: out + '/' + path })
  return metrics
}
for (const [width, height] of [
  [1280, 800],
  [1280, 620],
  [390, 844],
]) {
  for (const p of [ref, now, old]) await p.setViewportSize({ width, height })
  for (const lesson of partial
    ? lessons.filter((l) => l.key === 'a2')
    : lessons) {
    await ref.goto(source + lesson.url)
    await now.goto(
      current + '/iframe.html?id=' + lesson.story + '&viewMode=story',
    )
    await now.locator('[data-slide-id="s1"]').waitFor()
    assert.deepEqual(
      await now
        .locator('[data-slide-id]')
        .evaluateAll((nodes) => nodes.map((n) => n.dataset.slideId)),
      lesson.ids,
    )
    for (const id of lesson.ids.filter(
      (id) => !process.env.CAPTURE_PAGE || id === process.env.CAPTURE_PAGE,
    )) {
      await go(ref, id, true)
      await go(now, id)
      const stem = lesson.key + '-' + id + '-' + width + 'x' + height
      const before = await shot(ref, 'b/' + stem + '.png', id, true),
        after = await shot(now, 'a/' + stem + '.png', id)
      screens.push({ lesson: lesson.key, id, width, height, before, after })
      comparisons.push({
        label: lesson.key + '.' + id + ' ' + width + '×' + height,
        before: 'b/' + stem + '.png',
        after: 'a/' + stem + '.png',
        source: 'frozen-authoring-export',
      })
    }
  }
  if (height !== 620 && !process.env.CAPTURE_PAGE) {
    for (const [name, story, id] of partial
      ? regressions.filter((r) => ['context', 'b1-vocab'].includes(r[0]))
      : regressions) {
      for (const [p, url] of [
        [old, baseline],
        [now, current],
      ]) {
        await p.goto(url + '/iframe.html?id=' + story + '&viewMode=story')
        await p.locator('#storybook-root > *').first().waitFor()
        await ready(p)
        if (id) await go(p, id)
      }
      const stem = 'r-' + name + '-' + width
      await old.screenshot({ path: out + '/b/' + stem + '.png' })
      await now.screenshot({ path: out + '/a/' + stem + '.png' })
      comparisons.push({
        label: name + ' ' + width,
        before: 'b/' + stem + '.png',
        after: 'a/' + stem + '.png',
        source: 'baseline-83b70fb',
      })
    }
    for (const [name, story] of partial
      ? added.filter((r) => r[0] === 'regular')
      : added) {
      await now.goto(current + '/iframe.html?id=' + story + '&viewMode=story')
      await now.locator('#storybook-root > *').first().waitFor()
      await ready(now)
      const stem = 'n-' + name + '-' + width
      await now.screenshot({ path: out + '/a/' + stem + '.png' })
      comparisons.push({
        label: name + ' ' + width,
        before: null,
        after: 'a/' + stem + '.png',
        source: 'new-story',
      })
    }
  }
  console.log('Captured ' + width + '×' + height)
}
assert.deepEqual(errors, [])
const manifest = JSON.parse(
  await readFile('.local/a201-exp-a1/reference/sources.json', 'utf8'),
)
const merge = (oldRows, newRows, key) => [
  ...new Map([...oldRows, ...newRows].map((row) => [key(row), row])).values(),
]
const mergedScreens = merge(previous?.screens ?? [], screens, (r) =>
  [r.lesson, r.id, r.width, r.height].join('/'),
)
const mergedComparisons = merge(
  previous?.comparisons ?? [],
  comparisons,
  (r) => r.label,
)
await writeFile(
  out + '/results.json',
  JSON.stringify(
    {
      baselineSha: '83b70fb78c8dbdbe1e649102050076c344bb4a54',
      reference: manifest,
      screens: mergedScreens,
      comparisons: mergedComparisons,
      errors,
      referenceSpeech:
        'Deterministic speech stub for UI capture only; native MP3 verified in separate unmocked browser journeys.',
    },
    null,
    2,
  ) + '\n',
)
await browser.close()
console.log(
  comparisons.length +
    ' comparisons captured; no horizontal overflow, missing images or page errors.',
)
