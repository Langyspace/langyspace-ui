import content from './B201.content.json'
import { ana, kim, raj } from '../shared/characterPortraits'
export { content, ana, kim, raj }
export const order = [
  's1',
  's2',
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
const assets = import.meta.glob<string>('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
export const image = (key: string) => {
  const url = assets[`./assets/scene-${key}.webp`]
  if (!url) throw new Error(`B201 image missing: ${key}`)
  return url
}
const keys = [
  'dead-phone',
  'charger',
  'charging-cable',
  'power-bank-new',
  'outlet-us',
  'map',
  'doorman',
]
export const vocabulary = content.vocabulary.map((item, i) => ({
  id: item.id,
  word: item.en,
  translation: item.pt.replace(/ \(volta.*\)/, ''),
  initialHint: item.hint,
  imageUrl: image(keys[i]!),
  imageAlt: item.pt.replace(/ \(volta.*\)/, ''),
}))
export const dialogue = content.dialogue.map((line) => ({
  id: line.id,
  text: line.text,
  speaker: line.who,
}))
export const warmUps = [
  {
    q: 'Why did your phone die?',
    pic: 'dead-phone',
    a: 1,
    o: [
      'At four, near Times Square.',
      'Because I’d been using it as a map all day.',
      'Because I’d been charging it all day.',
    ],
  },
  {
    q: 'How long had you been walking when your phone died?',
    pic: 'map',
    a: 1,
    o: [
      'It died two hours ago.',
      'I’d been walking for two hours.',
      'I walked for two hours after it died.',
    ],
  },
  {
    q: 'Your phone is dead. Ask to use a stranger’s power bank.',
    pic: 'power-bank-new',
    a: 0,
    o: [
      'Could I borrow your power bank for five minutes?',
      'Could you borrow me your power bank?',
      'Would you like to borrow my power bank?',
    ],
  },
]
export const comprehension = [
  {
    q: 'Why didn’t Ana go back to the hotel?',
    a: 'She tried, but she got lost.',
  },
  { q: 'What was the problem at the café?', a: 'There were no free outlets.' },
  {
    q: 'How long had the team been waiting when Ana arrived?',
    a: 'For an hour.',
  },
]
export const reviewImages = [
  { src: image('office'), alt: 'Um escritório' },
  { src: image('pajamas'), alt: 'Um pijama para trabalhar de casa' },
]
