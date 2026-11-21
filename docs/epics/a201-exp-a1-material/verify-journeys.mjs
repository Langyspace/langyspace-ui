/* global window, document */
import { chromium, expect } from 'playwright/test'
import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
const out = '.github/evidence/a201-trial'
const a2 = JSON.parse(
  await readFile('stories/materials/A201/A201.content.json', 'utf8'),
)
const trial = JSON.parse(
  await readFile('stories/materials/TrialA1/TrialA1.content.json', 'utf8'),
)
const browser = await chromium.launch()
const context = await browser.newContext({ reducedMotion: 'reduce' })
await context.addInitScript(() => {
  localStorage.clear()
  sessionStorage.clear()
  window.__spoken = []
  window.__cancels = 0
  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: {
      paused: false,
      getVoices: () => [],
      cancel() {
        window.__cancels++
      },
      pause() {
        this.paused = true
      },
      resume() {
        this.paused = false
      },
      speak(u) {
        window.__spoken.push(u.text)
        setTimeout(() => {
          u.onstart?.()
          if (!window.__holdSpeech) setTimeout(() => u.onend?.(), 10)
        }, 0)
      },
    },
  })
})
const p = await context.newPage(),
  ref = await context.newPage()
const errors = [],
  checks = [],
  pairs = []
ref.on('pageerror', (e) => console.log('Reference error:', e.message))
p.on('pageerror', (e) => errors.push(e.message))
let current
async function go(id) {
  await p
    .locator(`[data-slide-id="${id}"]`)
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
  await expect(p.locator(`[data-slide-id="${id}"]`)).toHaveAttribute(
    'data-current',
    'true',
  )
  current = p.locator(`[data-slide-id="${id}"]`)
  await expect(current).toBeVisible()
}
async function load(kind, id = 's1') {
  const story = kind === 'a2' ? 'materials-a2-01' : 'materials-a1-trial'
  await p.goto(
    `http://127.0.0.1:6031/iframe.html?id=${story}--complete-lesson&viewMode=story`,
  )
  await p.locator('[data-slide-id="s1"]').waitFor()
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
  await go(id)
  await ref.goto(
    'http://127.0.0.1:6030/' +
      (kind === 'a2'
        ? 'a2-01/saida/langy-a2-01.html'
        : 'experimentais/saida/langy-exp-a1.html'),
  )
}
async function sourceGo(id) {
  await ref
    .locator('#' + id)
    .evaluate((e) => e.scrollIntoView({ behavior: 'instant', block: 'start' }))
}
async function shot(key, id, width) {
  await go(id)
  await sourceGo(id)
  for (const page of [p, ref]) {
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(
        [...document.images].map((i) => i.decode().catch(() => {})),
      )
    })
    await page.mouse.move(0, 0)
  }
  const stem = 'x-' + key + '-' + width
  await ref.screenshot({ path: out + '/b/' + stem + '.png' })
  await p.screenshot({ path: out + '/a/' + stem + '.png' })
  pairs.push({
    label: key + ' ' + width,
    before: 'b/' + stem + '.png',
    after: 'a/' + stem + '.png',
    source: 'frozen-authoring-export',
  })
  const m = await current.evaluate((e) => ({
    width: e.clientWidth,
    scroll: e.scrollWidth,
    broken: [...e.querySelectorAll('img')].filter((i) => !i.naturalWidth)
      .length,
  }))
  assert(m.scroll <= m.width + 1 && !m.broken, key)
}
const b = (name, exact = true) => current.getByRole('button', { name, exact })
if (!process.env.JOURNEY_PART || process.env.JOURNEY_PART === 'states')
  for (const width of [1280, 390]) {
    await p.setViewportSize({ width, height: width === 1280 ? 620 : 844 })
    await ref.setViewportSize({ width, height: width === 1280 ? 620 : 844 })
    await load('a2', 's2')
    await sourceGo('s2')
    await b('Initial letters').click()
    await ref
      .locator('#s2 [data-act="vgt"][data-v="hint"]')
      .dispatchEvent('click')
    await expect(b('Initial letters')).toHaveAttribute('aria-pressed', 'true')
    await shot('a2.hints', 's2', width)
    await b('Show all').click()
    await ref
      .locator('#s2 [data-act="vgt"][data-v="all"]')
      .dispatchEvent('click')
    for (const v of a2.vocabulary)
      await expect(current.getByText(v.en, { exact: true })).toBeVisible()
    await shot('a2.words', 's2', width)
    await go('s4')
    await b('Show all').click()
    for (const v of a2.actions)
      await expect(current.getByText(v.en, { exact: true })).toBeVisible()
    await go('s31')
    await sourceGo('s31')
    await b(/I’m in the river/, false).click()
    await ref
      .locator('#s31 [data-act="pick"][data-v="1"]')
      .dispatchEvent('click')
    await expect(current.getByText(/dentro da água/)).toBeVisible()
    await shot('a2.wrong', 's31', width)
    await b(/I’m next to the river/, false).click()
    await ref
      .locator('#s31 [data-act="pick"][data-v="0"]')
      .dispatchEvent('click')
    await expect(current.getByText('Now you', { exact: true })).toBeVisible()
    await shot('a2.correct', 's31', width)
    for (const [id, index] of [
      ['s32', 1],
      ['s33', 2],
    ]) {
      await go(id)
      if (index === 1) await b('Show options').click()
      await b(
        new RegExp(
          a2.warmUps[index].o[a2.warmUps[index].a].replace(/[.?]/g, '\\$&'),
        ),
        false,
      ).click()
      await expect(current.getByText('Correct!', { exact: true })).toBeVisible()
    }
    await go('s7')
    await sourceGo('s7')
    for (let i = 0; i < 4; i++) {
      await current
        .getByRole('button', { name: /^Mostrar a palavra e o exemplo:/ })
        .first()
        .click()
      await ref
        .getByRole('button', {
          name: 'Mostrar a palavra e o exemplo',
          exact: true,
        })
        .first()
        .dispatchEvent('click')
    }
    await expect(current.getByText('Ela e ele', { exact: true })).toBeVisible()
    await b('Mostrar começos de frase').click()
    await ref
      .locator('#s7 [data-key="g7n"][data-act="xt"]')
      .dispatchEvent('click')
    await shot('a2.grammar', 's7', width)
    if (width === 390) {
      await b('Esconder começos de frase').scrollIntoViewIfNeeded()
      await ref
        .locator('#s7 [data-key="g7n"]')
        .last()
        .evaluate((e) =>
          e.scrollIntoView({ block: 'end', behavior: 'instant' }),
        )
      const stem = 'x-a2.grammar-end-390'
      await p.screenshot({ path: out + '/a/' + stem + '.png' })
      await ref.screenshot({ path: out + '/b/' + stem + '.png' })
      pairs.push({
        label: 'a2.grammar-end 390',
        before: 'b/' + stem + '.png',
        after: 'a/' + stem + '.png',
        source: 'frozen-authoring-export',
      })
    }
    await go('s8')
    await sourceGo('s8')
    await b('⇄ Swap roles').click()
    await ref.getByRole('button', { name: /Swap roles/ }).dispatchEvent('click')
    await current
      .getByRole('button', { name: /Marcar resposta:/ })
      .first()
      .click()
    await shot('a2.swapped', 's8', width)
    await go('s11')
    await sourceGo('s11')
    await b('Bad signal').click()
    await ref
      .getByRole('button', { name: 'Bad signal', exact: true })
      .dispatchEvent('click')
    await shot('a2.signal', 's11', width)
    await b('End call').click()
    await ref
      .getByRole('button', { name: 'End call', exact: true })
      .dispatchEvent('click')
    await expect(b('Call again')).toBeVisible()
    await shot('a2.ended', 's11', width)
    await b('Call again').click()
    await ref
      .getByRole('button', { name: 'Call again', exact: true })
      .dispatchEvent('click')
    await current
      .getByLabel('Agora', { exact: true })
      .fill('Kim is in the park. She’s walking.')
    await current
      .getByLabel('Normalmente', { exact: true })
      .fill('She usually works in the morning.')
    await ref
      .locator('[data-fic="0"]')
      .fill('Kim is in the park. She’s walking.')
    await ref
      .locator('[data-fic="1"]')
      .fill('She usually works in the morning.')
    const steps = current.locator('button[aria-current="step"]')
    for (let i = 0; i < 4; i++) await steps.first().click()
    for (let i = 0; i < 4; i++)
      await ref
        .locator(`#s11 [data-key="rp11"][data-i="${i}"]`)
        .dispatchEvent('click')
    await shot('a2.summary', 's11', width)
    await b('Clear').click()
    await expect(current.getByLabel('Agora', { exact: true })).toBeFocused()
    await load('t')
    for (const q of trial.p1.cards) await b(q.q).click()
    for (let i = 0; i < 3; i++)
      await ref
        .locator(`#s1 [data-key="lm"][data-v="t${i}"]`)
        .dispatchEvent('click')
    await shot('t.translations', 's1', width)
    await go('s2')
    await sourceGo('s2')
    for (let i = 0; i < 6; i++) {
      await b('Ouvir: ' + trial.p2.items[i].en).click()
      await ref
        .locator(`#s2 [data-act="ptl"][data-v="${i}"]`)
        .dispatchEvent('click')
    }
    const boxes = await current
      .locator('button[aria-label^="Ouvir:"]')
      .evaluateAll((es) =>
        es.map((e) => {
          const r = e.getBoundingClientRect()
          return { x: r.x, y: r.y, w: r.width, h: r.height }
        }),
      )
    for (let i = 0; i < boxes.length; i++) {
      const a = boxes[i]
      assert(a.x >= 0 && a.x + a.w <= width, 'hotspot bounds')
      for (let j = i + 1; j < boxes.length; j++) {
        const c = boxes[j]
        assert(
          !(
            a.x < c.x + c.w &&
            a.x + a.w > c.x &&
            a.y < c.y + c.h &&
            a.y + a.h > c.y
          ),
          'hotspot overlap',
        )
      }
    }
    await shot('t.visited', 's2', width)
    await go('s41')
    await sourceGo('s41')
    await b('movies').click()
    await ref
      .locator('#s41 [data-act="ttp"][data-s="a"]')
      .dispatchEvent('click')
    await shot('t.preference', 's41', width)
    await b('music').click()
    await expect(b('movies')).toHaveAttribute('aria-pressed', 'false')
    await b('music').click()
    await expect(b('music')).toHaveAttribute('aria-pressed', 'false')
    await go('s5')
    await sourceGo('s5')
    for (let i = 0; i < 9; i++) {
      await b([...trial.p5.qs, ...trial.p5.go][i][1]).click()
      await ref
        .locator(`#s5 [data-act="xck"][data-i="${i}"]`)
        .dispatchEvent('click')
    }
    assert.equal(
      await current.locator('button[aria-pressed="true"]').count(),
      9,
    )
    await shot('t.conversation', 's5', width)
    await go('s6')
    await go('s5')
    assert.equal(
      await current.locator('button[aria-pressed="true"]').count(),
      9,
    )
    checks.push({
      width,
      result:
        'Vocabulary hints/reveals, three warmups, grammar unlock, swapped roles, poor/ended/restarted call, four steps, summary/clear focus, three greetings, six hotspot bounds/no-overlap, exclusive reversible preferences and nine retained conversation checks passed.',
    })
  }
if (!process.env.JOURNEY_PART || process.env.JOURNEY_PART === 'audio') {
  // Detailed native media and navigation checks: HTMLAudio is never mocked.
  await p.setViewportSize({ width: 1280, height: 620 })
  await ref.setViewportSize({ width: 1280, height: 620 })
  await load('a2', 's9')
  await sourceGo('s9')
  const audio = current.locator('audio'),
    playback = current.locator('[data-playback]')
  await expect
    .poll(() => audio.evaluate((a) => a.readyState))
    .toBeGreaterThan(0)
  const nativeSrc = await audio.evaluate((a) => a.src)
  const duration = await audio.evaluate((a) => a.duration)
  assert(duration > 10 && duration < 90)
  await b('Play Kim’s message').click()
  await expect(playback).toHaveAttribute('data-listens', '1')
  await expect
    .poll(() => audio.evaluate((a) => a.currentTime))
    .toBeGreaterThan(0.2)
  await b('Playback speed: 1x').click()
  assert.equal(await audio.evaluate((a) => a.playbackRate), 0.75)
  await b('Pause').click()
  await expect(playback).toHaveAttribute('data-playback', 'paused')
  await b('Play Kim’s message').click()
  await expect(playback).toHaveAttribute('data-listens', '1')
  await b('Playback speed: 0.75x').click()
  // Complete the native first pass without synthetic media events or seeking.
  await expect(playback).toHaveAttribute('data-playback', 'ended', {
    timeout: 25000,
  })
  await expect(
    current.getByText(a2.listening.transcript, { exact: false }),
  ).toHaveCount(0)
  await b('Listen again').click()
  await expect(playback).toHaveAttribute('data-listens', '2')
  await expect(
    current.getByRole('region', { name: 'Transcription' }),
  ).toContainText(a2.listening.transcript)
  for (let i = 0; i < 4; i++) {
    const group = current.getByRole('group', {
      name: new RegExp('^' + (i + 1) + '\\.'),
    })
    await group
      .getByRole('button', {
        name: a2.listening.questions[i].o[a2.listening.questions[i].a],
        exact: true,
      })
      .click()
    await ref
      .locator(`#s9 [data-q="${i}"][data-i="${a2.listening.questions[i].a}"]`)
      .dispatchEvent('click')
  }
  await ref
    .getByRole('button', { name: 'Listen again and check', exact: true })
    .dispatchEvent('click')

  await ref.locator('[data-k="wa9-trs"]').dispatchEvent('click')
  await b('Pause').click()
  await shot('a2.transcript', 's9', 1280)
  await current
    .getByRole('region', { name: 'Conversa: Kim' })
    .evaluate((e) => (e.scrollTop = e.scrollHeight))
  await ref
    .locator('#s9 .ph-chat')
    .evaluate((e) => (e.scrollTop = e.scrollHeight))
  await shot('a2.transcript-end', 's9', 1280)
  await p.setViewportSize({ width: 390, height: 844 })
  await ref.setViewportSize({ width: 390, height: 844 })
  await current
    .getByRole('region', { name: 'Conversa: Kim' })
    .evaluate((e) => (e.scrollTop = 0))
  await ref.locator('#s9 .ph-chat').evaluate((e) => (e.scrollTop = 0))
  await shot('a2.transcript', 's9', 390)
  await current
    .getByRole('region', { name: 'Conversa: Kim' })
    .evaluate((e) => (e.scrollTop = e.scrollHeight))
  await ref
    .locator('#s9 .ph-chat')
    .evaluate((e) => (e.scrollTop = e.scrollHeight))
  await shot('a2.transcript-end', 's9', 390)
  await b('Play Kim’s message').click()
  await go('s10')
  assert.equal(await audio.evaluate((a) => a.paused), true)
  await go('s9')
  await b('Play Kim’s message').click()
  await expect(playback).toHaveAttribute('data-listens', '2')
  await b('Pause').click()
  await audio.evaluate((a) => {
    a.src = '/missing-kim.mp3'
    a.load()
  })
  await expect(
    current.getByRole('alert').filter({ hasText: 'Não foi possível tocar' }),
  ).toBeVisible()
  // Restore exact built asset URL after a genuine network failure.
  assert(nativeSrc)
  await audio.evaluate((a, src) => {
    a.src = src
  }, nativeSrc)
  await b('Tentar novamente').click()
  await expect(playback).toHaveAttribute('data-playback', 'playing')
  await b('Pause').click()
  checks.push({
    nativeAudio: {
      duration,
      rate: 0.75,
      firstPass: 1,
      resume: 1,
      secondPass: 2,
      departurePaused: true,
      networkFailureAndRetry: true,
      verification:
        'Unmocked HTMLAudio, full-duration native first pass/ended, pause/resume, speed, second-pass transcript, departure pause and genuine network failure/retry.',
    },
  })
}
if (!process.env.JOURNEY_PART || process.env.JOURNEY_PART === 'other') {
  await load('a2')
  // Two pronunciation rounds retain the last eight results and use the spoken target.
  for (const [id, index] of [
    ['s51', 0],
    ['s52', 1],
  ]) {
    await go(id)
    for (let i = 0; i < 10; i++) {
      const count = await p.evaluate(() => window.__spoken.length)
      await b('Listen').click()
      await expect
        .poll(() => p.evaluate(() => window.__spoken.length))
        .toBeGreaterThan(count)
      await expect
        .poll(() => p.evaluate(() => window.__spoken.at(-1)))
        .toMatch(
          new RegExp(a2.pronunciation[index].c.map((c) => c[0]).join('|')),
        )
      const spoken = await p.evaluate(() => window.__spoken.at(-1))
      await b(new RegExp('^' + spoken + '\\s'), false).click()
    }
    await expect(
      current.getByRole('img', { name: 'Placar: 8 / 8' }),
    ).toBeVisible()
  }
  await go('s6')
  await p.evaluate(() => (window.__holdSpeech = true))
  await b('Listen to the dialogue').click()
  await expect(b('Pause')).toBeVisible()
  await b('Pause').click()
  await expect(b('Resume')).toBeVisible()
  await b('Resume').click()
  const cancels = await p.evaluate(() => window.__cancels)
  await go('s62')
  assert((await p.evaluate(() => window.__cancels)) > cancels)
  await p.evaluate(() => (window.__holdSpeech = false))
  await go('s61')
  for (let i = 0; i < 3; i++)
    await current.locator('button[aria-expanded="false"]').first().click()
  for (const q of a2.comprehension)
    await expect(current.getByText(q.a, { exact: true })).toBeVisible()
  await go('s10')
  for (const c of a2.corrections)
    await b(c.ok ? 'Right' : 'Wrong')
      .first()
      .click()
  await b('Fixed').click()
  await expect(b('Done')).toHaveAttribute('aria-pressed', 'true')
  await go('s12')
  await p.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (t) => {
          window.__copied = t
        },
      },
    }),
  )
  await b('Copy links').click()
  for (const item of a2.homework)
    assert((await p.evaluate(() => window.__copied)).includes(item[2]))
  await p.reload()
  await go('s12')
  await p.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error('denied')
        },
      },
    }),
  )
  await b('Copy links').click()
  await expect(current.getByLabel('Homework links')).toBeFocused()
  await p.getByRole('button', { name: 'Notes', exact: true }).click()
  const notes = p.getByLabel('Lesson notes')
  await notes.fill('Test lesson note')
  await notes.press('Escape')
  await expect(
    p.getByRole('button', { name: 'Notes', exact: true }),
  ).toBeFocused()
  await p.getByRole('button', { name: 'Notes', exact: true }).click()
  await expect(notes).toHaveValue('Test lesson note')
  await p
    .getByRole('dialog', { name: 'Notes' })
    .getByRole('button', { name: 'Clear', exact: true })
    .click()
  await expect(notes).toHaveValue('')
  await expect(notes).toBeFocused()
  await notes.press('Escape')
  checks.push({
    result:
      'Both pronunciation targets/last-eight score; dialogue pause/resume/cancellation; comprehension/corrections; exact homework clipboard/failure focus; Notes retained/clear/Escape/focus passed.',
  })
  // Normal-motion deep link regression, keyboard and wheel scroll.
  const motion = await browser.newContext()
  const normal = await motion.newPage()
  const before = await motion.newPage()
  const route =
    '/iframe.html?id=materials-b1-01--complete-lesson&viewMode=story&args=initialPageId:s11'
  await normal.goto('http://127.0.0.1:6031' + route)
  await before.goto('http://127.0.0.1:6032' + route)
  await expect(normal.locator('[data-current="true"]')).toHaveAttribute(
    'data-slide-id',
    's11',
  )
  await normal.waitForTimeout(1500)
  const baselinePage = await before
    .locator('[data-current="true"]')
    .getAttribute('data-slide-id')
  assert.equal(
    await normal.locator('[data-current="true"]').getAttribute('data-slide-id'),
    's11',
  )
  checks.push({
    normalMotionDeepLink: { baseline: baselinePage, current: 's11' },
  })
  await before.screenshot({ path: out + '/b/x-deeplink-1280.png' })
  await normal.screenshot({ path: out + '/a/x-deeplink-1280.png' })
  pairs.push({
    label: 'deep link 1280',
    before: 'b/x-deeplink-1280.png',
    after: 'a/x-deeplink-1280.png',
    source: 'baseline-83b70fb-normal-motion',
  })
  await normal.close()
  await before.close()
  await motion.close()
  await load('t', 's1')
  await p
    .locator('[data-slide-id="s1"]')
    .click({ position: { x: 100, y: 100 } })
  await p.keyboard.press('PageDown')
  await expect(p.locator('[data-current="true"]')).toHaveAttribute(
    'data-slide-id',
    's2',
  )
  await p.getByRole('button', { name: 'Back', exact: true }).click()
  await expect(p.locator('[data-current="true"]')).toHaveAttribute(
    'data-slide-id',
    's1',
  )
  await p.mouse.move(700, 400)
  await p.mouse.wheel(0, 900)
  await expect(p.locator('[data-current="true"]')).toHaveAttribute(
    'data-slide-id',
    's2',
  )
  await p.setViewportSize({ width: 320, height: 760 })
  await go('s2')
  const small = await current
    .locator('button[aria-label^="Ouvir:"]')
    .evaluateAll((es) =>
      es.map((e) => {
        const r = e.getBoundingClientRect()
        return { x: r.x, y: r.y, w: r.width, h: r.height }
      }),
    )
  for (let i = 0; i < small.length; i++) {
    const a = small[i]
    assert(a.x >= 0 && a.x + a.w <= 320)
    for (let j = i + 1; j < small.length; j++) {
      const c = small[j]
      assert(
        !(
          a.x < c.x + c.w &&
          a.x + a.w > c.x &&
          a.y < c.y + c.h &&
          a.y + a.h > c.y
        ),
      )
    }
  }
  checks.push({
    result:
      'Native PageDown/Back/wheel navigation and 320px hotspot bounds/no-overlap passed.',
  })
}
assert.deepEqual(errors, [])
const report = JSON.parse(await readFile(out + '/results.json', 'utf8'))
report.comparisons = [
  ...new Map(
    [...report.comparisons, ...pairs].map((r) => [r.label, r]),
  ).values(),
]
await writeFile(out + '/results.json', JSON.stringify(report, null, 2) + '\n')
let prior = { checks: [] }
try {
  prior = JSON.parse(await readFile(out + '/journeys.json', 'utf8'))
} catch {
  prior = { checks: [] }
}
await writeFile(
  out + '/journeys.json',
  JSON.stringify({ checks: [...prior.checks, ...checks], errors }, null, 2) +
    '\n',
)
await browser.close()
console.log(
  'Browser journeys passed; ' + pairs.length + ' state comparisons captured.',
)
