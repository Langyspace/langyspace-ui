import { chromium, expect } from 'playwright/test'
import { writeFile } from 'node:fs/promises'
const browser = await chromium.launch(),
  context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: 'reduce',
  }),
  checks = []
try {
  for (const key of ['a1-01', 'a2-01', 'b1-01', 'b2-01', 'trial-a1-a2']) {
    const page = await context.newPage()
    await page.goto(
      `http://127.0.0.1:6038/index.html?studentPortalOrigin=https://student.staging.langy.space#${key}`,
    )
    const viewport = page.locator('[data-slide-viewport]')
    await viewport.waitFor()
    const cdp = await context.newCDPSession(page)
    await cdp.send('Input.synthesizeScrollGesture', {
      x: 195,
      y: 650,
      yDistance: -600,
      gestureSourceType: 'touch',
      speed: 800,
    })
    await expect
      .poll(() => viewport.evaluate((e) => e.scrollTop))
      .toBeGreaterThan(0)
    checks.push({
      key,
      width: 390,
      height: 844,
      nativeTouchScroll: 'passed',
      scrollTop: await viewport.evaluate((e) => e.scrollTop),
    })
    await cdp.detach()
    await page.close()
  }
  await writeFile(
    '.github/evidence/material-fidelity/touch.json',
    JSON.stringify(checks, null, 2) + '\n',
  )
  console.log(checks)
} finally {
  await browser.close()
}
