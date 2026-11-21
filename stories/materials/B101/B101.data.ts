import content from './B101.content.json'
import paintingScene from './assets/catalog-cover40.webp'
import { ana, kim, leo } from '../shared/characterPortraits'
export { content, ana, kim, leo, paintingScene }
export const order = [
  's1',
  's2',
  's21',
  's31',
  's32',
  's33',
  's4',
  's51',
  's6',
  's62',
  's7',
  's52',
  's8',
  's9',
  's10',
  's11',
  's12',
] as const
const assets = import.meta.glob<string>('./assets/scene-*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
export const image = (name: string) =>
  assets[`./assets/scene-${name}.webp`] ?? ''
export const sceneKeys = [
  'baking',
  'swimming',
  'gardening',
  'guitar',
  'soccer',
  'shopping',
  'tv',
  'bike',
]
const descriptions = [
  'Mulher com farinha nas mãos, massa e pão na cozinha',
  'Homem com cabelo molhado, toalha e óculos junto à piscina',
  'Mulher com terra nas mãos e vaso no jardim',
  'Mulher tocando um violão na sala',
  'Mulher de chuteiras ao lado de uma bola num campo de futebol',
  'Mulher com sacolas de compras numa rua de lojas',
  'Mulher no sofá com pipoca e controle diante da televisão',
  'Mulher de capacete sobre uma bicicleta num parque',
]
export const vocabulary = content.vocabulary.map((v, i) => ({
  id: v.id,
  word: v.en,
  translation: v.pt,
  initialHint: v.hint,
  imageUrl: image(sceneKeys[i] ?? ''),
  imageAlt: descriptions[i] ?? '',
}))
export const toggle = (values: readonly string[], id: string) =>
  values.includes(id) ? values.filter((v) => v !== id) : [...values, id]
export const dialogue = content.dialogue.map((line) => ({
  id: line.id,
  speaker: line.who,
  text: line.text,
}))
