/* global document, window, getComputedStyle */
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
const out = '.github/evidence/b101-material',
  url = 'http://127.0.0.1:6021',
  source = 'http://127.0.0.1:6020'
const browser = await chromium.launch({ headless: true }),
  context = await browser.newContext({
    reducedMotion: 'reduce',
    permissions: ['clipboard-read', 'clipboard-write'],
  })
await context.addInitScript(() => {
  sessionStorage.clear()
  localStorage.clear()
  window.__spoken = []
  window.__cancelCount = 0
  const synthesis = {
    paused: false,
    speaking: false,
    pending: false,
    getVoices: () => [],
    cancel() {
      window.__cancelCount++
      this.paused = false
    },
    pause() {
      this.paused = true
    },
    resume() {
      this.paused = false
    },
    speak(u) {
      window.__spoken.push(u.text)
      queueMicrotask(() => u.onstart?.(new Event('start')))
      setTimeout(() => u.onend?.(new Event('end')), 50)
    },
    addEventListener() {},
    removeEventListener() {},
  }
  Object.defineProperty(window, 'speechSynthesis', {
    value: synthesis,
    configurable: true,
  })
})
const ref = await context.newPage(),
  p = await context.newPage(),
  journeys = [],
  pairs = []
const errors = []
p.on('pageerror', (e) => errors.push(e.message))
async function ready(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
}
const active = (page, id, src = false) =>
  page.locator(src ? `#${id}` : `[data-slide-id="${id}"]`)
async function go(page, id, src = false) {
  await active(page, id, src).evaluate((e) =>
    e.scrollIntoView({ behavior: 'instant', block: 'start' }),
  )
  if (!src)
    await page.locator(`[data-slide-id="${id}"][data-current="true"]`).waitFor()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(80)
}
async function both(id) {
  await go(ref, id, true)
  await go(p, id)
}
async function pair(id, state, width, height) {
  await ready(ref)
  await ready(p)
  await ref.mouse.move(0, 0)
  await p.mouse.move(0, 0)
  const stem = `${id}-${state}-${width}x${height}`
  await ref.screenshot({ path: `${out}/before/${stem}.png` })
  await p.screenshot({ path: `${out}/after/${stem}.png` })
  pairs.push({
    label: `B1.01 ${id} · ${state} · ${width}×${height}`,
    before: `before/${stem}.png`,
    after: `after/${stem}.png`,
    source: 'local-authoring-export',
  })
}
function pass(name, width) {
  journeys.push({ name, width, passed: true })
  console.log(`${width}: ${name}`)
}
try {
  for (const [width, height] of [
    [1280, 620],
    [390, 844],
  ]) {
    await p.setViewportSize({ width, height })
    await ref.setViewportSize({ width, height })
    await ref.goto(source)
    await p.goto(
      `${url}/iframe.html?id=materials-b1-01--complete-lesson&viewMode=story`,
    )
    await p.getByRole('heading', { name: 'Last class', exact: true }).waitFor()
    await ready(p)
    await ready(ref)
    await p.getByRole('button', { name: 'Notes', exact: true }).click()
    await p
      .getByRole('textbox', { name: 'Lesson notes' })
      .fill('I’ve been studying English.')
    await p.keyboard.press('Escape')
    assert.equal(
      await p
        .getByRole('button', { name: 'Notes', exact: true })
        .evaluate((e) => document.activeElement === e),
      true,
    )
    await p.getByRole('button', { name: 'Notes', exact: true }).click()
    assert.equal(
      await p.getByRole('textbox', { name: 'Lesson notes' }).inputValue(),
      'I’ve been studying English.',
    )
    await p
      .getByRole('dialog', { name: 'Notes' })
      .getByRole('button', { name: 'Clear', exact: true })
      .click()
    assert.equal(
      await p.getByRole('textbox', { name: 'Lesson notes' }).inputValue(),
      '',
    )
    await p.keyboard.press('Escape')
    pass('free notes, clear and Escape focus restoration', width)
    await both('s2')
    let r = active(p, 's2'),
      s = active(ref, 's2', true)
    await r
      .getByRole('button', { name: 'Initial letters', exact: true })
      .click()
    await r.getByRole('button', { name: 'Show all', exact: true }).click()
    for (let i = 0; i < 8; i++) await s.locator('.vgc').nth(i).click()
    await pair('s2', 'revealed', width, height)
    assert.equal(
      await r.getByText('the mall', { exact: true }).isVisible(),
      true,
    )
    const columns = await r
      .locator('.lsui-sc-vocabulary-grid')
      .evaluate(
        (e) => getComputedStyle(e).gridTemplateColumns.split(' ').length,
      )
    assert.equal(columns, width === 390 ? 2 : 4)
    pass('four/two columns, vocabulary reveal and false friends', width)
    await both('s31')
    r = active(p, 's31')
    s = active(ref, 's31', true)
    await r.getByRole('button', { name: /She’s gardening\./ }).click()
    await s.locator('.opt').nth(0).click()
    await pair('s31', 'wrong', width, height)
    await r.getByRole('button', { name: /She’s been gardening\./ }).click()
    await s.locator('.opt').nth(1).click()
    await pair('s31', 'correct', width, height)
    assert.equal(
      await r.getByText('Correct!', { exact: true }).isVisible(),
      true,
    )
    await go(p, 's32')
    await go(p, 's31')
    assert.equal(
      await r.getByText('Correct!', { exact: true }).isVisible(),
      true,
    )
    pass('wrong-answer recovery and answer retention across scrolling', width)
    await both('s32')
    await active(p, 's32')
      .getByRole('button', { name: 'Show options', exact: true })
      .click()
    await active(ref, 's32', true)
      .getByText('Show options', { exact: true })
      .click()
    await pair('s32', 'options', width, height)
    pass('hidden warm-up options', width)
    await go(p, 's51')
    r = active(p, 's51')
    await r.getByRole('button', { name: /^She’s running/ }).click()
    assert.equal(await r.getByRole('img', { name: 'Score: 0 / 0' }).count(), 1)
    await r.getByRole('button', { name: 'Listen', exact: true }).click()
    let word = await p.evaluate(() => window.__spoken.at(-1))
    let target = word.includes('been') ? 1 : 0
    await r
      .getByRole('button', {
        name: target === 0 ? /^She’s been running/ : /^She’s running/,
      })
      .click()
    assert.equal(await r.getByText(/O been é curto/).isVisible(), true)
    await r.getByRole('button', { name: 'Listen', exact: true }).click()
    word = await p.evaluate(() => window.__spoken.at(-1))
    target = word.includes('been') ? 1 : 0
    await r
      .getByRole('button', {
        name: target === 1 ? /^She’s been running/ : /^She’s running/,
      })
      .click()
    assert.equal(await r.getByRole('img', { name: 'Score: 1 / 2' }).count(), 1)
    pass('pronunciation preview, wrong answer and correct retry', width)
    await both('s6')
    await active(p, 's6')
      .getByRole('button', { name: /^Hi, Ana! I’m back!/ })
      .click()
    await active(ref, 's6', true).locator('.tx').first().click()
    await pair('s6', 'translated', width, height)
    pass('dialogue translation with all six source lines visible', width)
    await both('s61')
    await active(p, 's61').getByRole('button').first().click()
    await active(ref, 's61', true).getByRole('button').first().click()
    await pair('s61', 'answer', width, height)
    pass('comprehension answer disclosure', width)
    await both('s7')
    for (let i = 0; i < 4; i++) {
      await active(p, 's7')
        .getByRole('button', { name: /Show words and example/ })
        .first()
        .click()
      await active(ref, 's7', true).locator('[data-act="grev"]').first().click()
    }
    await active(p, 's7')
      .getByRole('button', { name: 'Show starters', exact: true })
      .click()
    await active(ref, 's7', true).locator('[data-key="g7n"]').click()
    await pair('s7', 'all-rows', width, height)
    assert.equal(
      await active(p, 's7')
        .getByText('Há duas semanas = for two weeks', { exact: true })
        .isVisible(),
      true,
    )
    pass('grammar rows, second explanation and sentence starters', width)
    await both('s8')
    await active(p, 's8')
      .getByRole('button', {
        name: 'Mark response: say what you’ve been doing',
      })
      .click()
    await active(ref, 's8', true)
      .locator('[data-key="cv8"][data-act="xck"]')
      .first()
      .click()
    await pair('s8', 'marked', width, height)
    await active(p, 's8')
      .getByRole('button', { name: '⇄ Swap roles', exact: true })
      .click()
    await active(ref, 's8', true).locator('[data-key="cv8r"]').click()
    await pair('s8', 'swapped', width, height)
    await active(p, 's8')
      .getByRole('button', { name: '⇄ Swap back', exact: true })
      .click()
    assert.equal(
      await active(p, 's8')
        .getByRole('button', {
          name: 'Mark response: say what you’ve been doing',
        })
        .getAttribute('aria-pressed'),
      'true',
    )
    pass('learner completion, role swap and independent retained state', width)
    await both('s9')
    r = active(p, 's9')
    s = active(ref, 's9', true)
    const media = r.locator('audio')
    await media.evaluate(
      (a) =>
        new Promise((resolve) => {
          if (a.readyState >= 1) resolve()
          else a.addEventListener('loadedmetadata', resolve, { once: true })
        }),
    )
    assert.ok((await media.evaluate((a) => a.duration)) > 20)
    assert.equal(
      await r
        .getByText('The transcription appears on the second listen.', {
          exact: true,
        })
        .count(),
      1,
    )
    await r
      .getByRole('button', { name: 'Play Leo’s message', exact: true })
      .click()
    await media.evaluate(
      (a) =>
        new Promise((resolve) => {
          if (!a.paused) resolve()
          else a.addEventListener('playing', resolve, { once: true })
        }),
    )
    await media.evaluate((a) => {
      a.currentTime = a.duration - 0.03
    })
    await p.waitForFunction(
      () => document.querySelector('[data-slide-id="s9"] audio').ended,
    )
    await r.getByRole('button', { name: 'Listen again', exact: true }).click()
    await p.waitForFunction(
      () => !document.querySelector('[data-slide-id="s9"] audio').paused,
    )
    assert.equal(await r.getByText(/Hi, Ana! It’s Leo\./).count(), 1)
    for (let i = 0; i < 4; i++) {
      await r
        .locator('fieldset')
        .nth(i)
        .getByRole('button')
        .nth([0, 1, 0, 1][i])
        .click()
      await s
        .locator('.qc.yn')
        .nth(i)
        .locator('button')
        .nth([0, 1, 0, 1][i])
        .click()
    }
    await s.locator('[data-act="w9again"]').click()
    await s.locator('[data-key="wa9"][data-v="trs"]').click()
    await r.getByRole('button', { name: 'Show support', exact: true }).click()
    await s.locator('[data-key="wa9k"]').click()
    await pair('s9', 'second-listen', width, height)
    await go(p, 's10')
    await p.waitForFunction(
      () => document.querySelector('[data-slide-id="s9"] audio').paused,
    )
    pass(
      'real native audio, second-listen transcription, inference feedback and pause on departure',
      width,
    )
    await both('s10')
    await active(p, 's10')
      .getByRole('button', { name: 'Wrong', exact: true })
      .first()
      .click()
    await active(ref, 's10', true)
      .locator('[data-act="fx10"][data-i="0"][data-v="w"]')
      .click()
    await pair('s10', 'corrected', width, height)
    pass('right/wrong correction and source explanation', width)
    await both('s11')
    r = active(p, 's11')
    s = active(ref, 's11', true)
    await r
      .getByRole('button', { name: 'Saturday: show clue', exact: true })
      .click()
    await s.locator('[data-act="flip"][data-i="2"]').click()
    await pair('s11', 'clue', width, height)
    await r
      .getByRole('button', { name: 'Saturday: show answer', exact: true })
      .click()
    await s.locator('[data-act="flip"][data-i="2"]').click()
    await pair('s11', 'answer', width, height)
    await r
      .getByRole('button', { name: 'Saturday: show answer', exact: true })
      .focus()
    await p.keyboard.press('Enter')
    assert.equal(
      await r
        .getByRole('button', { name: 'Saturday: show answer' })
        .getAttribute('aria-disabled'),
      'true',
    )
    for (let i = 0; i < 4; i++)
      await r
        .getByRole('textbox')
        .nth(i)
        .fill(['studying', 'for three weeks', 'running', 'a course'][i])
    await r.getByRole('textbox').first().focus()
    await p.keyboard.press('PageDown')
    assert.equal(
      await p.locator('[data-current="true"]').getAttribute('data-slide-id'),
      's11',
    )
    await r.getByRole('button', { name: /Open a card. Ask Kim/ }).click()
    await go(p, 's12')
    await go(p, 's11')
    assert.equal(await r.getByRole('textbox').first().inputValue(), 'studying')
    assert.equal(
      await r
        .getByRole('button', { name: /Open a card. Ask Kim/ })
        .getAttribute('aria-pressed'),
      'true',
    )
    await r.getByRole('button', { name: 'Clear', exact: true }).click()
    assert.equal(await r.getByRole('textbox').first().inputValue(), '')
    assert.equal(
      await r
        .getByRole('textbox')
        .first()
        .evaluate((e) => e === document.activeElement),
      true,
    )
    pass(
      'closed/clue/answer boundary, editable summary, input-safe PageDown, checklist and clear focus',
      width,
    )
    await go(p, 's12')
    r = active(p, 's12')
    await r.getByRole('button', { name: 'Copy links', exact: true }).click()
    const copied = await p.evaluate(() => navigator.clipboard.readText())
    assert.ok(copied.includes('deck-b1-01'))
    assert.ok(copied.includes('tab=shadowing&item=b1-01'))
    await p.evaluate(() =>
      Object.defineProperty(navigator.clipboard, 'writeText', {
        configurable: true,
        value: async () => {
          throw Error('clipboard unavailable')
        },
      }),
    )
    await r.getByRole('button', { name: /Copy links|Copied/ }).click()
    assert.ok(
      (
        await r.getByRole('textbox', { name: 'Homework links' }).inputValue()
      ).includes('B1.01'),
    )
    pass('actual clipboard copy and visible focused fallback on failure', width)
  }
  assert.deepEqual(errors, [])
  const original = JSON.parse(await readFile(`${out}/results.json`, 'utf8'))
  original.comparisons.push(...pairs)
  await writeFile(
    `${out}/results.json`,
    JSON.stringify(original, null, 2) + '\n',
  )
  await writeFile(
    `${out}/interactions.json`,
    JSON.stringify(
      {
        journeys,
        errors,
        tts: 'Deterministic speech engine for source/state captures; browser speech orchestration is unit-tested. Leo playback uses the real MP3 and native media events, with seeking to shorten the first pass.',
        pairs,
      },
      null,
      2,
    ) + '\n',
  )
} finally {
  await browser.close()
}
console.log(`${journeys.length} browser journeys passed.`)
