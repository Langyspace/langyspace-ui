/* global document */
import { chromium, expect } from 'playwright/test'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
const output = '.github/evidence/material-fidelity'
const browser = await chromium.launch()
const rows = JSON.parse(
  await readFile(
    '.local/material-fidelity/smooth-capture-checkpoint.json',
    'utf8',
  ).catch(() => '[]'),
)
try {
  for (const [width, height] of [
    [1280, 800],
    [1280, 620],
    [390, 844],
  ]) {
    for (const key of ['a1-01', 'a2-01', 'b1-01', 'b2-01', 'trial-a1-a2']) {
      if (
        rows.some(
          (row) =>
            row.key === key && row.width === width && row.height === height,
        )
      )
        continue
      const row = { key, width, height, cpuRate: 4 }
      for (const [side, port] of [
        ['before', 6038],
        ['after', 6040],
      ]) {
        const context = await browser.newContext({
          viewport: { width, height },
          reducedMotion: 'no-preference',
        })
        const page = await context.newPage()
        const client = await context.newCDPSession(page)
        await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
        await page.goto(
          `http://127.0.0.1:${port}/index.html?studentPortalOrigin=https://student.staging.langy.space#${key}`,
          { waitUntil: 'domcontentloaded' },
        )
        await page.locator('[data-slide-id]').first().waitFor()
        await page.evaluate(async () => {
          await document.fonts.ready
          await Promise.all(
            [...document.images].map((i) => i.decode().catch(() => {})),
          )
        })
        const ids = await page
          .locator('[data-slide-id]')
          .evaluateAll((es) => es.map((e) => e.dataset.slideId))
        await page.locator('[data-slide-deck]').focus()
        await page.keyboard.press('ArrowRight')
        await expect(
          page.locator(`[data-slide-id="${ids[1]}"]`),
        ).toHaveAttribute('data-current', 'true')
        await page.getByRole('button', { name: 'Notes', exact: true }).click()
        const field = page.getByRole('textbox', { name: 'Notes', exact: true })
        await field.fill('Words from this lesson.')
        await field.press('Escape')
        await page.reload({ waitUntil: 'domcontentloaded' })
        await expect(
          page.locator(`[data-slide-id="${ids[1]}"]`),
        ).toHaveAttribute('data-current', 'true')
        await page.getByRole('button', { name: 'Notes', exact: true }).click()
        await expect(field).toHaveValue('Words from this lesson.')
        await page
          .getByRole('dialog')
          .getByRole('button', { name: 'Clear', exact: true })
          .click()
        await field.press('Escape')
        await page.keyboard.press('End')
        let reachesEnd = true
        try {
          await expect(page.getByRole('progressbar')).toHaveAttribute(
            'value',
            '100',
            { timeout: 10000 },
          )
        } catch (error) {
          reachesEnd = false
          if (side === 'after') throw error
        }
        row[side] = {
          reachesEnd,
          progress: Number(
            await page.getByRole('progressbar').getAttribute('value'),
          ),
          currentPage: await page
            .locator('[data-current="true"]')
            .getAttribute('data-slide-id'),
        }
        await mkdir(`${output}/${side}`, { recursive: true })
        const filename = `smooth-end-${key}-${width}x${height}.jpg`
        await page.mouse.move(0, 0)
        await page.screenshot({
          path: `${output}/${side}/${filename}`,
          type: 'jpeg',
          quality: 85,
        })
        row[side].image = `${side}/${filename}`
        if (side === 'after') {
          await page.keyboard.press('Home')
          await expect(page.getByRole('progressbar')).toHaveAttribute(
            'value',
            '0',
            { timeout: 10000 },
          )
          row.after.reachesHome = true
        }
        await context.close()
      }
      rows.push(row)
      console.log(key, width, row.before.progress, row.after.progress)
      await writeFile(
        '.local/material-fidelity/smooth-capture-checkpoint.json',
        JSON.stringify(rows, null, 2) + '\n',
      )
    }
  }
} finally {
  await browser.close()
}
const hookSha256 = createHash('sha256')
  .update(await readFile('src/components/Slide/useSlideNavigation.ts'))
  .digest('hex')
await writeFile(
  `${output}/smooth-verification.json`,
  JSON.stringify(
    {
      baseline: '7ce020bf8e4e92d150adf3cc243cbb45d864b532',
      hookSha256,
      motion: 'native animation, CPU4x',
      rows,
    },
    null,
    2,
  ) + '\n',
)
