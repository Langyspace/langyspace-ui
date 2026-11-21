import content from './A201.content.json'
import sceneManifest from './image-scenes.json'
import { ana, kim, leo, raj } from '../shared/characterPortraits'
import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'
import type { SceneHotspot } from '../../../src/components/InteractiveMaterial/SceneExplorer.types'

export { content }
export const order = Array.from(
  { length: 20 },
  (_, index) => `s${index + 1}`,
).flatMap((id) => (id === 's15' ? [id, 's151'] : id === 's13' ? [] : [id]))
export const portraits: Readonly<Record<string, string>> = {
  Anna: ana,
  Emma: kim,
  Ben: leo,
  Lucas: raj,
}
const assets = import.meta.glob('./assets/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const vocabulary: readonly VocabularyItem[] = content.vocabulary.map(
  (item) => ({
    id: item.id,
    word: item.text,
    translation: item.translation,
    imageUrl: assets['./' + item.image] ?? '',
    imageAlt: item.imageAlt,
  }),
)
export const parkImage = assets['./assets/scene-park-six-actions.webp']
export const mimeImage = assets['./assets/scene-mime-brushing-teeth.webp']
export const parkHotspots: readonly SceneHotspot[] = sceneManifest.park.hotspots
export const hasVocabularyImages = vocabulary.every((item) => item.imageUrl)
export const toggleId = (ids: readonly string[], id: string) =>
  ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id]
export const prompts = (
  items: readonly { prompt: string; answer?: string }[],
  prefix: string,
) => items.map((item, index) => ({ id: `${prefix}.${index + 1}`, ...item }))
