import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { expect, it } from 'vitest'
import prepared from '../../../stories/materials/Practice/lessons/a1-01.module'
import snapshot from '../../../stories/materials/Practice/lessons/a1-01.json'
import receipt from '../../../docs/epics/a101-countries97/source-receipt.json'
import mediaReceipt from '../../../docs/epics/a101-countries97/media-reuse.json'

it('assigns the complete existing Countries activity and preserves its original cards and media', () => {
  if (prepared.data.first.kind !== 'flashcards')
    throw new Error('Expected flashcards')
  const { id, title, cards } = prepared.data.first
  expect(id).toBe('deck-a2-countries')
  expect(title).toBe('Countries')
  expect(cards).toHaveLength(48)
  expect(new Set(cards.map((card) => card.id)).size).toBe(48)
  const original = snapshot.first.cards.map((card) =>
    Object.fromEntries(
      Object.entries(card).filter(
        ([key]) => !['audioId', 'backAudioId'].includes(key),
      ),
    ),
  )
  expect(
    createHash('sha256').update(JSON.stringify(original)).digest('hex'),
  ).toBe(receipt.cardsSha256)
  for (const card of cards) {
    expect(prepared.images[card.imageSrc!]).toContain(
      `/countries97/${card.id}.webp`,
    )
    const audio = prepared.recordings.find((clip) => clip.id === card.audioId)!
    expect(audio.src).toContain(`/countries97/${card.id}.mp3`)
    for (const kind of ['audio', 'image']) {
      const native = mediaReceipt.items.find(
        (item) => item.cardId === card.id && item.kind === kind,
      )!
      expect(native).toBeDefined()
      expect(
        createHash('sha256')
          .update(readFileSync(native.localPath))
          .digest('hex'),
      ).toBe(native.sha256)
    }
    expect(card.backAudioId).toBe(card.audioId) // Same manual word-audio fallback as the Student deck.
  }
  expect(prepared.data.publishedEnvironments).toEqual(['staging', 'production'])
  expect(receipt.verifiedEnvironments.staging.levels).toContain('A1')
  expect(receipt.verifiedEnvironments.production.levels).toContain('A1')
})

it('keeps the six existing introduction shadowing phrases and the teacher voice-note task', () => {
  expect(prepared.data.shadowing.id).toBe('course-practice-a1-01-shadowing')
  expect(prepared.data.shadowing.phrases).toHaveLength(6)
  for (const phrase of prepared.data.shadowing.phrases) {
    expect(
      prepared.recordings.find((clip) => clip.id === phrase.id),
    ).toBeDefined()
  }
  expect(prepared.data.voice.prompt).toBe(
    'Send me a voice note with your name, where you’re from and how you feel',
  )
})
