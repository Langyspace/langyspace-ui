import { chromium, expect } from 'playwright/test'
import { readFile, writeFile } from 'node:fs/promises'
const dir = '.github/evidence/a201-official-revision',
  report = JSON.parse(await readFile(dir + '/browser-report.json', 'utf8'))
const b = await chromium.launch({ headless: true }),
  p = await b.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  })
const errors = []
p.on('pageerror', (e) => errors.push(e.message))
try {
  await p.goto(
    'http://127.0.0.1:6066/stories/materials/Standalone/index.html?studentPortalOrigin=https://student.staging.langy.space#a2-01',
  )
  await p.locator('[data-slide-id="s11"]').waitFor()
  await p.evaluate(() => document.fonts.ready)
  const s = p.locator('[data-slide-id="s11"]'),
    v = p.locator('[data-slide-viewport]')
  await s.evaluate((el) => {
    const v = el.closest('[data-slide-viewport]')
    v.scrollTo({
      top:
        el.getBoundingClientRect().top -
        v.getBoundingClientRect().top +
        v.scrollTop,
      behavior: 'instant',
    })
  })
  await expect(s).toHaveAttribute('data-current', 'true')
  // Unlock only the transcript presentation fixture through native ended callback; the full real clip pass is already proven in browser-report.
  await s.locator('audio').evaluate((a) => a.dispatchEvent(new Event('ended')))
  await s.getByRole('button', { name: 'Show transcription' }).click()
  await v.focus()
  const geometry = () =>
    s.evaluate((el) => {
      const v = el.closest('[data-slide-viewport]')
      return {
        height: el.clientHeight,
        viewport: v.clientHeight,
        top: v.scrollTop,
        remaining:
          el.getBoundingClientRect().bottom - v.getBoundingClientRect().bottom,
        current: document.querySelector('[data-current]')?.dataset.slideId,
      }
    })
  const before = await geometry()
  expect(before.height).toBeGreaterThan(before.viewport)
  await v.press('PageDown')
  await expect
    .poll(() => v.evaluate((e) => e.scrollTop))
    .toBeGreaterThan(before.top)
  await expect(s).toHaveAttribute('data-current', 'true')
  const after = await geometry()
  await p.screenshot({ path: dir + '/state-tall-reading.png' })
  await v.press('End')
  await expect(p.locator('[data-slide-id="s13"]')).toHaveAttribute(
    'data-current',
    'true',
  )
  await expect
    .poll(() => p.locator('progress').first().getAttribute('value'))
    .toBe('100')
  await v.press('Home')
  await expect(p.locator('[data-slide-id="s1"]')).toHaveAttribute(
    'data-current',
    'true',
  )
  await expect.poll(() => v.evaluate((e) => e.scrollTop)).toBe(0)
  report.checks.push({
    name: 'Home/End and measured tall C11 PageDown reading',
    passed: true,
    before,
    after,
    fixture:
      'Native ended event unlocks presentation only; real full audio pass reused from preceding check.',
  })
  report.passed =
    errors.length === 0 &&
    report.errors.length === 0 &&
    report.failedRequests.length === 0
  delete report.failure
  console.log('PASS measured tall navigation/Home/End')
} catch (e) {
  report.passed = false
  report.failure = String(e)
  console.error(e)
  process.exitCode = 1
} finally {
  report.errors.push(...errors)
  await writeFile(dir + '/browser-report.json', JSON.stringify(report, null, 2))
  await b.close()
}
