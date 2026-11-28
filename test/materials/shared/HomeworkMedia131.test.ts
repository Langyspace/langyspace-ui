import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import { expect, it } from 'vitest'
import previousCatalog from '../../../docs/epics/homework-media131/scope.catalog130.json'
import currentCatalog from '../../../stories/materials/Standalone/catalog.json'
const catalog = [
  ...currentCatalog,
  ...previousCatalog.filter(
    (entry) => !currentCatalog.some((current) => current.key === entry.key),
  ),
]
import baseline from '../../../docs/epics/homework-media131/exercise-content.baseline130.json'
import type { PreparedPractice } from '../../../stories/materials/Practice/Practice.types'
import { resolvePracticeImage } from '../../../stories/materials/Practice/resolvePracticeImage'

const modules = import.meta.glob<{ default: PreparedPractice }>(
  '../../../stories/materials/Practice/lessons/*.module.ts',
  { eager: true },
)
const practices = new Map(
  Object.values(modules).map(({ default: practice }) => [
    practice.data.key,
    practice,
  ]),
)
function withoutMedia(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(withoutMedia)
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value)
        .filter(
          ([key]) => !['imageSrc', 'imageRegion', 'avatarUrl'].includes(key),
        )
        .map(([key, item]) => [key, withoutMedia(item)]),
    )
  return value
}
function imageBytes(url: string): Buffer {
  if (url.startsWith('data:')) return Buffer.from(url.split(',')[1]!, 'base64')
  const pathname = decodeURIComponent(url.split('?')[0]!)
  return readFileSync(
    pathname.startsWith('/@fs/')
      ? pathname.slice(4)
      : resolve(pathname.slice(1)),
  )
}
function expectImage(url: string | undefined, label: string) {
  expect(url, label).toBeTruthy()
  const bytes = imageBytes(url!)
  const signature = bytes.subarray(0, 100).toString()
  expect(bytes.length, label).toBeGreaterThan(100)
  expect(
    signature.includes('<svg') ||
      (bytes.toString('ascii', 0, 4) === 'RIFF' &&
        bytes.toString('ascii', 8, 12) === 'WEBP') ||
      bytes.subarray(1, 4).toString() === 'PNG',
    label,
  ).toBe(true)
}

it('resolves homework images and speaker portraits, with a speech bubble for the abstract C1.05 card', () => {
  expect(currentCatalog).toHaveLength(67)
  expect(catalog).toHaveLength(68)
  expect(practices.size).toBe(65)
  const rows = catalog.map((material) => {
    const practice = practices.get(material.key)
    if (!practice) return { key: material.key, homework: false }
    const { data, images } = practice
    const expected = (baseline as Record<string, string>)[data.key]
    if (expected)
      expect(
        createHash('sha256')
          .update(
            JSON.stringify({
              first: withoutMedia(data.first),
              shadowing: withoutMedia(data.shadowing),
            }),
          )
          .digest('hex'),
        data.key,
      ).toBe(expected)
    const cards = data.first.kind === 'flashcards' ? data.first.cards : []
    let imageCount = 0,
      visualLabelCount = 0
    for (const card of cards) {
      if (material.key === 'c1-05' && card.id === 'course-c1-05-at-first') {
        expect(card).toEqual({
          id: 'course-c1-05-at-first',
          word: 'at first',
          translation: 'inicialmente',
          example: 'At first I thought I’d lost my scarf, but the café had it',
          exampleTranslation:
            'No começo, achei que tinha perdido meu cachecol, mas ele estava no café',
          visualLabel: '💬',
          audioId: 'course-c1-05-at-first.front',
          backAudioId: 'course-c1-05-at-first.back',
        })
        continue
      }
      const image = resolvePracticeImage(card.imageSrc, images)
      expect(card.imageSrc, `${material.key}/${card.id} signer path`).toMatch(
        /^\/flashcards(?:-transparent)?\/.+\/image\.webp$/,
      )
      expectImage(image, `${material.key}/${card.id}`)
      imageCount++
      if (material.key === 'a1-02' && /^[A-Z0-9]$/.test(card.visualLabel))
        visualLabelCount++
      const r = card.imageRegion
      if (r) {
        expect(r.column + (r.columnSpan ?? 1), card.id).toBeLessThanOrEqual(
          r.columns,
        )
        expect(r.row + (r.rowSpan ?? 1), card.id).toBeLessThanOrEqual(r.rows)
        expect(r.sourceAspectRatio, card.id).toBeGreaterThan(0)
      }
    }
    for (const person of data.shadowing.speakers) {
      expectImage(
        resolvePracticeImage(person.avatarUrl, images),
        `${material.key}/${person.name}`,
      )
      expect(person.avatarUrl, person.name).toMatch(
        /^\/flashcards\/course-characters\/[^/]+\/image.webp$/,
      )
    }
    for (const phrase of data.shadowing.phrases)
      expect(
        data.shadowing.speakers.some(
          (person) => person.id === phrase.speakerId,
        ),
        phrase.id,
      ).toBe(true)
    return {
      key: material.key,
      homework: true,
      kind: data.first.kind,
      cards: cards.length,
      imageCount,
      visualLabelCount,
      portraits: data.shadowing.speakers.length,
    }
  })
  const dev = practices.get('extra-dev-first-day')!
  expectImage(
    resolvePracticeImage(dev.data.shadowing.speakers[0]!.avatarUrl, dev.images),
    'Dev Kim portrait',
  )
  // A caller may already have a resolved Vite URL rather than a publication key.
  const bundledKim = resolvePracticeImage(
    dev.data.shadowing.speakers[0]!.avatarUrl,
    dev.images,
  )!
  expect(resolvePracticeImage(bundledKim, {})).toBe(bundledKim)
  expect(
    resolvePracticeImage('/flashcards/not-mapped/image.webp', {}),
  ).toBeUndefined()
  expect(rows.filter((row) => row.homework)).toHaveLength(65)
  expect(rows.reduce((n, row) => n + (row.cards ?? 0), 0)).toBe(733)
  expect(rows.reduce((n, row) => n + (row.imageCount ?? 0), 0)).toBe(732)
  expect(rows.reduce((n, row) => n + (row.visualLabelCount ?? 0), 0)).toBe(36)
  if (process.env.HOMEWORK_MEDIA131_REPORT)
    writeFileSync(
      process.env.HOMEWORK_MEDIA131_REPORT,
      JSON.stringify(
        {
          scope:
            'Static authored module/media evidence; no browser, playback or remote publication verification',
          rows,
        },
        null,
        2,
      ) + '\n',
    )
})
