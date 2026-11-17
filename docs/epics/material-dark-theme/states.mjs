/* global document, window, getComputedStyle */
import { chromium, expect } from 'playwright/test'
import { createRequire } from 'node:module'
import { writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const require = createRequire(import.meta.url)
const addon = createRequire(
  require.resolve('@storybook/addon-a11y/package.json'),
)
const browser = await chromium.launch()
const context = await browser.newContext({
  reducedMotion: 'reduce',
  colorScheme: 'light',
})
const before = await context.newPage(),
  after = await context.newPage(),
  checks = [],
  rows = []
const resume = process.argv.includes('--resume')
if (resume)
  for (const name of [
    'b2-s4-revealed-1280',
    'b2-s7-revealed-1280',
    'b2-quiz-attempt-1280',
    'b2-quiz-completed-1280',
    'b2-role-notes-1280',
    'lesson-notes-1280',
    'b2-phone-support-1280',
  ]) {
    checks.push({ name, contrast: 'passed' })
    rows.push({
      label: name,
      before: `before/${name}.jpg`,
      after: `after/${name}.jpg`,
    })
  }
async function go(p, id) {
  const e = p.locator(`[data-slide-id="${id}"]`)
  await e.evaluate((e) =>
    e.scrollIntoView({ behavior: 'instant', block: 'start' }),
  )
  await expect(e).toHaveAttribute('data-current', 'true')
  return e
}
async function pair(name, scope) {
  for (const [p, side] of [
    [before, 'before'],
    [after, 'after'],
  ]) {
    await p.mouse.move(0, 0)
    await p.screenshot({
      path: `.github/evidence/material-dark/${side}/${name}.jpg`,
      type: 'jpeg',
      quality: 85,
    })
  }
  rows.push({
    label: name,
    before: `before/${name}.jpg`,
    after: `after/${name}.jpg`,
  })
  const violations = await after.evaluate(
    async (selector) =>
      (
        await window.axe.run(document.querySelector(selector), {
          runOnly: ['color-contrast'],
        })
      ).violations,
    scope,
  )
  assert.deepEqual(
    violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
    [],
    name,
  )
  checks.push({ name, contrast: 'passed' })
  console.log(name, 'passed')
}
try {
  for (const [p, port] of [
    [before, 6032],
    [after, 6033],
  ]) {
    await p.goto(
      `http://127.0.0.1:${port}/index.html?studentPortalOrigin=https://student.staging.langy.space#b2-01`,
    )
    await p.locator('[data-slide-id="s1"]').waitFor()
    await p.evaluate(() => document.fonts.ready)
  }
  await after.addScriptTag({ path: addon.resolve('axe-core/axe.min.js') })
  for (const [width, height] of [
    [1280, 800],
    [390, 844],
  ]) {
    for (const p of [before, after]) {
      await p.setViewportSize({ width, height })
      if (width === 390) await p.reload()
    }
    if (width === 390) {
      await after.locator('[data-slide-id="s1"]').waitFor()
      await after.addScriptTag({ path: addon.resolve('axe-core/axe.min.js') })
    }
    if (!resume || width !== 1280) {
      for (const id of ['s4', 's7']) {
        for (const p of [before, after]) {
          const s = await go(p, id)
          while (
            await s
              .getByRole('button', {
                name: id === 's4' ? 'Reveal expression' : 'Reveal form',
                exact: false,
              })
              .count()
          )
            await s
              .getByRole('button', {
                name: id === 's4' ? 'Reveal expression' : 'Reveal form',
                exact: false,
              })
              .first()
              .click()
          if (id === 's4')
            await s
              .getByRole('button', { name: 'Hide all', exact: true })
              .click()
          await s
            .getByRole('button', { name: 'Show starters', exact: true })
            .click()
        }
        await pair(`b2-${id}-revealed-${width}`, `[data-slide-id="${id}"]`)
      }
      for (const p of [before, after]) {
        const s = await go(p, 's31')
        const options = s.getByRole('button').filter({ hasText: /^[ABC]/ })
        await options.nth(0).click()
      }
      await pair(`b2-quiz-attempt-${width}`, '[data-slide-id="s31"]')
      for (const p of [before, after]) {
        const s = await go(p, 's31')
        for (const b of await s
          .getByRole('button')
          .filter({ hasText: /^[ABC]/ })
          .all()) {
          if (await b.isEnabled()) await b.click()
        }
      }
      await pair(`b2-quiz-completed-${width}`, '[data-slide-id="s31"]')
      for (const p of [before, after]) {
        const s = await go(p, 's11')
        await s
          .getByRole('textbox', { name: 'When? Where?', exact: true })
          .fill('Monday, New York')
        await s
          .getByRole('button', { name: 'Show support', exact: true })
          .click()
        const mark = s.getByRole('button', { name: /Tell Kim about your day/ })
        if (await mark.count()) await mark.click()
      }
      await pair(`b2-role-notes-${width}`, '[data-slide-id="s11"]')
      for (const p of [before, after]) {
        await p.getByRole('button', { name: 'Notes', exact: true }).click()
        await p
          .getByRole('textbox', { name: 'Lesson notes', exact: true })
          .fill('I’d been waiting for two hours.')
        await expect(
          p.getByRole('textbox', { name: 'Lesson notes', exact: true }),
        ).toBeFocused()
      }
      await pair(`lesson-notes-${width}`, '[role="dialog"]')
      for (const p of [before, after]) {
        await p
          .getByRole('textbox', { name: 'Lesson notes', exact: true })
          .press('Escape')
        const s = await go(p, 's9')
        await s
          .getByRole('button', { name: 'Show support', exact: true })
          .click()
      }
      await pair(`b2-phone-support-${width}`, '[data-slide-id="s9"]')
    }
    if (width === 1280) {
      for (const p of [before, after]) {
        const s = await go(p, 's9')
        if (resume)
          await s
            .getByRole('button', { name: 'Show support', exact: true })
            .click()
      }
      await Promise.all(
        [before, after].map(async (p) => {
          const s = p.locator('[data-slide-id="s9"]')
          await s
            .getByRole('button', { name: 'Playback speed: 1x', exact: true })
            .click()
          await s
            .getByRole('button', { name: 'Playback speed: 0.75x', exact: true })
            .click()
          await s
            .getByRole('button', { name: 'Play Raj’s message', exact: true })
            .click()
          await expect(
            s.getByRole('button', { name: 'Listen again', exact: true }),
          ).toBeVisible({ timeout: 35000 })
          await s
            .getByRole('button', { name: 'Listen again', exact: true })
            .click()
          await expect(
            s.getByRole('region', { name: 'Transcription', exact: true }),
          ).toContainText('Hi, Ana, it’s Raj.')
        }),
      )
      await pair('b2-second-play-transcript-1280', '[data-slide-id="s9"]')
      const colors = []
      for (const p of [before, after])
        colors.push(
          await p.getByText('Raj', { exact: true }).evaluate((e) => ({
            color: getComputedStyle(e).color,
            bg: getComputedStyle(e.parentElement.parentElement).backgroundColor,
          })),
        )
      assert.deepEqual(colors[0], colors[1])
      checks.push({ name: 'phone internal colors unchanged', colors })
    }
  }
  await writeFile(
    '.github/evidence/material-dark/states.json',
    JSON.stringify({ rows, checks }, null, 2) + '\n',
  )
  console.log(JSON.stringify(checks))
} finally {
  await browser.close()
}
