import { expect, it } from 'vitest'
import lesson from '../../stories/materials/Course/lessons/b1-01.json'
it('uses the new spoken update to distinguish an achieved result from an ongoing activity', () => {
  const message = lesson.pages.find((p) => p.kind === 'listening')
  expect(message && 'message' in message ? message.message : '').toMatch(
    /invitations/i,
  )
  expect(
    lesson.pages.some((p) =>
      /running or been running|pronunciation/i.test(p.title),
    ),
  ).toBe(false)
  const dialogue = lesson.pages.flatMap((p) =>
    'lines' in p ? (p.lines ?? []) : [],
  )
  expect(dialogue.length).toBeGreaterThanOrEqual(6)
  expect(lesson.freeConversationInstruction).toContain('follow-up')
})
