import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { expect, it } from 'vitest'
import catalog from '../../stories/materials/Standalone/catalog.json'
import type { PreparedPractice } from '../../stories/materials/Practice/Practice.types'
import reviewedFlashcardCutouts from './fixtures/reviewed-flashcard-cutouts.json'
import type { PreparedCourseData } from '../../stories/materials/Course/Course.types'

// Transparent artwork is intentional for these individual objects. Keep the
// exception at word level: two atlases also contain contextual illustrations.
const approvedObjects: Record<string, string[]> = {
  'a1-07': ['passport', 'suitcase', 'plane', 'taxi', 'bus', 'gate'],
  'a1-10': ['coffee', 'tea', 'water', 'juice', 'sandwich', 'cake'],
  'a1-11': ['T-shirt', 'shoes', 'jacket', 'bag', 'glasses', 'dress'],
  'a1-12': ['train', 'ticket'],
  'a2-11': ['a raincoat'],
}

const loaders = import.meta.glob<{ default: PreparedCourseData }>(
  '../../stories/materials/Course/lessons/*.module.ts',
)
function hasTransparencyChannel(bytes: Buffer) {
  if (bytes.toString('ascii', 1, 4) === 'PNG') {
    // The color type is in IHDR. Indexed and RGB PNGs can also set tRNS.
    if (bytes[25] === 4 || bytes[25] === 6) return true
    for (let offset = 8; offset + 12 <= bytes.length;) {
      const type = bytes.toString('ascii', offset + 4, offset + 8)
      if (type === 'tRNS') return true
      if (type === 'IDAT') break
      offset += bytes.readUInt32BE(offset) + 12
    }
    return false
  }
  if (bytes.toString('ascii', 8, 12) !== 'WEBP') return false
  const format = bytes.toString('ascii', 12, 16)
  if (format === 'VP8X') return Boolean(bytes[20]! & 0x10)
  if (format === 'VP8L') return Boolean(bytes.readUInt32LE(21) & 0x10000000)
  return false
}

const cutoutCache = new Map<string, string | null>()
function cutoutHash(url: string) {
  if (!cutoutCache.has(url)) {
    const pathname = decodeURIComponent(url.split('?')[0]!)
    const bytes = url.startsWith('data:')
      ? Buffer.from(url.split(',')[1]!, 'base64')
      : readFileSync(
          pathname.startsWith('/@fs/')
            ? pathname.slice(4)
            : resolve(pathname.slice(1)),
        )
    const hash = hasTransparencyChannel(bytes)
      ? createHash('sha256').update(bytes).digest('hex')
      : null
    cutoutCache.set(url, hash)
  }
  return cutoutCache.get(url)
}

it('keeps contextual vocabulary on opaque backgrounds and limits cutouts to reviewed objects', async () => {
  const unexpected: string[] = []
  for (const load of Object.values(loaders)) {
    const { default: lesson } = await load()
    for (const page of lesson.data.pages) {
      if (page.kind !== 'vocabulary') continue
      for (const item of page.items) {
        if (!item.imageUrl) continue
        const url = lesson.images[item.imageUrl]
        if (!url) throw Error('Missing vocabulary image for ' + item.id)
        if (
          cutoutHash(url) &&
          !approvedObjects[lesson.data.key]?.includes(item.word)
        ) {
          unexpected.push(lesson.data.key + '/' + item.word)
        }
      }
    }
  }
  expect(unexpected).toEqual([])
})

const practices = import.meta.glob<{ default: PreparedPractice }>(
  '../../stories/materials/Practice/lessons/*.module.ts',
)
const published = new Set(catalog.map((entry) => entry.key))
const reviewed: Readonly<Record<string, readonly string[]>> =
  reviewedFlashcardCutouts

it('keeps background removal out of homework scenes, including copies stored under other media keys', async () => {
  const unexpected: string[] = []
  for (const load of Object.values(practices)) {
    const {
      default: { data, images },
    } = await load()
    if (!published.has(data.key) || data.first.kind !== 'flashcards') continue
    for (const card of data.first.cards) {
      const url = card.imageSrc && images[card.imageSrc]
      if (!url) throw Error('Missing flashcard image for ' + card.id)
      const hash = cutoutHash(url)
      if (hash && !reviewed[hash]?.includes(card.word)) {
        unexpected.push(data.key + '/' + card.word)
      }
    }
  }
  expect(unexpected).toEqual([])
})
