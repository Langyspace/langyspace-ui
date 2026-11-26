import { expect, it } from 'vitest'
import { personaliseTeacherTurn } from '../../../stories/materials/shared/personalTeacherTurn'
import { resolveMaterialTeacherIdentity } from '../../../stories/materials/shared/materialTeacherIdentity'
import conversation from '../../../stories/materials/A101/A101.personal-conversations.json'
import type { MaterialPersonalDialogueTurn } from '../../../stories/materials/shared/MaterialPersonalDialogue.types'
const lines = conversation.aboutYou as readonly MaterialPersonalDialogueTurn[]
it.each([
  ['America/Sao_Paulo', 'Good morning!'],
  ['Asia/Tokyo', 'Good evening!'],
  ['Europe/Dublin', 'Good afternoon!'],
])(
  'uses the teacher’s %s timezone, not UTC/device time',
  (timeZone, greeting) => {
    const line = personaliseTeacherTurn(
      lines[0]!,
      { name: 'Teacher', timeZone },
      new Date('2026-11-26T12:00:00Z'),
    )
    expect(line.content).toContain(greeting)
    expect(line.parts).toBeUndefined()
  },
)
it('uses the profile/phone country supplied by the host without exposing or guessing a city from a phone', () => {
  const line = lines.find((l) => l.personalisation === 'origin')!
  expect(
    personaliseTeacherTurn(
      line,
      { name: 'Adriana', countryCode: 'BR' },
      new Date(),
    ).content,
  ).toBe("I'm from Brazil")
  expect(
    personaliseTeacherTurn(line, { name: 'Kim', countryCode: 'US' }, new Date())
      .content,
  ).toBe("I'm from the United States")
  expect(
    personaliseTeacherTurn(line, { name: 'Teacher' }, new Date()).content,
  ).toBe('Let me tell you about my hometown')
  expect(
    resolveMaterialTeacherIdentity({
      name: 'Teacher',
      timeZone: 'invalid',
      countryCode: '<bad>',
    }),
  ).toEqual({ name: 'Teacher', identified: false, avatarUrl: undefined })
})
it('keeps teacher turns ready and personal responses oral, without inputs', () => {
  expect(
    lines.filter((l) => l.participant === 'teacher').some((l) => l.parts),
  ).toBe(false)
  expect(
    lines
      .filter((l) => l.participant === 'learner')
      .flatMap((l) => l.parts ?? [])
      .filter((p) => typeof p !== 'string'),
  ).toHaveLength(0)
})
