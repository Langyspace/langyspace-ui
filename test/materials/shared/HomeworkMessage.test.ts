import { describe, expect, it } from 'vitest'
import type { CoursePracticeData } from '../../../stories/materials/Practice/Practice.types'
import catalog from '../../../stories/materials/Standalone/catalog.json'
import dev from '../../../stories/materials/Practice/lessons/extra-dev-first-day.module'
import a101 from '../../../stories/materials/Practice/lessons/a1-01.json'
import {
  homeworkDestinations,
  homeworkMessage,
} from '../../../stories/materials/shared/homeworkMessage'

const files = import.meta.glob<{ default: CoursePracticeData }>(
  '../../../stories/materials/Practice/lessons/*.json',
  { eager: true },
)
const lessons = [...Object.values(files).map((file) => file.default), dev.data]
const production = 'https://student.langy.space'
const sample = a101 as CoursePracticeData

describe('authored WhatsApp homework', () => {
  it('covers each maintained homework once and retains its activity IDs in both environments', () => {
    expect(lessons).toHaveLength(63)
    expect(new Set(lessons.map((data) => data.key)).size).toBe(63)
    expect(lessons.map((data) => data.key).sort()).toEqual(
      catalog
        .filter((entry) => !entry.key.startsWith('trial-'))
        .map((entry) => entry.key)
        .sort(),
    )
    for (const data of lessons) {
      expect(
        Object.values(data.homeworkCopy).every(
          (text) => text.trim().length > 0,
        ),
      ).toBe(true)
      expect(data.homeworkCopy.voice).toMatch(
        /^Mandar um áudio em inglês para a teacher /,
      )
      for (const origin of [
        production,
        'https://student.staging.langy.space',
      ]) {
        const message = homeworkMessage(data, origin)!
        expect(message.match(/^\d\)/gm)).toEqual(['1)', '2)', '3)'])
        const urls = message
          .split('\n')
          .filter((line) => line.startsWith('https://'))
          .map((line) => new URL(line))
        expect(urls).toHaveLength(2)
        expect(urls.map((url) => url.origin)).toEqual([origin, origin])
        expect(urls[0]!.searchParams.get('tab')).toBe(data.first.kind)
        expect(
          urls[0]!.searchParams.get(
            data.first.kind === 'flashcards' ? 'deck' : 'activity',
          ),
        ).toBe(data.first.id)
        expect(urls[1]!.searchParams.get('tab')).toBe('shadowing')
        expect(urls[1]!.searchParams.get('activity')).toBe(data.shadowing.id)
      }
    }
  })
  it('copies a concise assignment with the complete existing Countries deck', () => {
    expect(homeworkMessage(sample, production)).toBe(
      '*Lição de casa — Apresentações*\n\n' +
        '1) Estudar os países em inglês nos flashcards:\nhttps://student.langy.space/licoes?tab=flashcards&deck=deck-a2-countries\n\n' +
        '2) Ouvir e repetir as frases de apresentação em inglês:\nhttps://student.langy.space/licoes?tab=shadowing&activity=course-practice-a1-01-shadowing\n\n' +
        '3) Mandar um áudio em inglês para a teacher se apresentando: diga seu nome, de onde você é e como está se sentindo. Termine com uma pergunta',
    )
  })
  it('withholds untrusted, missing or unpublished destinations', () => {
    for (const origin of [
      undefined,
      'https://other.example',
      'https://student.langy.space/path',
      'https://student.langy.space?next=example',
      'http://student.langy.space',
      'https://user:pass@student.langy.space',
    ]) {
      expect(homeworkMessage(sample, origin)).toBeUndefined()
    }
    expect(
      homeworkMessage(
        { ...sample, publishedEnvironments: ['staging'] },
        production,
      ),
    ).toBeUndefined()
    expect(
      homeworkDestinations(
        { ...sample, shadowing: { ...sample.shadowing, id: '' } },
        production,
      ),
    ).toBeUndefined()
  })
})
