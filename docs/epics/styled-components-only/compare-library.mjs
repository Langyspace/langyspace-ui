import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { gunzipSync, inflateSync } from 'node:zlib'

const root = 'docs/epics/styled-components-only/evidence'
const hash = (buffer) => createHash('sha256').update(buffer).digest('hex')
const load = (file) => JSON.parse(gunzipSync(fs.readFileSync(file)))
// Playwright screenshots are noninterlaced, 8-bit RGB/RGBA PNGs. Decode without a new dependency.
const decode = (buffer) => {
  assert.equal(buffer.subarray(1, 4).toString(), 'PNG')
  let header
  const chunks = []
  for (let cursor = 8; cursor < buffer.length;) {
    const length = buffer.readUInt32BE(cursor)
    const type = buffer.toString('ascii', cursor + 4, cursor + 8)
    const data = buffer.subarray(cursor + 8, cursor + 8 + length)
    if (type === 'IHDR') header = data
    if (type === 'IDAT') chunks.push(data)
    cursor += length + 12
  }
  assert.equal(header[8], 8)
  assert.equal(header[12], 0)
  const channels = header[9] === 2 ? 3 : header[9] === 6 ? 4 : 0
  assert.ok(channels, 'Unsupported screenshot PNG color format')
  const width = header.readUInt32BE(0),
    height = header.readUInt32BE(4),
    stride = width * channels
  const raw = inflateSync(Buffer.concat(chunks)),
    pixels = Buffer.alloc(stride * height)
  assert.equal(raw.length, (stride + 1) * height)
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)]
    assert.ok(filter <= 4)
    for (let x = 0; x < stride; x++) {
      const left = x >= channels ? pixels[y * stride + x - channels] : 0
      const up = y ? pixels[(y - 1) * stride + x] : 0
      const corner =
        y && x >= channels ? pixels[(y - 1) * stride + x - channels] : 0
      const estimate = left + up - corner
      const paeth =
        Math.abs(estimate - left) <= Math.abs(estimate - up) &&
        Math.abs(estimate - left) <= Math.abs(estimate - corner)
          ? left
          : Math.abs(estimate - up) <= Math.abs(estimate - corner)
            ? up
            : corner
      const prediction = [0, left, up, Math.floor((left + up) / 2), paeth][
        filter
      ]
      pixels[y * stride + x] =
        (raw[y * (stride + 1) + x + 1] + prediction) & 255
    }
  }
  return { width, height, channels, pixels }
}
const files = fs
  .readdirSync(path.join(root, 'before'))
  .filter((file) => file.endsWith('.json.gz'))
  .sort()
const report = {
  pairs: files.length,
  selectedAfterFinal: 0,
  reusedAfter: 0,
  exactPng: 0,
  rasterDifferences: [],
  intendedInlineLockChanges: [],
  cases: [],
  failures: [],
}
assert.equal(files.length, 132)
for (const file of files) {
  const id = file.replace('.json.gz', '')
  const afterDirectory = fs.existsSync(path.join(root, 'after-final', file))
    ? 'after-final'
    : 'after'
  report[
    afterDirectory === 'after-final' ? 'selectedAfterFinal' : 'reusedAfter'
  ]++
  const beforePath = path.join(root, 'before', file),
    afterPath = path.join(root, afterDirectory, file)
  const before = load(beforePath),
    after = load(afterPath)
  for (const key of [
    'text',
    'overflow',
    'bodyComputedOverflow',
    'appInert',
    'layerInert',
    'focused',
    'scroll',
    'nodes',
  ]) {
    if (JSON.stringify(before[key]) !== JSON.stringify(after[key]))
      report.failures.push({ id, property: key })
  }
  if (before.bodyInlineOverflow !== after.bodyInlineOverflow) {
    assert.equal(before.bodyComputedOverflow, 'hidden', id)
    assert.equal(before.bodyInlineOverflow, 'hidden', id)
    assert.equal(
      after.bodyInlineOverflow,
      /^(modal-|drawer-open)/.test(id) ? 'auto' : '',
      id,
    )
    report.intendedInlineLockChanges.push(id)
  }
  const png = file.replace('.json.gz', '.png')
  const beforePngPath = path.join(root, 'before', png),
    afterPngPath = path.join(root, afterDirectory, png)
  const beforePng = fs.readFileSync(beforePngPath),
    afterPng = fs.readFileSync(afterPngPath)
  if (beforePng.equals(afterPng)) report.exactPng++
  else {
    const b = decode(beforePng),
      a = decode(afterPng)
    assert.deepEqual(
      [b.width, b.height, b.channels],
      [a.width, a.height, a.channels],
      id,
    )
    let changedPixels = 0,
      maxChannelDelta = 0
    for (let i = 0; i < b.pixels.length; i += b.channels) {
      let changed = false
      for (let j = 0; j < b.channels; j++) {
        const delta = Math.abs(b.pixels[i + j] - a.pixels[i + j])
        maxChannelDelta = Math.max(maxChannelDelta, delta)
        changed ||= delta > 0
      }
      if (changed) changedPixels++
    }
    report.rasterDifferences.push({
      id,
      changedPixels,
      maxChannelDelta,
      width: b.width,
      height: b.height,
    })
  }
  report.cases.push({
    id,
    before: {
      png: beforePngPath,
      receipt: beforePath,
      pngSha256: hash(beforePng),
      receiptSha256: hash(fs.readFileSync(beforePath)),
    },
    after: {
      png: afterPngPath,
      receipt: afterPath,
      pngSha256: hash(afterPng),
      receiptSha256: hash(fs.readFileSync(afterPath)),
    },
  })
}
const audit = JSON.parse(
  fs.readFileSync(path.join(root, 'final-styling-audit.json')),
)
Object.assign(report, {
  baseSource: 'be8a31600a548f6b3fb828c650163341e7d42009',
  implementationBase: '8aaa792d207507e07f00f17483e9c2e25845ac40',
  finalSourceManifestSha256: audit.sourceManifestSha256,
  sourceSelection:
    '46 final owner states; 86 earlier after states have invariant rendered inputs. Initial after132 and raw margin probe remain versioned.',
  comparison:
    'Raw computed values, no normalization or pixel threshold. Raster differences are reported, not hidden.',
})
fs.writeFileSync(
  path.join(root, 'final-comparison-manifest.json'),
  JSON.stringify(report, null, 2) + '\n',
)
console.log(
  JSON.stringify({
    pairs: report.pairs,
    selectedAfterFinal: report.selectedAfterFinal,
    reusedAfter: report.reusedAfter,
    exactPng: report.exactPng,
    rasterDifferences: report.rasterDifferences,
    failures: report.failures,
  }),
)
assert.deepEqual(report.failures, [])
