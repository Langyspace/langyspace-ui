import { chromium, expect } from 'playwright/test'
import { writeFile, mkdir, readFile, rm } from 'node:fs/promises'
const dir = '.github/evidence/a201-official-revision'
const url =
  'http://127.0.0.1:6066/stories/materials/Standalone/index.html?studentPortalOrigin=https://student.staging.langy.space#a2-01'
const before =
  'http://127.0.0.1:6066/.github/evidence/a201-official-revision/before-source/index.html'
let report = {
  source: 'React source preview, not generated bundle or staging',
  baselineHead: 'cfc558ed36d4ffaacb4d43854961a15cc10b3581',
  officialVersion: '1795045837-60e6',
  checks: [],
  captures: [],
  errors: [],
  failedRequests: [],
}
if (process.env.A201_RESUME) {
  report = JSON.parse(await readFile(`${dir}/browser-report.json`, 'utf8'))
  delete report.failure
  report.resumedAfter =
    'Dynamic accessible-name locator corrected; prior matrix retained. Grammar captures refreshed after dark styling.'
}
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  reducedMotion: 'reduce',
})
const page = await context.newPage()
page.on('pageerror', (e) => report.errors.push(e.message))
page.on('response', (r) => {
  if (r.status() >= 400)
    report.failedRequests.push({ url: r.url(), status: r.status() })
})
const slide = (id) => page.locator(`[data-slide-id="${id}"]`)
async function go(id) {
  await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      ),
  )
  await slide(id).evaluate((el) => {
    const v = el.closest('[data-slide-viewport]')
    v.scrollTo({
      top:
        el.getBoundingClientRect().top -
        v.getBoundingClientRect().top +
        v.scrollTop,
      behavior: 'instant',
    })
  })
  await expect(slide(id)).toHaveAttribute('data-current', 'true')
}
async function snap(name) {
  await page.screenshot({ path: `${dir}/${name}.png` })
  report.captures.push(name + '.png')
}
async function check(name, fn) {
  await fn()
  report.checks.push({ name, passed: true })
  console.log('PASS ' + name)
}
try {
  await mkdir(dir, { recursive: true })
  if (!process.env.A201_RESUME) {
    await import('../../../docs/epics/a201-official-revision/prepare-baseline.mjs')
    // Baselines are reconstructed from git show without checking out or changing the shared branch.
    await page.goto(before)
    await slide('s1').waitFor()
    await page.evaluate(() => document.fonts.ready)
    const beforeIds = await page
      .locator('[data-slide-id]')
      .evaluateAll((nodes) => nodes.map((n) => n.dataset.slideId))
    for (const size of [
      { width: 1280, height: 900 },
      { width: 390, height: 844 },
      { width: 1280, height: 650 },
    ]) {
      await page.setViewportSize(size)
      for (const id of beforeIds) {
        await go(id)
        await snap(`before-${size.width}x${size.height}-${id}`)
      }
    }
    await page.goto(url)
    await slide('s1').waitFor()
    await page.evaluate(() => document.fonts.ready)
    await check(
      '13 continuous sections; opening cleanup and only one recorded audio',
      async () => {
        expect(await page.locator('[data-slide-id]').count()).toBe(13)
        await expect(
          slide('s1').getByText('Where are you now?', { exact: true }),
        ).toBeVisible()
        expect(await slide('s1').innerText()).not.toMatch(
          /Goal|Warm up|Talk with your teacher/,
        )
        expect(await page.locator('audio').count()).toBe(1)
        expect(await page.locator('footer').count()).toBe(0)
        expect(
          await page
            .locator('button')
            .filter({ hasText: /Listen to the dialogue|Listen to the word/ })
            .count(),
        ).toBe(0)
      },
    )
    for (const size of [
      { width: 1280, height: 900 },
      { width: 390, height: 844 },
      { width: 1280, height: 650 },
    ]) {
      await page.setViewportSize(size)
      for (let i = 1; i <= 13; i++) {
        const id = 's' + i
        await go(id)
        await snap(`after-${size.width}x${size.height}-${id}`)
        const geometry = await slide(id).evaluate((el) => {
          const v = el.closest('[data-slide-viewport]')
          return {
            pageHeight: el.clientHeight,
            viewportHeight: v.clientHeight,
            overflow: v.scrollWidth > v.clientWidth + 1,
            bodyOverflow: document.body.scrollWidth > innerWidth + 1,
          }
        })
        expect(geometry.overflow).toBe(false)
        expect(geometry.bodyOverflow).toBe(false)
        if (geometry.pageHeight > geometry.viewportHeight + 2) {
          await page
            .locator('[data-slide-viewport]')
            .evaluate(
              (v, h) => v.scrollBy({ top: h, behavior: 'instant' }),
              geometry.pageHeight - geometry.viewportHeight,
            )
          await snap(`after-${size.width}x${size.height}-${id}-bottom`)
        }
      }
      const missing = await page
        .locator('img')
        .evaluateAll((imgs) =>
          imgs
            .filter((i) => !i.complete || i.naturalWidth === 0)
            .map((i) => i.src),
        )
      expect(missing).toEqual([])
      report.checks.push({
        name: `13 rendered sections and assets ${size.width}x${size.height}`,
        passed: true,
      })
    }
  } else {
    await page.goto(url)
    await slide('s1').waitFor()
    await page.evaluate(() => document.fonts.ready)
  }
  await check(
    'dark grammar tables and readable question columns at three viewports',
    async () => {
      for (const size of [
        { width: 1280, height: 900 },
        { width: 390, height: 844 },
        { width: 1280, height: 650 },
      ]) {
        await page.setViewportSize(size)
        for (const id of ['s4', 's5']) {
          await go(id)
          await snap(`after-${size.width}x${size.height}-${id}`)
          expect(
            await slide(id).evaluate((e) => e.scrollWidth > e.clientWidth + 1),
          ).toBe(false)
        }
      }
    },
  )
  await page.setViewportSize({ width: 1280, height: 900 })
  await check(
    'vocabulary keyboard reveal, letter hints and show all; full 4:3 scenes',
    async () => {
      await go('s2')
      const s = slide('s2')
      const card = s.locator('button').first()
      await card.focus()
      await expect(card).toHaveAttribute('aria-expanded', 'false')
      await card.press('Enter')
      await expect(card).toHaveAttribute('aria-expanded', 'true')
      await s.getByRole('button', { name: 'Initial letters' }).click()
      await expect(
        s.getByRole('button', { name: 'Initial letters' }),
      ).toHaveAttribute('aria-pressed', 'true')
      await s.getByRole('button', { name: 'Show all' }).click()
      await page.mouse.move(0, 0)
      await snap('state-vocabulary-revealed')
      const box = await card.boundingBox()
      expect(Math.abs(box.width / box.height - 4 / 3)).toBeLessThan(0.02)
    },
  )
  await check(
    'eight live-read dialogue lines, optional glosses and new Kim/Ana profiles',
    async () => {
      await go('s6')
      const s = slide('s6')
      expect(
        await s.getByRole('img', { name: 'Kim', exact: true }).count(),
      ).toBe(4)
      expect(
        await s.getByRole('img', { name: 'Ana', exact: true }).count(),
      ).toBe(4)
      await expect(
        s.getByText('Sorry? Can you say that again? Kim? Kim?', {
          exact: true,
        }),
      ).toBeVisible()
      expect(await s.getByRole('button').count()).toBe(1)
      await s.getByRole('button', { name: 'Word help' }).click()
      await snap('state-dialogue-help')
    },
  )
  await check(
    'factual reveal and personal questions without prescribed answers',
    async () => {
      await go('s7')
      const s = slide('s7')
      await s
        .getByRole('button', { name: /Where is Ana working this week/ })
        .click()
      await expect(
        s.getByText('She’s working in Porto.', { exact: true }),
      ).toBeVisible()
      await expect(
        s.getByText('Are you working or studying at home this week?', {
          exact: true,
        }),
      ).toBeVisible()
      await snap('state-comprehension')
    },
  )
  await check(
    'six progressive gaps, incorrect retry and focus progression',
    async () => {
      await go('s8')
      const s = slide('s8')
      await s.getByRole('button', { name: 'A is', exact: true }).click()
      await expect(s.getByText('Try again.', { exact: true })).toBeVisible()
      await snap('state-gap-incorrect')
      for (const value of [
        'are',
        'walking',
        'working',
        'am',
        'drinking',
        'not',
      ]) {
        const choices = s.getByRole('button')
        const texts = await choices.allTextContents()
        const index = texts.findIndex(
          (t) => t.replace(/^[AB]/, '').trim() === value,
        )
        expect(index).toBeGreaterThan(-1)
        await choices.nth(index).click()
      }
      await expect(
        s.getByText('Complete. Read the conversation with your teacher.'),
      ).toBeVisible()
      expect(await s.getByRole('button').count()).toBe(0)
      await snap('state-gap-complete')
    },
  )
  await check(
    'role play checklist, signal, role swap, support and four real cues',
    async () => {
      await go('s12')
      const s = slide('s12')
      const step = s.getByRole('button', { name: /Find out where Kim/ })
      await step.click()
      await s.getByRole('button', { name: 'Bad signal', exact: true }).click()
      await s.getByRole('button', { name: 'Swap roles', exact: true }).click()
      await expect(step).toHaveAttribute('aria-pressed', 'true')
      await s.getByRole('button', { name: 'Show support', exact: true }).click()
      await s
        .getByRole('button', { name: 'Show action cues', exact: true })
        .click()
      for (let i = 0; i < 4; i++) {
        await expect(s.locator('img').last()).toBeVisible()
        if (i < 3) await s.getByRole('button', { name: 'Next action' }).click()
      }
      await snap('state-roleplay')
    },
  )
  await check(
    'native Kim audio real full pass, pause/resume, speed, replay, manual transcript and departure pause',
    async () => {
      await go('s11')
      const s = slide('s11'),
        audio = s.locator('audio')
      await s
        .getByRole('button', { name: 'Play Kim’s message', exact: true })
        .click()
      await expect
        .poll(() => audio.evaluate((a) => !a.paused && a.currentTime > 0))
        .toBe(true)
      await s.getByRole('button', { name: 'Pause', exact: true }).click()
      const pausedTime = await audio.evaluate((a) => a.currentTime)
      await page.waitForTimeout(250)
      expect(
        Math.abs((await audio.evaluate((a) => a.currentTime)) - pausedTime),
      ).toBeLessThan(0.1)
      await s.getByRole('button', { name: 'Playback speed: 1x' }).click()
      expect(await audio.evaluate((a) => a.playbackRate)).toBe(0.75)
      await s.getByRole('button', { name: 'Resume', exact: true }).click()
      await expect.poll(() => audio.evaluate((a) => !a.paused)).toBe(true)
      await s.getByRole('button', { name: 'Playback speed: 0.75x' }).click()
      expect(await audio.evaluate((a) => a.playbackRate)).toBe(1)
      await expect
        .poll(() => audio.evaluate((a) => a.ended), { timeout: 20000 })
        .toBe(true)
      await s.getByRole('button', { name: 'Show transcription' }).click()
      await expect(
        s.getByText(/Hi, Ana! Sorry, bad signal! Never mind/),
      ).toBeVisible()
      await snap('state-listening-transcript')
      for (const [i, value] of ['Yes', 'Yes', 'No'].entries())
        await s
          .locator('fieldset')
          .nth(i)
          .getByRole('button', { name: value, exact: true })
          .click()
      await s.getByRole('button', { name: 'Listen again', exact: true }).click()
      await expect
        .poll(() => audio.evaluate((a) => !a.paused && a.currentTime > 0))
        .toBe(true)
      await go('s12')
      await expect.poll(() => audio.evaluate((a) => a.paused)).toBe(true)
      report.audio = {
        duration: await audio.evaluate((a) => a.duration),
        fullPass: true,
        audibleSpeakerCapture: false,
      }
    },
  )
  await check('audio error branch and real retry playback', async () => {
    await go('s11')
    const s = slide('s11')
    await s
      .locator('audio')
      .evaluate((a) => a.dispatchEvent(new Event('error')))
    await expect(
      s.getByText('Audio unavailable.', { exact: false }),
    ).toBeVisible()
    await s.getByRole('button', { name: 'Try again', exact: true }).click()
    await expect
      .poll(() =>
        s.locator('audio').evaluate((a) => !a.paused && a.currentTime > 0),
      )
      .toBe(true)
    await go('s12')
    report.errorBranch =
      'Error event injected to exercise handler; retry performed real native playback.'
  })
  await check(
    'Notes persistence, textarea navigation exclusion and focus return',
    async () => {
      await go('s4')
      await page.getByRole('button', { name: 'Notes', exact: true }).click()
      const input = page.getByRole('textbox', { name: 'Notes', exact: true })
      await input.fill('A201 revision test')
      await input.press('ArrowDown')
      await expect(slide('s4')).toHaveAttribute('data-current', 'true')
      await input.press('Escape')
      await expect(
        page.getByRole('button', { name: 'Notes', exact: true }),
      ).toBeFocused()
      await page.getByRole('button', { name: 'Notes', exact: true }).click()
      await expect(input).toHaveValue('A201 revision test')
      await snap('state-notes')
      await input.press('Escape')
    },
  )
  await check(
    'Home/End and tall-page native reading before next section',
    async () => {
      await page.setViewportSize({ width: 390, height: 844 })
      await go('s11')
      const v = page.locator('[data-slide-viewport]')
      await v.focus()
      const first = await v.evaluate((x) => x.scrollTop)
      await v.press('PageDown')
      await expect
        .poll(() => v.evaluate((x) => x.scrollTop))
        .toBeGreaterThan(first)
      await expect(slide('s11')).toHaveAttribute('data-current', 'true')
      await v.press('End')
      await expect(slide('s13')).toHaveAttribute('data-current', 'true')
      await expect
        .poll(() => page.locator('progress').first().getAttribute('value'))
        .toBe('100')
      await v.press('Home')
      await expect(slide('s1')).toHaveAttribute('data-current', 'true')
      await expect.poll(() => v.evaluate((x) => x.scrollTop)).toBe(0)
    },
  )
  report.passed =
    report.errors.length === 0 && report.failedRequests.length === 0
} catch (error) {
  report.passed = false
  report.failure = String(error)
  await snap('failure')
  console.error(error)
  process.exitCode = 1
} finally {
  await writeFile(`${dir}/browser-report.json`, JSON.stringify(report, null, 2))
  await browser.close()
  if (!process.env.A201_RESUME)
    await rm(`${dir}/before-source`, { recursive: true, force: true })
}
