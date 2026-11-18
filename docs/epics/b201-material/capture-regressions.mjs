/* global document */
import { chromium } from 'playwright'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
const browser = await chromium.launch(),
  out = '.github/evidence/b201'
for (const [width, height] of [
  [1280, 800],
  [390, 844],
]) {
  for (const [name, story] of [
    ['vocabulary', 'exercise-components--contextual-scenes'],
    ['tooltip', 'exercise-components--fixed-columns-with-tooltips'],
    ['voice', 'voicemessage-voicemessageexercise--default'],
  ]) {
    const bytes = []
    for (const [side, port] of [
      ['b', 6032],
      ['a', 6033],
    ]) {
      const p = await browser.newPage({
        viewport: { width, height },
        reducedMotion: 'reduce',
      })
      // The frozen baseline's dependency symlink lies outside Vite's allow-list. Serve only
      // those same local package font bytes; no source/CSS/fixture alteration.
      await p.route('**/@fs/**/node_modules/**/*.woff2', async (route) => {
        const path = decodeURIComponent(
          new URL(route.request().url()).pathname.slice(4),
        )
        assert(path.startsWith(process.cwd() + '/node_modules/'))
        await route.fulfill({
          contentType: 'font/woff2',
          body: await readFile(path),
        })
      })
      await p.goto(
        'http://127.0.0.1:' +
          port +
          '/iframe.html?id=' +
          story +
          '&viewMode=story',
      )
      await p.locator('#storybook-root > *').first().waitFor()
      await p.evaluate(async () => {
        await Promise.all(
          [
            '400 16px Montserrat',
            '500 16px Montserrat',
            '600 16px Montserrat',
            '700 16px Montserrat',
            '700 16px "Space Grotesk"',
          ].map((font) => document.fonts.load(font)),
        )
        await document.fonts.ready
        await Promise.all(
          [...document.images].map((i) => i.decode().catch(() => {})),
        )
        await Promise.all(
          [...document.querySelectorAll('audio')].map((a) =>
            a.readyState
              ? null
              : new Promise((r) =>
                  a.addEventListener('loadedmetadata', r, { once: true }),
                ),
          ),
        )
        await new Promise((r) =>
          globalThis.requestAnimationFrame(() =>
            globalThis.requestAnimationFrame(r),
          ),
        )
      })
      assert(
        await p.evaluate(
          () =>
            document.fonts.check('700 16px "Space Grotesk"') &&
            document.fonts.check('400 16px Montserrat'),
        ),
      )
      bytes.push(
        await p.screenshot({
          path: out + '/' + side + '/regression-' + name + '-' + width + '.png',
        }),
      )
      await p.close()
    }
    console.log(
      name,
      width,
      'identical screenshot bytes:',
      bytes[0].equals(bytes[1]),
    )
  }
}
await browser.close()
