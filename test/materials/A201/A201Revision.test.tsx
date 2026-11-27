import { expect, it } from 'vitest'
import lesson from '../../../stories/materials/Course/lessons/a2-01.json'
import legacy from '../../../stories/materials/Course/legacy-audio-provenance81.json'
it('retains the complete Anna/Ben exchange and exact original recording identities during replanning', () => {
  const turns = lesson.pages.flatMap((p) =>
    'lines' in p ? (p.lines ?? []) : [],
  )
  expect(turns).toHaveLength(6)
  expect(new Set(turns.map((t) => t.speaker))).toEqual(new Set(['Anna', 'Ben']))
  for (const turn of turns)
    expect(
      legacy.items.some((c) => c.id === turn.id && c.text === turn.audioText),
    ).toBe(true)
  expect(lesson.activities.s_mission.questions).toHaveLength(3)
  expect(lesson.activities.s_mission.questions.map((q) => q.prompt)).toEqual([
    'What does Anna usually do in the morning?',
    'What is she doing today instead?',
    'How is your morning similar or different?',
  ])
  expect(lesson.freeConversationInstruction).toContain('routines')
})
