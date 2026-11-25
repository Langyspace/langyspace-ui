import { expect, it } from 'vitest'
import prepared from '../../../stories/materials/Practice/lessons/extra-dev-first-day.module'
import plan from '../../../docs/epics/dev-first-day95/homework/expansion-plan20.json'

it('provides at least twenty distinct work/tech concepts with matching word and example recordings', () => {
  if (prepared.data.first.kind !== 'flashcards')
    throw new Error('Expected flashcards')
  const { cards } = prepared.data.first
  expect(cards.length).toBeGreaterThanOrEqual(20)
  expect(new Set(cards.map((card) => card.word.toLowerCase())).size).toBe(
    cards.length,
  )
  for (const card of cards) {
    expect(
      prepared.recordings.find((clip) => clip.id === card.audioId)?.text,
    ).toBe(card.word)
    expect(
      prepared.recordings.find((clip) => clip.id === card.backAudioId)?.text,
    ).toBe(card.example)
    expect(card.translation).toBeTruthy()
    expect(card.exampleTranslation).toBeTruthy()
  }
  expect(cards.map((card) => card.word)).toEqual(
    expect.arrayContaining([
      'task',
      'a repository',
      'a password',
      'an API',
      'a test account',
    ]),
  )
  expect(prepared.data.publishedEnvironments).toEqual(['staging', 'production'])
})

it('keeps an explicit expansion proposal for every smaller published course deck', () => {
  expect(plan.plans).toHaveLength(30)
  for (const lesson of plan.plans) {
    const words = [...lesson.keep, ...lesson.proposedAdditions]
    expect(words.length).toBeGreaterThanOrEqual(plan.minimum)
    expect(new Set(words.map((word) => word.toLowerCase())).size).toBe(
      words.length,
    )
    expect(lesson.status).toBe('planned_not_published')
  }
})
