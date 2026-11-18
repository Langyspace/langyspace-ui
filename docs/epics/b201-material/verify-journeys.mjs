/* global window */
import { chromium, expect } from 'playwright/test'
import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
const data = JSON.parse(
  await readFile('stories/materials/B201/B201.content.json', 'utf8'),
)
const browser = await chromium.launch(),
  context = await browser.newContext({ reducedMotion: 'reduce' })
await context.addInitScript(() => {
  window.__spoken = []
  window.__hold = false
  window.__cancel = 0
  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: {
      paused: false,
      getVoices: () => [],
      cancel() {
        window.__cancel++
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
          if (!window.__hold) setTimeout(() => u.onend?.(), 1)
        }, 0)
      },
    },
  })
})
const p = await context.newPage(),
  checks = [],
  errors = []
p.on('pageerror', (e) => errors.push(e.message))
let c
async function go(id) {
  c = p.locator('[data-slide-id="' + id + '"]')
  await c.evaluate((e) =>
    e.scrollIntoView({ behavior: 'instant', block: 'start' }),
  )
  await expect(c).toHaveAttribute('data-current', 'true')
}
const b = (name, exact = true) => c.getByRole('button', { name, exact })
async function load() {
  await p.goto(
    'http://127.0.0.1:6033/iframe.html?id=materials-b2-01--complete-lesson&viewMode=story',
  )
  await p.locator('[data-slide-id="s1"]').waitFor()
}
if (!process.env.PART || process.env.PART === 'states')
  for (const [width, height] of [
    [1280, 620],
    [390, 844],
  ]) {
    await p.setViewportSize({ width, height })
    await load()
    await go('s2')
    await expect(
      c.getByText('is only the cable.', { exact: false }),
    ).toHaveCount(0)
    await b('First letter').click()
    await expect(b('First letter')).toHaveAttribute('aria-pressed', 'true')
    const cards = c.locator('button:has(img)')
    await cards.nth(0).click()
    await expect(
      c.getByText('celular sem bateria', { exact: true }),
    ).toBeVisible()
    await cards.nth(1).click()
    await expect(
      c.getByText('celular sem bateria', { exact: true }),
    ).toHaveCount(0)
    await b('Show all').click()
    await expect(
      c.getByText('is only the cable.', { exact: false }),
    ).toBeVisible()
    await b('Hide all').click()
    for (const [id, answer] of [
      ['s31', 1],
      ['s32', 1],
      ['s33', 0],
    ]) {
      await go(id)
      if (id === 's32') {
        await expect(b('Show options')).toBeVisible()
        await b('Show options').click()
      }
      const opts = c.getByRole('button', { name: /^[ABC] / })
      await opts.nth(answer === 0 ? 1 : 0).click()
      await expect(c.getByText(/Not yet/)).toBeVisible()
      await opts.nth(answer).click()
      await expect(c.getByText('Now you', { exact: true })).toBeVisible()
      await expect(c.getByText('Correct!', { exact: true })).toBeVisible()
    }
    for (const [id, total] of [
      ['s4', 7],
      ['s7', 5],
    ]) {
      await go(id)
      if (id === 's4')
        await expect(c.getByText('Careful', { exact: true })).toHaveCount(0)
      const r = c.getByRole('button', { name: /Reveal (form|expression)/ })
      assert.equal(await r.count(), total)
      while (await r.count()) await r.first().click()
      await expect(
        c.getByText(id === 's4' ? 'Careful' : 'Four tenses, one story', {
          exact: true,
        }),
      ).toBeVisible()
      if (id === 's4') {
        await b('Hide all').click()
        await expect(c.getByText('Careful', { exact: true })).toBeVisible()
        assert.equal(await r.count(), 7)
      }
      await expect(c.getByText('Now you', { exact: true })).toBeVisible()
      await b('Show starters').click()
      await expect(b('Hide starters')).toBeVisible()
    }
    for (const [id, i] of [
      ['s51', 0],
      ['s52', 1],
    ]) {
      await go(id)
      await c.getByRole('button').nth(1).click()
      await expect(c.getByRole('img', { name: 'Placar: 0 / 0' })).toHaveCount(1)
      for (let j = 0; j < 10; j++) {
        const count = await p.evaluate(() => window.__spoken.length)
        await b('Listen').click()
        await expect
          .poll(() => p.evaluate(() => window.__spoken.length))
          .toBeGreaterThan(count)
        const word = await p.evaluate(() => window.__spoken.at(-1))
        await b(new RegExp('^' + word + '\\s'), false).click()
      }
      await expect(c.getByRole('img', { name: 'Placar: 8 / 8' })).toBeVisible()
      checks.push({ width, pronunciation: i, lastEight: true })
    }
    await go('s6')
    await p.evaluate(() => (window.__hold = true))
    await b('Listen to the dialogue').click()
    await expect(b('Pause')).toBeVisible()
    await b('Pause').click()
    await b('Resume').click()
    const cancel = await p.evaluate(() => window.__cancel)
    await go('s62')
    assert((await p.evaluate(() => window.__cancel)) > cancel)
    await p.evaluate(() => (window.__hold = false))
    for (const id of ['s6', 's62']) {
      await go(id)
      const tr = c.locator('button[aria-expanded="false"]').first()
      await tr.click()
      await expect(
        c.getByText(
          id === 's6' ? 'E aí, como foi Nova York?' : 'E aí, o que você fez?',
          { exact: true },
        ),
      ).toBeVisible()
    }
    await go('s63')
    while (await c.locator('button[aria-expanded="false"]').count())
      await c.locator('button[aria-expanded="false"]').first().click()
    await expect(c.getByText('For an hour.', { exact: true })).toBeVisible()
    await go('s8')
    await expect(c.getByText('0 of 5', { exact: true })).toBeVisible()
    await expect(c.locator('img')).toHaveCount(8)
    for (let j = 0; j < 5; j++)
      await b(/^Mark response:/, false)
        .last()
        .click()
    await expect(c.getByText('5 of 5', { exact: true })).toBeVisible()
    await b('⇄ Swap roles').click()
    await expect(c.getByText('0 of 5', { exact: true })).toBeVisible()
    await expect(b('Show support')).toBeVisible()
    await b('Show support').click()
    for (let j = 0; j < 5; j++)
      await b(/^Mark response:/, false)
        .last()
        .click()
    await b('⇄ Swap back').click()
    await expect(c.getByText('5 of 5', { exact: true })).toBeVisible()
    await go('s10')
    for (let j = 0; j < data.corrections.length; j++) {
      const row = c.locator('li').nth(j)
      await row
        .getByRole('button', {
          name: data.corrections[j].ok ? 'Right' : 'Wrong',
          exact: true,
        })
        .click()
    }
    await expect(c.locator('s')).toHaveCount(4)
    await b('Fixed').click()
    await expect(b('Done')).toBeVisible()
    await go('s11')
    const notes = [
      'When? Where?',
      'What had been happening?',
      'What went wrong?',
      'In the end',
    ]
    for (const name of notes)
      await c
        .getByRole('textbox', { name, exact: true })
        .fill('Monday\nNew York')
    await c
      .getByRole('textbox', { name: notes[0], exact: true })
      .press('ArrowDown')
    await expect(c).toHaveAttribute('data-current', 'true')
    await b(/Tell Kim about/, false).click()
    await expect(b('Show support')).toHaveCount(0)
    await b('Clear').click()
    for (const name of notes)
      await expect(c.getByRole('textbox', { name, exact: true })).toHaveValue(
        '',
      )
    await expect(b(/Tell Kim about/, false)).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await b(/Kim says something different/, false).click()
    await expect(b('Show support')).toBeVisible()
    await b('Show support').click()
    await go('s12')
    await go('s11')
    await expect(b(/Kim says something different/, false)).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    assert(!(await c.innerText()).includes('secret'))
    await p.getByRole('button', { name: 'Notes', exact: true }).click()
    const n = p.getByRole('textbox', { name: 'Lesson notes', exact: true })
    await n.fill('borrow / lend')
    await n.press('Escape')
    await p.getByRole('button', { name: 'Notes', exact: true }).click()
    await expect(n).toHaveValue('borrow / lend')
    await n.press('Escape')
    await go('s12')
    await p.evaluate(() =>
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async () => {
            throw new Error('test-denied')
          },
        },
      }),
    )
    await b('Copy links').click()
    const text = await c
      .getByRole('textbox', { name: 'Homework links' })
      .inputValue()
    assert(
      text.includes('deck=deck-b2-01') &&
        text.includes('tab=shadowing&item=b2-01') &&
        text.includes('tab=quiz&item=b2-01'),
    )
    checks.push({
      width,
      height,
      states:
        'vocabulary warmups expressions grammar pronunciation dialogue comprehension both roles corrections notes role checklist homework clipboard fallback passed',
    })
  }
if (!process.env.PART || process.env.PART === 'audio') {
  await p.setViewportSize({ width: 1280, height: 800 })
  await load()
  await go('s9')
  const audio = c.locator('audio'),
    playback = c.locator('[data-playback]')
  await expect
    .poll(() => audio.evaluate((a) => a.readyState))
    .toBeGreaterThan(0)
  const duration = await audio.evaluate((a) => a.duration)
  assert(duration > 25 && duration < 27)
  const nativeSrc = await audio.getAttribute('src')
  await b('Play Raj’s message').click()
  await expect(playback).toHaveAttribute('data-playback', 'playing')
  await expect(playback).toHaveAttribute('data-listens', '1')
  await expect(
    c.getByRole('region', { name: 'Transcription', exact: true }),
  ).not.toHaveText(data.listening.transcript)
  await b('Pause').click()
  await b('Play Raj’s message').click()
  await expect(playback).toHaveAttribute('data-listens', '1')
  await b(/^Playback speed:/, false).click()
  assert.equal(await audio.evaluate((a) => a.playbackRate), 0.75)
  await b(/^Playback speed:/, false).click()
  await expect(playback).toHaveAttribute('data-playback', 'ended', {
    timeout: 35000,
  })
  for (const [i, yes] of [false, true, false, false].entries())
    await c
      .locator('fieldset')
      .nth(i)
      .getByRole('button', { name: yes ? 'Yes' : 'No', exact: true })
      .click()
  await b('Listen again and check').click()
  await expect(playback).toHaveAttribute('data-listens', '2')
  await expect(
    c.getByRole('region', { name: 'Transcription', exact: true }),
  ).toHaveText(data.listening.transcript)
  await b('Pause').click()
  await b('Play Raj’s message').click()
  await go('s10')
  assert.equal(await audio.evaluate((a) => a.paused), true)
  await go('s9')
  await b('Play Raj’s message').click()
  await expect(playback).toHaveAttribute('data-listens', '2')
  await b('Pause').click()
  await audio.evaluate((a) => {
    a.src = '/missing-raj.mp3'
    a.load()
  })
  await expect(c.getByRole('alert')).toBeVisible()
  await audio.evaluate((a, src) => (a.src = src), nativeSrc)
  await b('Tentar novamente').click()
  await expect(playback).toHaveAttribute('data-playback', 'playing')
  await b('Pause').click()
  checks.push({
    nativeAudio: {
      duration,
      unmocked: true,
      fullFirstPass: true,
      pauseResumeSamePass: true,
      speed: 0.75,
      secondPassTranscript: true,
      departurePaused: true,
      genuine404AndRetry: true,
    },
  })
}
assert.deepEqual(errors, [])
await writeFile(
  '.github/evidence/b201/journeys-' + (process.env.PART ?? 'all') + '.json',
  JSON.stringify({ checks, errors }, null, 2) + '\n',
)
await browser.close()
console.log(JSON.stringify(checks))
