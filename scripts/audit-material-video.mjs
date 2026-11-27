import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const read = (file) => JSON.parse(readFileSync(file, 'utf8'))
const catalog = read('stories/materials/Standalone/catalog.json').filter(
  (entry) => entry.kind === 'course',
)
const curation = read('docs/epics/material-video102/curation.json')
const native = new Set([
  'a1-01',
  'a1-02',
  'a1-03',
  'a1-04',
  'a1-05',
  'a1-06',
  'c1-01',
])
const baseline = process.argv
  .find((arg) => arg.startsWith('--compare='))
  ?.slice(10)
const seen = new Set()
const sources = new Set()
let questions = 0
for (const entry of catalog) {
  const folder = entry.code.replace('.', '')
  const file = native.has(entry.key)
    ? `stories/materials/${folder}/${folder}.review.json`
    : `stories/materials/Course/lessons/${entry.key}.json`
  const data = read(file)
  const videos = data.pages.filter((page) => page.kind === 'video')
  assert.equal(videos.length, 1, `${entry.code}: expected one authored video`)
  const page = videos[0]
  assert.equal(
    data.pages.at(-2)?.id,
    page.id,
    `${entry.code}: video must immediately precede the injected Free conversation and homework ending`,
  )
  const record = curation.lessons.find((item) => item.code === entry.code)
  assert(record, `${entry.code}: missing source and purpose`)
  assert(record.focus.trim() && record.captionEvidence.sha256)
  assert.equal(record.path, file)
  assert.equal(record.source.videoId, page.video.videoId)
  assert.equal(record.start, page.video.startSeconds)
  assert.equal(record.end, page.video.endSeconds)
  assert.match(page.video.videoId, /^[\w-]{11}$/)
  assert(Number.isFinite(record.start) && record.start >= 0)
  assert(Number.isFinite(record.end) && record.end > record.start)
  assert(page.title.trim() && page.instruction.trim())
  assert.equal(page.items.length, 4, `${entry.code}: four questions required`)
  assert.equal(new Set(page.items.map((item) => item.prompt)).size, 4)
  for (const item of page.items) {
    assert(item.prompt.trim() && item.hint.trim() && item.answer.trim())
    assert(!seen.has(item.id), `${entry.code}: repeated question ID`)
    seen.add(item.id)
    questions += 1
  }
  const pageIds = data.pages.map((item) => item.id)
  assert.equal(new Set(pageIds).size, pageIds.length)
  assert(
    data.pages.findIndex((item) => item.kind === 'homework') >
      pageIds.indexOf(page.id),
  )
  if (baseline) {
    const old = JSON.parse(
      execFileSync('git', ['show', `${baseline}:${file}`], {
        encoding: 'utf8',
      }),
    )
    assert.equal(
      data.pages.reduce((sum, item) => sum + item.minutes, 0),
      old.pages.reduce((sum, item) => sum + item.minutes, 0),
    )
    const strip = ({ minutes, ...rest }) => rest
    assert.deepEqual(
      data.pages.filter((item) => item.kind !== 'video').map(strip),
      old.pages.filter((item) => item.kind !== 'video').map(strip),
      `${entry.code}: existing content or order changed`,
    )
    const { pages: _a, ...currentMetadata } = data
    const { pages: _b, ...oldMetadata } = old
    assert.deepEqual(
      currentMetadata,
      oldMetadata,
      `${entry.code}: unrelated metadata changed`,
    )
  }
  sources.add(page.video.videoId)
}
assert.equal(catalog.length, 60)
assert.equal(curation.lessons.length, catalog.length)
console.log(
  JSON.stringify(
    {
      lessons: catalog.length,
      questions,
      uniqueVideos: sources.size,
      existingContentAndDuration: baseline ? 'preserved' : 'not compared',
      scope: 'authorship and structure; no claim of 60 playback reviews',
    },
    null,
    2,
  ),
)
