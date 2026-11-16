import source from './lesson'
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
  's21',
  's22',
  's23',
  's24',
  's25',
  's26',
  's4',
  's51',
  's52',
  's53',
  's54',
  's55',
  's56',
  's6',
  's14',
  's71',
  's72',
  's16',
  's17',
  's8',
  's9',
  's10',
  's18',
  's15',
  's13',
]
const feelingImages = [
  'f_beaming_face_with_smiling_eyes',
  'f_crying_face',
  'f_yawning_face',
  'f_face_savoring_food',
  'f_cold_face',
  'd_angry',
]
const feelingAlt = [
  'Rosto sorrindo',
  'Rosto com uma lágrima',
  'Pessoa bocejando',
  'Pessoa pensando em comida',
  'Pessoa tremendo de frio',
  'Rosto com sobrancelhas franzidas',
]
export const feelings: VocabularyData[] = source.FEEL.map(
  ([id, word, translation], i) => ({
    id,
    word,
    translation,
    imageUrl: image(itemAt(feelingImages, i)),
    imageAlt: itemAt(feelingAlt, i),
    sourceImage: itemAt(feelingImages, i),
  }),
)
export const countries: VocabularyData[] = source.LANDS.map(
  ([id, word, translation]) => ({
    id,
    word,
    translation,
    imageUrl: image(id),
    imageAlt: `Bandeira: ${translation}`,
    sourceImage: id,
  }),
)
export const warmUps: readonly WarmUpData[] = [...source.WU2, ...source.WU5]
const sceneFeeling: Readonly<Record<string, string>> = {
  wu1: 'ph_tired',
  wu2: 'ph_cold',
  wu3: 'ph_sad',
  wu4: 'ph_happy',
  wu5: 'ph_hungry',
  wu6: 'ph_angry',
}
const warmUpFeeling = (item: WarmUpData) => {
  const feeling = feelings.find(
    (feeling) => feeling.id === sceneFeeling[item.im],
  )
  if (!feeling) throw new Error(`Unknown feeling scene: ${item.im}`)
  return feeling
}
export const warmUpImage = (item: WarmUpData) =>
  item.im.startsWith('wu') ? warmUpFeeling(item).imageUrl : image(item.im)
export const warmUpImageAlt = (item: WarmUpData) =>
  item.im.startsWith('wu')
    ? warmUpFeeling(item).imageAlt
    : 'Pessoa diante da bandeira do seu país'
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
  'Where is Kim from?',
  'Where is Ana from?',
  'How is Kim?',
  'Where is Lukas from?',
  'How is Lukas?',
]
export const trueForYou = [
  'I’m American.',
  'I’m from Japan.',
  'I’m tired.',
  'My mom is from Brazil.',
  'I’m hungry.',
  'It’s cold today.',
]
export const homeworkMessage =
  'Lição de casa da aula A1.01 · Introduce yourself\n' +
  source.HW13.map((item) => `${item.line}: ${item.url}`).join('\n')
export function itemAt<T>(items: readonly T[], index: number): T {
  const item = items[index]
  if (item === undefined)
    throw new Error(`A1.01 fixture index out of range: ${index}`)
  return item
}
