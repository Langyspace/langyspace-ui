import source from './A104.source'
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
  if (!result) throw new Error(`Missing A1.04 generated scene: ${id}`)
  return result
}
export function sceneAlt(id: string) {
  const item = manifest.scenes.find((entry) => entry.id === id)
  if (!item) throw new Error(`Missing A1.04 scene description: ${id}`)
  return item.alt
}
export const dayScenes = [
  'scene-getup',
  'scene-eat',
  'scene-work',
  'scene-study',
  'scene-gym',
  'scene-sleep',
] as const
export const vocabulary = (): readonly VocabularyItem[] =>
  source.DAYV.map((row, index) => {
    const id = dayScenes[index]!
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
  'Lição de casa da aula A1.04 · My day and our time\n' +
  homework.map((item) => `${item.line}: ${item.url}`).join('\n')
