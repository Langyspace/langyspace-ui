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
  's52',
  's6',
  's62',
  's7',
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
    hint: 'I’d been using = eu vinha usando (até aquele momento) · ’d = had',
    pic: 'dead-phone',
    o: [
      'At four, near Times Square.',
      'Because I’d been using it as a map all day.',
      'Because I’d been charging it all day.',
    ],
    a: 1,
    why: [
      'This says when and where. Kim asks why: Because I’d been …',
      '',
      'Charging gives the phone battery. Why did it die? Because I’d been using it …',
    ],
    now: 'Give Ana a different possible reason. Start: I’d been …',
    sub: 'I’d been using it all day = Eu vinha usando o celular o dia todo.',
    hide: false,
  },
  {
    q: 'How long had you been walking when your phone died?',
    hint: '',
    pic: 'map',
    o: [
      'It died two hours ago.',
      'I’d been walking for two hours.',
      'I walked for two hours after it died.',
    ],
    a: 1,
    why: [
      'This says when the phone died. Kim asks how long you walked before: I’d been walking for …',
      '',
      'This says you walked after. Kim asks about before it died: I’d been walking for two hours.',
    ],
    now: 'Your teacher’s phone died too. Ask: How long had you been …ing when it died?',
    sub: '',
    hide: true,
  },
  {
    q: 'What do you do when your phone dies?',
    hint: 'O que você faz quando o seu celular descarrega? · borrow = pegar emprestado · lend = emprestar a alguém',
    pic: 'power-bank-new',
    o: [
      'I borrow a power bank from a friend.',
      'I lend my power bank to a friend.',
      'My phone dies every afternoon.',
    ],
    a: 0,
    why: [
      '',
      'lend = you give it to a friend. Your phone is dead: you need one. Pegar emprestado = borrow … from.',
      'This says when. Kim asks what you do: I borrow …',
    ],
    now: 'Answer about you. Then ask your teacher: What do you do when your phone dies?',
    sub: 'I borrow a charger. · I use my power bank. · I go to a café. · Nothing. I wait!',
    hide: false,
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
