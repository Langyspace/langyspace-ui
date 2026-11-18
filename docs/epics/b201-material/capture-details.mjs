/* global document */
import { chromium, expect } from 'playwright/test'
import { readFile, writeFile } from 'node:fs/promises'
const output = '.github/evidence/b201',
  results = JSON.parse(await readFile(output + '/results.json', 'utf8'))
const browser = await chromium.launch(),
  context = await browser.newContext({ reducedMotion: 'reduce' })
const now = await context.newPage(),
  ref = await context.newPage()
await now.goto(
  'http://127.0.0.1:6033/iframe.html?id=materials-b2-01--complete-lesson&viewMode=story',
)
await ref.goto('http://127.0.0.1:6034/index.html')
for (const [p, sel] of [
  [now, '[data-slide-id="s9"]'],
  [ref, '#s9'],
])
  await p
    .locator(sel)
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
await now
  .getByRole('button', { name: 'Play Raj’s message', exact: true })
  .click()
await ref
  .getByRole('button', { name: 'Play Raj’s voice message', exact: true })
  .click()
// Seek only for deterministic visual state capture. Full unmocked first playback is separate journey evidence.
for (const [p, sel] of [
  [now, 'audio'],
  [ref, null],
])
  await p.evaluate(async (sel) => {
    const a = sel ? document.querySelector(sel) : globalThis.window.rajAudio
    if (!a.duration)
      await new Promise((r) =>
        a.addEventListener('loadedmetadata', r, { once: true }),
      )
    a.currentTime = a.duration - 0.06
  }, sel)
await expect(
  now.locator('[data-slide-id="s9"] [data-playback]'),
).toHaveAttribute('data-playback', 'ended')
await now.getByRole('button', { name: 'Listen again', exact: true }).click()
for (const [i, value] of [1, 0, 1, 1].entries())
  await ref
    .locator(`#s9 [data-act="waopt"][data-q="${i}"][data-i="${value}"]`)
    .click()
await ref
  .getByRole('button', { name: 'Listen again and check', exact: true })
  .click()
await expect(
  now.locator('[data-slide-id="s9"] [data-listens]'),
).toHaveAttribute('data-listens', '2')
await now.getByRole('button', { name: 'Pause', exact: true }).click()
await ref
  .getByRole('button', { name: 'Pause Raj’s voice message', exact: true })
  .click()
async function pair(label) {
  for (const [p, side] of [
    [ref, 'b'],
    [now, 'a'],
  ]) {
    await p.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(
        [...document.images].map((i) => i.decode().catch(() => {})),
      )
    })
    await p.screenshot({ path: output + '/' + side + '/' + label + '.png' })
  }
  results.comparisons.push({
    label,
    before: 'b/' + label + '.png',
    after: 'a/' + label + '.png',
    source: 'Claude artifact 1794927936-f09e',
  })
}
for (const [width, height] of [
  [1280, 800],
  [1280, 620],
  [390, 844],
]) {
  for (const p of [now, ref]) await p.setViewportSize({ width, height })
  await now
    .locator('[data-slide-id="s9"]')
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  await ref
    .locator('#s9')
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  for (const end of [false, true]) {
    await now
      .getByRole('region', { name: 'Conversa: Raj', exact: true })
      .evaluate((e, end) => (e.scrollTop = end ? e.scrollHeight : 0), end)
    await ref
      .locator('#s9 .ph-chat')
      .evaluate((e, end) => (e.scrollTop = end ? e.scrollHeight : 0), end)
    await pair('transcript-' + (end ? 'end-' : 'start-') + width + 'x' + height)
  }
}
results.visualMediaNote =
  'Seeking used only to arrange paired transcript screenshots; full 25.975147-second unmocked native first pass is verified separately in journeys-audio.json.'
await writeFile(
  output + '/results.json',
  JSON.stringify(results, null, 2) + '\n',
)
await browser.close()
console.log('Six paired transcript views captured.')
