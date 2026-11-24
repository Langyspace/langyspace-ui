/* global document, window, innerWidth */
import { chromium, expect } from 'playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
const output = '.github/evidence/material-fidelity',
  require = createRequire(import.meta.url),
  addon = createRequire(require.resolve('@storybook/addon-a11y/package.json'))
for (const side of ['before', 'after'])
  await mkdir(output + '/' + side, { recursive: true })
const b = await chromium.launch(),
  c = await b.newContext({ colorScheme: 'light', reducedMotion: 'reduce' }),
  rows = [],
  checks = [],
  errors = []
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images].map((i) => i.decode().catch(() => {})),
    )
  })
}
async function go(p, id) {
  const el = p.locator(`[data-slide-id="${id}"]`)
  await el.evaluate((e) =>
    e.scrollIntoView({ behavior: 'instant', block: 'start' }),
  )
  await expect(el).toHaveAttribute('data-current', 'true')
  await ready(p)
}
async function shot(before, after, name, beforeSurface = before) {
  for (const [p, side] of [
    [beforeSurface, 'before'],
    [after, 'after'],
  ]) {
    await p.mouse.move(0, 0)
    await p.screenshot({
      path: `${output}/${side}/${name}.jpg`,
      type: 'jpeg',
      quality: 85,
    })
  }
  rows.push({
    label: name,
    before: `before/${name}.jpg`,
    after: `after/${name}.jpg`,
  })
}
async function contrast(p, selector, name) {
  const v = await p.evaluate(
    async (s) =>
      (
        await window.axe.run(document.querySelector(s), {
          runOnly: ['color-contrast'],
        })
      ).violations,
    selector,
  )
  assert.deepEqual(
    v.map((x) => ({
      id: x.id,
      nodes: x.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
    [],
    name,
  )
}
try {
  for (const [width, height] of [
    [1280, 800],
    [1280, 620],
    [390, 844],
  ])
    for (const key of ['a1-01', 'a2-01', 'b1-01', 'b2-01', 'trial-a1-a2']) {
      const old = await c.newPage(),
        now = await c.newPage()
      now.on('pageerror', (e) => errors.push(e.message))
      for (const [p, port] of [
        [old, 6039],
        [now, 6038],
      ]) {
        await p.setViewportSize({ width, height })
        await p.goto(
          `http://127.0.0.1:${port}/index.html?studentPortalOrigin=https://student.staging.langy.space#${key}`,
        )
        await p.locator('[data-slide-id="s1"]').waitFor()
        await ready(p)
      }
      await now.addScriptTag({ path: addon.resolve('axe-core/axe.min.js') })
      const ids = await now
        .locator('[data-slide-id]')
        .evaluateAll((es) => es.map((e) => e.dataset.slideId))
      assert.deepEqual(
        ids,
        await old
          .locator('[data-slide-id]')
          .evaluateAll((es) => es.map((e) => e.dataset.slideId)),
      )
      await go(now, 's1')
      await go(old, 's1')
      await expect(now.locator('[data-slide-viewport]')).toHaveCSS(
        'scroll-snap-type',
        'y mandatory',
      )
      await expect(now.locator('[data-slide-deck]')).toBeFocused()
      for (const id of ids) {
        const el = now.locator(`[data-slide-id="${id}"]`)
        const m = await el.evaluate((e) => ({
          w: e.clientWidth,
          s: e.scrollWidth,
          broken: [...e.querySelectorAll('img')].filter((i) => !i.naturalWidth)
            .length,
        }))
        assert(m.s <= m.w + 1 && !m.broken, `${key}/${id}/${width}`)
      }
      await shot(old, now, `${key}-start-${width}x${height}`)
      const n = now.getByRole('button', { name: 'Notes', exact: true })
      await n.click()
      const editor = now.getByRole('textbox', { name: 'Notes', exact: true })
      await expect(editor).toBeFocused()
      await editor.fill(`My ${key} notes.\nI’d been waiting for two hours.`)
      const top = await now
        .locator('[data-slide-viewport]')
        .evaluate((e) => e.scrollTop)
      await editor.press('ArrowDown')
      assert.equal(
        await now.locator('[data-slide-viewport]').evaluate((e) => e.scrollTop),
        top,
      )
      let popup
      if (key === 'a1-01') {
        const opened = old.waitForEvent('popup')
        await old
          .getByRole('button', { name: 'Notas da professora', exact: true })
          .click()
        popup = await opened
        await popup.setViewportSize({ width, height })
        await popup.locator('main').waitFor()
      } else {
        await old.getByRole('button', { name: 'Notes', exact: true }).click()
        await old
          .getByRole('textbox', { name: 'Lesson notes', exact: true })
          .fill(`My ${key} notes.\nI’d been waiting for two hours.`)
      }
      await contrast(now, '[role="dialog"]', `${key} notes ${width}`)
      await shot(old, now, `${key}-notes-${width}x${height}`, popup ?? old)
      if (popup) await popup.close()
      else
        await old
          .getByRole('textbox', { name: 'Lesson notes', exact: true })
          .press('Escape')
      await editor.press('Escape')
      await expect(n).toBeFocused()
      await now.keyboard.press('ArrowRight')
      await expect(now.locator(`[data-slide-id="${ids[1]}"]`)).toHaveAttribute(
        'data-current',
        'true',
      )
      await go(old, ids[1])
      await shot(old, now, `${key}-page-two-${width}x${height}`)
      await now.reload()
      await now.locator('[data-slide-id]').first().waitFor()
      await expect(now.locator(`[data-slide-id="${ids[1]}"]`)).toHaveAttribute(
        'data-current',
        'true',
      )
      await n.click()
      await expect(editor).toHaveValue(
        `My ${key} notes.\nI’d been waiting for two hours.`,
      )
      await now
        .getByRole('dialog')
        .getByRole('button', { name: 'Clear', exact: true })
        .click()
      await expect(editor).toHaveValue('')
      await expect(editor).toBeFocused()
      await editor.press('Escape')
      await now.locator('[data-slide-deck]').focus()
      await now.keyboard.press('End')
      await expect(now.getByRole('progressbar')).toHaveAttribute('value', '100')
      await go(old, ids.at(-1))
      await old
        .locator('[data-slide-viewport]')
        .evaluate((e) =>
          e.scrollTo({ top: e.scrollHeight, behavior: 'instant' }),
        )
      await shot(old, now, `${key}-end-${width}x${height}`)
      await now.keyboard.press('Home')
      await expect(now.getByRole('progressbar')).toHaveAttribute('value', '0')
      await now.mouse.move(width / 2, height / 2)
      await now.mouse.wheel(0, Math.round(height * 0.75))
      await expect
        .poll(() =>
          now.locator('[data-slide-viewport]').evaluate((e) => e.scrollTop),
        )
        .toBeGreaterThan(0)
      if (key === 'b2-01' && width === 1280 && height === 800) {
        await go(now, 's9')
        await now
          .getByRole('button', { name: 'Play Raj’s message', exact: true })
          .click()
        await expect(
          now.locator('[data-slide-id="s9"] [data-playback]'),
        ).toHaveAttribute('data-playback', 'playing')
        await n.click()
        await editor.fill('Audio keeps playing while I take notes.')
        await expect(
          now.locator('[data-slide-id="s9"] audio'),
        ).toHaveJSProperty('paused', false)
        await editor.press('Escape')
        await now.keyboard.press('ArrowRight')
        await expect(now.locator('[data-slide-id="s10"]')).toHaveAttribute(
          'data-current',
          'true',
        )
        await expect(
          now.locator('[data-slide-id="s9"] audio'),
        ).toHaveJSProperty('paused', true)
      }
      const dimensions = await now.evaluate(() => ({
        w: innerWidth,
        scroll: document.documentElement.scrollWidth,
      }))
      assert(dimensions.scroll <= dimensions.w + 1)
      checks.push({
        key,
        width,
        height,
        pages: ids.length,
        notes: 'focus/edit/isolation/restore/Clear/Escape',
        navigation: 'initial focus/toolbar arrows/page resume/Home/End/wheel',
        geometry: 'no missing images/overflow',
        nativeDeparture:
          key === 'b2-01' && width === 1280 && height === 800
            ? 'passed'
            : 'unchanged hook evidence retained',
      })
      console.log(key, width, height, 'passed')
      await writeFile(
        output + '/verification.json',
        JSON.stringify(
          {
            baseline: 'UI0d38f73c7b973dd473b177e8de05088c60c79e21',
            rows,
            checks,
            errors,
          },
          null,
          2,
        ) + '\n',
      )
      await old.close()
      await now.close()
    }
  assert.deepEqual(errors, [])
} finally {
  await b.close()
}
