import source from './A103.source'
import manifest from './image-scenes.json'
import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'

export { source }
const assets = import.meta.glob('./assets/*.{webp,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export function scene(id: string) {
  const result = assets[`./assets/${id}.webp`] ?? assets[`./assets/${id}.png`]
  if (!result) throw new Error(`Missing A1.03 generated scene: ${id}`)
  return result
}
export function sceneAlt(id: string) {
  const item = manifest.scenes.find((entry) => entry.id === id)
  if (!item) throw new Error(`Missing A1.03 scene description: ${id}`)
  return item.alt
}
export const jobScenes = [
  'scene-student',
  'scene-teacher',
  'scene-doctor',
  'scene-cook',
  'scene-driver',
  'scene-engineer',
] as const
export const vocabulary = (): readonly VocabularyItem[] =>
  source.JOBS.map((row, index) => {
    const id = jobScenes[index]!
    return {
      id,
      word: row[1],
      translation: row[2],
      imageUrl: scene(id),
      imageAlt: sceneAlt(id),
    }
  })
export const corrections = source.FIX.map((item) => ({
  sentence: item.s,
  answer: 'a' in item ? item.a : item.s,
  correct: 'ok' in item && item.ok,
  why: item.why,
}))
export const homework = source.HW.map((item) => ({
  title: item.t,
  description: item.d,
  url: item.url,
  line: item.line,
}))
export const homeworkMessage =
  'Lição de casa da aula A1.03 · People in my life\n' +
  homework.map((item) => `${item.line}: ${item.url}`).join('\n')
