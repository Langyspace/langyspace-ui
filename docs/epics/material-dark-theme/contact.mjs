/* global Image, document */
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
const root = '.github/evidence/material-dark',
  data = JSON.parse(await readFile(root + '/pages.json', 'utf8'))
const browser = await chromium.launch(),
  page = await browser.newPage(),
  rows = []
for (const [width, height] of [
  [1280, 800],
  [1280, 620],
  [390, 844],
])
  for (const lesson of ['a1-01', 'a2-01', 'b1-01', 'b2-01', 'trial-a1-a2'])
    for (const side of ['before', 'after']) {
      const selected = data.rows.filter(
        (r) =>
          r.label.startsWith(lesson + '-') &&
          r.label.endsWith(width + 'x' + height),
      )
      const images = await Promise.all(
        selected.map(async (r) => ({
          label: r.label,
          src:
            'data:image/jpeg;base64,' +
            (await readFile(root + '/' + r[side])).toString('base64'),
        })),
      )
      const base64 = await page.evaluate(
        async ({ images, width, height }) => {
          const w = width === 1280 ? 480 : 195,
            h = Math.round((height * w) / width),
            cols = width === 1280 ? 3 : 4
          const c = document.createElement('canvas')
          c.width = cols * w
          c.height = Math.ceil(images.length / cols) * (h + 24)
          const ctx = c.getContext('2d')
          ctx.fillStyle = '#666'
          ctx.fillRect(0, 0, c.width, c.height)
          for (let i = 0; i < images.length; i++) {
            const im = new Image()
            im.src = images[i].src
            await im.decode()
            const x = (i % cols) * w,
              y = Math.floor(i / cols) * (h + 24)
            ctx.fillStyle = '#fff'
            ctx.font = '14px sans-serif'
            ctx.fillText(images[i].label, x + 4, y + 17)
            ctx.drawImage(im, x, y + 24, w, h)
          }
          return c.toDataURL('image/jpeg', 0.9).split(',')[1]
        },
        { images, width, height },
      )
      await writeFile(
        `${root}/${side}/overview-${lesson}-${width}x${height}.jpg`,
        Buffer.from(base64, 'base64'),
      )
      if (side === 'after')
        rows.push({
          label: `${lesson} ${width}x${height}`,
          before: `before/overview-${lesson}-${width}x${height}.jpg`,
          after: `after/overview-${lesson}-${width}x${height}.jpg`,
        })
    }
await writeFile(
  root + '/overviews.json',
  JSON.stringify({ rows }, null, 2) + '\n',
)
await browser.close()
