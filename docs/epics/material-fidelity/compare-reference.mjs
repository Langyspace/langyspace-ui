/* global document, getComputedStyle */
import assert from 'node:assert/strict'
import { chromium } from 'playwright/test'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
const b = await chromium.launch(),
  results = []
for (const side of ['source', 'current'])
  await mkdir('.github/evidence/material-fidelity/reference/' + side, {
    recursive: true,
  })
try {
  for (const dpr of [1, 2]) {
    const c = await b.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: dpr,
      reducedMotion: 'reduce',
    })
    let css = ''
    for (const [pkg, family] of [
      ['montserrat', 'Montserrat'],
      ['space-grotesk', 'Space Grotesk'],
    ])
      for (const n of [pkg === 'montserrat' ? 400 : 500, 600, 700])
        css += `@font-face{font-family:'${family}';font-weight:${n};src:url(data:font/woff2;base64,${(await readFile('node_modules/@fontsource/' + pkg + '/files/' + pkg + '-latin-' + n + '-normal.woff2')).toString('base64')})}`
    await c.route('https://fonts.googleapis.com/**', (r) =>
      r.fulfill({ contentType: 'text/css', body: css }),
    )
    const a = await c.newPage(),
      p = await c.newPage()
    await a.goto('http://127.0.0.1:6037/a2-01.html')
    await p.goto(
      'http://127.0.0.1:6038/index.html?studentPortalOrigin=https://student.staging.langy.space#a2-01',
    )
    await p.locator('[data-slide-id=s1]').waitFor()
    for (const q of [a, p]) await q.evaluate(() => document.fonts.ready)
    for (const [width, height] of [
      [1280, 800],
      [1280, 620],
      [700, 800],
      [390, 844],
    ]) {
      for (const q of [a, p]) await q.setViewportSize({ width, height })
      for (const q of [a, p])
        await q.getByRole('button', { name: 'Notes', exact: true }).click()
      const states = []
      for (const [q, source] of [
        [a, 'source'],
        [p, 'current'],
      ]) {
        const data = await q.evaluate((source) => {
          const s = (sel) => {
            const e = document.querySelector(sel),
              c = getComputedStyle(e),
              r = e.getBoundingClientRect()
            return {
              rect: { x: r.x, y: r.y, width: r.width, height: r.height },
              font: c.fontFamily,
              size: c.fontSize,
              line: c.lineHeight,
              padding: c.padding,
              bg: c.backgroundColor,
              fg: c.color,
              border: c.border,
              radius: c.borderRadius,
            }
          }
          return {
            trigger: s(source === 'source' ? '#npb' : 'nav button:last-child'),
            panel: s(source === 'source' ? '#np' : '[role=dialog]'),
            title: s(source === 'source' ? '.np-h b' : '[role=dialog] b'),
            editor: s(
              source === 'source' ? '.np textarea' : '[role=dialog] textarea',
            ),
            clear: s(
              source === 'source' ? '[data-np=clear]' : '[role=dialog] button',
            ),
            progress: s(source === 'source' ? '.prog' : 'progress'),
          }
        }, source)
        states.push({ source, ...data })
        await q.mouse.move(0, 0)
        await q
          .locator(source === 'source' ? '#np' : '[role=dialog]')
          .screenshot({
            path: `.github/evidence/material-fidelity/reference/${source}/notes-${dpr}-${width}x${height}.png`,
            animations: 'disabled',
          })
      }
      for (const part of [
        'trigger',
        'panel',
        'title',
        'editor',
        'clear',
        'progress',
      ]) {
        for (const property of ['x', 'y', 'width', 'height'])
          assert(
            Math.abs(
              states[0][part].rect[property] - states[1][part].rect[property],
            ) <= 0.1,
            part + ' ' + property,
          )
        assert.equal(
          states[0][part].bg,
          states[1][part].bg,
          part + ' background',
        )
      }
      results.push({ dpr, width, height, states })
      for (const q of [a, p])
        await q
          .getByRole('textbox', { name: 'Notes', exact: true })
          .press('Escape')
    }
    await c.close()
  }
  await writeFile(
    '.github/evidence/material-fidelity/reference-geometry.json',
    JSON.stringify(results, null, 2) + '\n',
  )
  console.log(
    results.map((x) => ({
      dpr: x.dpr,
      width: x.width,
      panel: x.states.map((s) => s.panel.rect),
      trigger: x.states.map((s) => s.trigger.rect),
      editor: x.states.map((s) => s.editor.rect),
    })),
  )
} finally {
  await b.close()
}
