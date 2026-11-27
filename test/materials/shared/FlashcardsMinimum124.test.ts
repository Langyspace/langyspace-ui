import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import baseline from '../../../docs/epics/flashcards124/preservation.baseline124.json'
import nativeViews159 from '../../../stories/materials/Practice/native-views159.provenance.json'
import nativeScenes161 from '../../../stories/materials/Practice/native-scenes161.provenance.json'
import type { CoursePracticeData } from '../../../stories/materials/Practice/Practice.types'

const directory = resolve('stories/materials/Practice/lessons')
const nativeViews = [...nativeScenes161.views, ...nativeViews159.views]
const lessons = readdirSync(directory)
  .filter((name) => name.endsWith('.json'))
  .map(
    (name) =>
      JSON.parse(
        readFileSync(resolve(directory, name), 'utf8'),
      ) as CoursePracticeData,
  )
const concept = (word: string) =>
  word
    .trim()
    .toLocaleLowerCase('en')
    .replaceAll('’', "'")
    .replace(/[.?!]+$/u, '')
    .replace(/^(a |an |the )/u, '')

// Authored whole-view replacements include the background-restored scene artwork.
// Restore only their documented old media fields for the content baseline;
// HomeworkMedia131 still checks the actual current image bindings.
function withBaselineMedia(lesson: string, card: Record<string, unknown>) {
  const view = nativeViews.find(
    (item) => item.lesson === lesson && item.cardId === card.id,
  )
  if (!view) return card
  expect(card.imageSrc, view.cardId).toBe(view.storagePath)
  expect(card.imageRegion, view.cardId).toBeUndefined()
  const bytes = readFileSync(resolve(view.output))
  expect(createHash('sha256').update(bytes).digest('hex'), view.cardId).toBe(
    view.outputSha256,
  )
  const entries = Object.entries({
    ...card,
    imageSrc: view.previousMedia.imageSrc,
  })
  if (view.previousRegionIndex >= 0 && 'imageRegion' in view.previousMedia)
    entries.splice(view.previousRegionIndex, 0, [
      'imageRegion',
      view.previousMedia.imageRegion,
    ])
  return Object.fromEntries(entries)
}

describe('Homework flashcard minimum', () => {
  it('keeps every assigned flashcard set at twenty distinct targets or more', () => {
    const decks = lessons.filter((lesson) => lesson.first.kind === 'flashcards')
    expect(decks.length).toBeGreaterThan(0)
    for (const lesson of decks) {
      if (lesson.first.kind !== 'flashcards') continue
      const cards = lesson.first.cards
      expect(cards.length, lesson.key).toBeGreaterThanOrEqual(20)
      for (const card of cards) {
        expect(card.example.trim(), card.id).not.toBe('')
        expect(card.exampleTranslation.trim(), card.id).not.toBe('')
      }
      expect(new Set(cards.map((card) => card.id)).size, lesson.key).toBe(
        cards.length,
      )
      expect(
        new Set(cards.map((card) => concept(card.word))).size,
        lesson.key,
      ).toBe(cards.length)
    }
  })

  it('preserves the original valid cards while extending smaller sets', () => {
    for (const row of baseline) {
      const first = lessons.find((lesson) => lesson.key === row.key)!.first
      expect(first.kind).toBe('flashcards')
      if (first.kind !== 'flashcards') continue
      const hash = createHash('sha256')
        .update(
          JSON.stringify(
            first.cards
              .slice(0, row.beforeCount)
              .map((card) =>
                withBaselineMedia(
                  row.key,
                  card as unknown as Record<string, unknown>,
                ),
              ),
          ),
        )
        .digest('hex')
      expect(hash, row.key).toBe(row.cardsSha256)
    }
    for (const [key, count] of [
      ['a1-01', 48],
      ['extra-influencer-routine', 24],
      ['a1-02', 36],
    ] as const) {
      const first = lessons.find((lesson) => lesson.key === key)!.first
      expect(first.kind).toBe('flashcards')
      if (first.kind === 'flashcards') expect(first.cards).toHaveLength(count)
    }
  })
})
