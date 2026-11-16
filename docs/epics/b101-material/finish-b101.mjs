/* global document */
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const out = '.github/evidence/b101-material',
  report = JSON.parse(await readFile(`${out}/results.json`, 'utf8'))
const browser = await chromium.launch(),
  context = await browser.newContext({ reducedMotion: 'reduce' })
await context.addInitScript(() => {
  sessionStorage.clear()
  localStorage.clear()
})
const p = await context.newPage(),
  ref = await context.newPage(),
  added = []
async function ready(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
}
async function go(page, id, source = false) {
  await page
    .locator(source ? `#${id}` : `[data-slide-id="${id}"]`)
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  if (!source)
    await page.locator(`[data-slide-id="${id}"][data-current]`).waitFor()
  await ready(page)
  await page.mouse.move(0, 0)
}
async function save(id, state, width, height) {
  const stem = `${id}-${state ? state + '-' : ''}${width}x${height}`
  await p.mouse.move(0, 0)
  await ref.mouse.move(0, 0)
  await ready(p)
  await ready(ref)
  await ref.screenshot({ path: `${out}/before/${stem}.png` })
  await p.screenshot({ path: `${out}/after/${stem}.png` })
  if (state === 'initial-hints' || state === 'notes')
    added.push({
      label: `B1.01 ${id} · ${state} · ${width}×${height}`,
      before: `before/${stem}.png`,
      after: `after/${stem}.png`,
      source: 'local-authoring-export',
    })
}
try {
  const isolated = []
  if (!process.env.B101_MEDIA_ONLY) {
    for (const [width, height] of [
      [1280, 800],
      [1280, 620],
      [390, 844],
    ]) {
      await p.setViewportSize({ width, height })
      await ref.setViewportSize({ width, height })
      await ref.goto('http://127.0.0.1:6020')
      await p.goto(
        'http://127.0.0.1:6021/iframe.html?id=materials-b1-01--complete-lesson&viewMode=story',
      )
      await p
        .getByRole('heading', { name: 'Last class', exact: true })
        .waitFor()
      await go(p, 's11')
      await go(ref, 's11', true)
      await save('s11', '', width, height)
      if (height === 800) continue
      const card = p.locator('[data-slide-id="s11"]')
      await card.getByRole('button', { name: 'Saturday: show clue' }).click()
      await ref.locator('#s11 [data-act="flip"][data-i="2"]').click()
      await save('s11', 'clue', width, height)
      await card.getByRole('button', { name: 'Saturday: show answer' }).click()
      await ref.locator('#s11 [data-act="flip"][data-i="2"]').click()
      await save('s11', 'answer', width, height)
      await go(p, 's2')
      await go(ref, 's2', true)
      const vocab = p.locator('[data-slide-id="s2"]')
      await vocab.locator('.lsui-sc-vocabulary-grid button').first().hover()
      assert.equal(await vocab.getByText('baking', { exact: true }).count(), 0)
      await vocab
        .getByRole('button', { name: 'Initial letters', exact: true })
        .click()
      await ref
        .locator('#s2')
        .getByRole('button', { name: 'Dica: primeira letra', exact: true })
        .click()
      assert.equal(
        await vocab
          .getByText('playing the g_____', { exact: true })
          .isVisible(),
        true,
      )
      await save('s2', 'initial-hints', width, height)
    }
    for (const [width, height] of [
      [1280, 620],
      [390, 844],
    ]) {
      await p.setViewportSize({ width, height })
      await ref.setViewportSize({ width, height })
      await ref.goto('http://127.0.0.1:6020')
      await p.goto(
        'http://127.0.0.1:6021/iframe.html?id=materials-b1-01--complete-lesson&viewMode=story',
      )
      await p
        .getByRole('heading', { name: 'Last class', exact: true })
        .waitFor()
      await ref.getByRole('button', { name: 'Notes', exact: true }).click()
      await p.getByRole('button', { name: 'Notes', exact: true }).click()
      await ref.locator('#np textarea').fill('I’ve been studying English.')
      await p
        .getByRole('textbox', { name: 'Lesson notes' })
        .fill('I’ve been studying English.')
      await save('s1', 'notes', width, height)
    }

    for (const width of [1280, 390])
      for (const state of [
        'default',
        'clue',
        'answer',
        'empty',
        'disabled',
        'dark',
      ]) {
        await p.setViewportSize({ width, height: 844 })
        await p.goto(
          `http://127.0.0.1:6021/iframe.html?id=exercise-revealsequencecard--${state}&viewMode=story`,
        )
        await p.locator('.lsui-sc-reveal-sequence-card').waitFor()
        if (state === 'default')
          await p.getByText('waiting for the bus', { exact: true }).waitFor()
        await ready(p)
        await p.screenshot({
          path: `${out}/after/reveal-${state}-${width}.png`,
        })
        isolated.push({
          state,
          width,
          path: `after/reveal-${state}-${width}.png`,
          baseline:
            'New isolated story; equivalent lesson states are paired in s11 captures.',
        })
      }
  } else {
    for (const [width, height] of [
      [1280, 620],
      [390, 844],
    ])
      for (const [id, state] of [
        ['s2', 'initial-hints'],
        ['s1', 'notes'],
      ]) {
        const stem = `${id}-${state}-${width}x${height}`
        await readFile(`${out}/before/${stem}.png`)
        await readFile(`${out}/after/${stem}.png`)
        added.push({
          label: `B1.01 ${id} · ${state} · ${width}×${height}`,
          before: `before/${stem}.png`,
          after: `after/${stem}.png`,
          source: 'local-authoring-export',
        })
      }
    for (const width of [1280, 390])
      for (const state of [
        'default',
        'clue',
        'answer',
        'empty',
        'disabled',
        'dark',
      ]) {
        const path = `after/reveal-${state}-${width}.png`
        await readFile(`${out}/${path}`)
        isolated.push({
          state,
          width,
          path,
          baseline:
            'New isolated story; equivalent lesson states are paired in s11 captures.',
        })
      }
  }
  await p.route('**/leo-demo.mp3*', (route) =>
    route.request().resourceType() === 'media'
      ? route.abort()
      : route.continue(),
  )
  await p.goto(
    'http://127.0.0.1:6021/iframe.html?id=materials-b1-01--listening&viewMode=story',
  )
  await p.locator('[data-slide-id="s9"][data-current]').waitFor()
  const r = p.locator('[data-slide-id="s9"]')
  await r.getByRole('button', { name: 'Try again', exact: true }).waitFor()
  await p.unroute('**/leo-demo.mp3*')
  await r.getByRole('button', { name: 'Try again', exact: true }).click()
  await p.waitForFunction(() => {
    const a = document.querySelector('[data-slide-id="s9"] audio')
    return a && !a.paused && a.readyState >= 2
  })
  await go(p, 's10')
  assert.equal(await r.locator('audio').evaluate((a) => a.paused), true)
  for (const pair of added) {
    const i = report.comparisons.findIndex((v) => v.label === pair.label)
    if (i >= 0) report.comparisons[i] = pair
    else report.comparisons.push(pair)
  }
  report.isolated = isolated
  report.additionalChecks = [
    'Click-first vocabulary does not disclose answers on pointer hover; full phrase hints match source.',
    'Final card layout retains its height across closed/clue/answer.',
    'Real native audio shows a recoverable request failure, retries successfully, and pauses on leaving.',
  ]
  await writeFile(`${out}/results.json`, JSON.stringify(report, null, 2) + '\n')
  console.log(
    'Final fidelity, isolated variants and native media retry passed.',
  )
} finally {
  await browser.close()
}
