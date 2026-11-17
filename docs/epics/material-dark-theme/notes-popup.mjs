/* global document, window */
import { chromium, expect } from 'playwright/test'
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import assert from 'node:assert/strict'
const require = createRequire(import.meta.url),
  addon = createRequire(require.resolve('@storybook/addon-a11y/package.json')),
  b = await chromium.launch(),
  c = await b.newContext(),
  checks = []
try {
  for (const [port, side] of [
    [6032, 'before'],
    [6033, 'after'],
  ]) {
    const p = await c.newPage()
    await p.goto(
      `http://127.0.0.1:${port}/index.html?studentPortalOrigin=https://student.staging.langy.space#a1-01`,
    )
    const opening = p.waitForEvent('popup')
    await p
      .getByRole('button', { name: 'Notas da professora', exact: true })
      .click()
    const popup = await opening
    await popup.setViewportSize({ width: 480, height: 720 })
    await popup
      .getByRole('heading', { name: 'Notas da professora · A1.01' })
      .waitFor()
    await popup.evaluate(() => document.fonts.ready)
    await popup.screenshot({
      path: `.github/evidence/material-dark/${side}/a1-notes-popup-480.jpg`,
      type: 'jpeg',
      quality: 85,
    })
    if (side === 'after') {
      await expect(popup.locator('main')).toHaveCSS(
        'background-color',
        'rgb(11, 11, 12)',
      )
      await expect(popup.locator('main')).toHaveCSS(
        'color',
        'rgb(247, 247, 247)',
      )
      await popup.addScriptTag({ path: addon.resolve('axe-core/axe.min.js') })
      const v = await popup.evaluate(
        async () =>
          (
            await window.axe.run(document.querySelector('main'), {
              runOnly: ['color-contrast'],
            })
          ).violations,
      )
      assert.deepEqual(v, [])
      checks.push({
        popup: 'A1 teacher notes',
        contrast: 'passed',
        background: 'rgb(11, 11, 12)',
      })
    }
    await popup.close()
    await p.close()
  }
  await writeFile(
    '.github/evidence/material-dark/popup.json',
    JSON.stringify(
      {
        rows: [
          {
            label: 'A1 notes 480',
            before: 'before/a1-notes-popup-480.jpg',
            after: 'after/a1-notes-popup-480.jpg',
          },
        ],
        checks,
      },
      null,
      2,
    ) + '\n',
  )
  console.log(checks)
} finally {
  await b.close()
}
