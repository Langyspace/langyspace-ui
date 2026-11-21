export { ana, kim } from '../shared/characterPortraits'
import source from './lesson'
import sceneManifest from './image-scenes.json'
import type { WarmUpData, VocabularyData } from './A101.types'
const assets = import.meta.glob('./assets/*.{png,svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export const image = (name: string) => {
  const asset =
    assets[`./assets/${name}.png`] ??
    assets[`./assets/${name}.svg`] ??
    assets[`./assets/${name}.webp`]
  if (!asset) throw new Error(`Missing A1.01 fixture asset: ${name}`)
  return asset
}
export const lesson = source
export const order = [
  's1',
  's4',
  's21',
  's22',
  's23',
  's24',
  's25',
  's26',
  's51',
  's52',
  's53',
  's54',
  's55',
  's56',
  's6',
  's71',
  's72',
  's18',
  's73',
  's16',
  's17',
  's8',
  's9',
  's10',
  's74',
  's15',
  's151',
  's152',
  's75',
  's13',
]
const feelingImages = [
  'scene-happy-mia',
  'scene-sad-josh',
  'scene-tired-tom',
  'scene-hungry-ana',
  'scene-cold-julia',
  'scene-angry-leo',
]
const scene = (id: string) => {
  const result = sceneManifest.scenes.find((item) => item.id === id)
  if (!result) throw new Error(`Unknown A1.01 scene: ${id}`)
  return result
}
export const feelings: VocabularyData[] = source.FEEL.map(
  ([id, word, translation], i) => ({
    id,
    word,
    translation,
    imageUrl: image(itemAt(feelingImages, i)),
    imageAlt: scene(itemAt(feelingImages, i)).alt,
    sourceImage: itemAt(feelingImages, i),
  }),
)
const countryFlags: Readonly<Record<string, string>> = {
  fl_korea: 'flag-kr',
  fl_japan: 'flag-jp',
  fl_spain: 'flag-es',
  fl_germany: 'flag-de',
  fl_france: 'flag-fr',
  fl_usa: 'flag-us',
}
export const countryFlag = (id: string) => {
  const flag = countryFlags[id]
  if (!flag) throw new Error(`Unknown country flag: ${id}`)
  return image(flag)
}
export const countries: VocabularyData[] = source.LANDS.map(
  ([id, word, translation]) => ({
    id,
    word,
    translation,
    imageUrl: countryFlag(id),
    imageAlt: `Bandeira: ${translation}`,
    sourceImage: countryFlags[id]!,
  }),
)
export const warmUps: readonly WarmUpData[] = [...source.WU2, ...source.WU5]
const exerciseScenes: Readonly<Record<string, string>> = {
  wu1: 'scene-tired-tom',
  wu2: 'scene-cold-julia',
  wu3: 'scene-sad-josh',
  wu4: 'scene-happy-mia',
  wu5: 'scene-hungry-ana',
  wu6: 'scene-angry-leo',
  k_korea: 'scene-korea-jiwoo',
  k_japan: 'scene-japan-hiro',
  k_spain: 'scene-spain-lucia',
  k_germany: 'scene-germany-lukas',
  k_france: 'scene-france-chloe',
  k_usa: 'scene-usa-jake',
}
const warmUpScene = (item: WarmUpData) => {
  const id = exerciseScenes[item.im]
  if (!id) throw new Error(`Unknown warm-up scene: ${item.im}`)
  return scene(id)
}
export const warmUpImage = (item: WarmUpData) => image(warmUpScene(item).id)
export const warmUpFlag = (item: WarmUpData) => {
  const current = warmUpScene(item)
  return 'country' in current && current.country
    ? countryFlag(current.country)
    : undefined
}
export const warmUpImageAlt = (item: WarmUpData) => {
  const current = warmUpScene(item)
  const country =
    'country' in current
      ? countries.find((entry) => entry.id === current.country)
      : undefined
  return current.alt + (country ? ` Bandeira: ${country.translation}.` : '')
}
const guestScenes: Readonly<Record<string, string>> = {
  Tom: 'scene-cold-tom',
  Emma: 'scene-hungry-ana',
  Yuki: 'scene-cold-julia',
  Ken: 'scene-tired-tom',
  Kim: 'scene-tired-kim',
  Jun: 'scene-hungry-jun',
}
export const guestImage = (name: string) => {
  const id = guestScenes[name]
  if (!id) throw new Error(`Unknown guest scene: ${name}`)
  return image(id)
}
export const guestImageAlt = (
  name: string,
  countryId: string,
  feelingId: string,
) => {
  const country = countries.find((item) => item.id === countryId)
  const feeling = feelings.find(
    (item) => item.id === feelingId.replace('_s', ''),
  )
  if (!country || !feeling) throw new Error(`Missing guest clues: ${name}`)
  return `${name}: ${feeling.translation}. Bandeira: ${country.translation}.`
}
export const gapTexts = [
  'Hi! I {1} Kim. I’m from Korea.',
  'Hi, Kim! I’m Ana. I’m {2} Brazil. Nice to meet you.',
  'Nice to meet you too. How {3} you?',
  'I’m good, thanks. I {4} hungry! And you?',
  'I’m tired, but I’m happy. Where {5} your friend from?',
  'Lukas? {6}’s from Germany. He isn’t hungry. He’s cold!',
]
export const gapAnswers = ['am', 'from', 'are', 'am', 'is', 'He']
export const questions = [
  {
    id: 'dialogue-1',
    prompt: 'Where is Kim from?',
    answer: 'She’s from Korea.',
  },
  {
    id: 'dialogue-2',
    prompt: 'Where is Ana from?',
    answer: 'She’s from Brazil.',
  },
  {
    id: 'dialogue-3',
    prompt: 'How is Kim?',
    answer: 'She’s tired, but she’s happy.',
  },
  {
    id: 'dialogue-4',
    prompt: 'Where is Lukas from?',
    answer: 'He’s from Germany.',
  },
  { id: 'dialogue-5', prompt: 'How is Lukas?', answer: 'He’s cold.' },
]
export const trueForYou = [
  'I’m American.',
  'I’m from Japan.',
  'I’m tired.',
  'My mom is from Brazil.',
  'I’m hungry.',
  'It’s cold today.',
]
export function itemAt<T>(items: readonly T[], index: number): T {
  const item = items[index]
  if (item === undefined)
    throw new Error(`A1.01 fixture index out of range: ${index}`)
  return item
}

export const conversationAnswers = [
  'My name is … What’s your name?',
  'Nice to meet you too!',
  'Yes, I am. / No, I’m not.',
  'Yes, I am. / No, I’m not.',
  'I’m …, thanks. And you?',
  'Yes, she is. / No, she isn’t. / I don’t know.',
  'Yes, he is. / No, he isn’t. / I don’t know.',
  'Yes, they are. / No, they aren’t. They’re from …',
  'Yes, I am. / No, I’m not. I’m from …',
  'I’m from … What about you?',
  'My mother is … and my father is …',
  'He’s/She’s … years old.',
  'I’m … years old. / I’m …',
  'My pet is a … / I don’t have a pet.',
  'Yes, he/she is. / I don’t have a pet.',
] as const
