import { describe, expect, it } from 'vitest'
import { bindStudentDestinations } from '../../../stories/materials/shared/studentDestinations'
import { readStudentPortalOrigin } from '../../../stories/materials/Standalone/destinations'
describe('consumer-bound student destinations', () => {
  it('preserves reference defaults and text while rebasing absolute and neutral paths', () => {
    const authored =
      'Homework\nhttps://student.langy.space/licoes?tab=quiz&item=a2-01\n/licoes?tab=flashcards&deck=deck-a1-01'
    expect(bindStudentDestinations(authored)).toBe(authored)
    expect(
      bindStudentDestinations(authored, 'https://student.staging.langy.space'),
    ).toBe(
      'Homework\nhttps://student.staging.langy.space/licoes?tab=quiz&item=a2-01\nhttps://student.staging.langy.space/licoes?tab=flashcards&deck=deck-a1-01',
    )
  })
  it('accepts only the configured school portal origins, without injected paths or credentials', () => {
    for (const origin of [
      'https://student.langy.space',
      'https://student.staging.langy.space',
      'https://langyspace-student-staging.web.app',
    ])
      expect(
        readStudentPortalOrigin(
          '?studentPortalOrigin=' + encodeURIComponent(origin),
        ),
      ).toBe(origin)
    for (const value of [
      'https://student.langy.space.attacker.invalid',
      'http://student.langy.space',
      'https://student.langy.space/redirect',
      'https://user@student.langy.space',
    ])
      expect(
        readStudentPortalOrigin(
          '?studentPortalOrigin=' + encodeURIComponent(value),
        ),
      ).toBeUndefined()
    expect(readStudentPortalOrigin('')).toBeUndefined()
  })
})
