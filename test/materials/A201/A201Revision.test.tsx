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
  expect(lesson.activities.s_mission.questions[0]?.cue).toContain(
    'Compare a habit',
  )
  expect(lesson.freeConversationInstruction).toContain('routines')
})
