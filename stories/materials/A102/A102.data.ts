import kimAvatar from '../A101/assets/bust_kim.webp'
import anaAvatar from '../A101/assets/bust_ana.webp'
import type { SymbolItem } from './A102.types'
export const portraits = { Kim: kimAvatar, Ana: anaAvatar }
export const numbers: readonly SymbolItem[] = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
].map((word, index) => ({
  id: `V.${index}`,
  text: word,
  word,
  symbol: String(index),
}))
const letterNames = [
  'ay',
  'bee',
  'see',
  'dee',
  'ee',
  'ef',
  'jee',
  'aitch',
  'eye',
  'jay',
  'kay',
  'el',
  'em',
  'en',
  'oh',
  'pee',
  'cue',
  'ar',
  'ess',
  'tee',
  'you',
  'vee',
  'double-you',
  'ex',
  'why',
  'zee',
]
export const letters: readonly SymbolItem[] = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
].map((symbol, index) => ({
  id: `A.${symbol}`,
  symbol,
  text: symbol,
  word: letterNames[index]!,
}))
export const letterGroups = [
  { value: 'name', label: 'Name letters' },
  { value: 'first', label: 'A–I' },
  { value: 'middle', label: 'J–R' },
  { value: 'last', label: 'S–Z' },
]
export const numberChecks = [
  {
    id: 'N.1',
    text: '362',
    title: 'What’s the number?',
    options: ['362', '372', '263'],
    correctIndex: 0,
  },
  {
    id: 'N.2',
    text: '409',
    title: 'What’s the number?',
    options: ['419', '409', '490'],
    correctIndex: 1,
  },
  {
    id: 'S.1',
    text: 'L-I-M-A.',
    title: 'What’s the last name?',
    options: ['Lina', 'Lima', 'Lema'],
    correctIndex: 1,
  },
] as const
export const dialogue = [
  {
    id: 'D.1',
    speaker: 'Kim',
    text: 'Hi, Ana! What’s your last name?',
    translation: 'Oi, Ana! Qual é o seu sobrenome?',
  },
  {
    id: 'D.2',
    speaker: 'Ana',
    text: 'My last name is Souza.',
    translation: 'Meu sobrenome é Souza.',
  },
  {
    id: 'D.3',
    speaker: 'Kim',
    text: 'How do you spell it?',
    translation: 'Como se soletra?',
  },
  { id: 'D.4', speaker: 'Ana', text: 'S-O-U-Z-A.', translation: 'S-O-U-Z-A.' },
  {
    id: 'D.5',
    speaker: 'Kim',
    text: 'What’s your phone number?',
    translation: 'Qual é o seu telefone?',
  },
  {
    id: 'D.6',
    speaker: 'Ana',
    text: 'It’s 984 221 507.',
    translation: 'É 984 221 507.',
  },
] as const
export const gaps = [
  {
    id: 'G.1',
    speaker: 'Kim',
    text: 'What’s your first name?',
    translation: 'Qual é o seu primeiro nome?',
    parts: ['What’s ', { id: 'g1', answer: 'your' }, ' first name?'],
  },
  {
    id: 'G.2',
    speaker: 'Ana',
    text: 'My first name is Ana.',
    translation: 'Meu primeiro nome é Ana.',
    parts: [{ id: 'g2', answer: 'My' }, ' first name is Ana.'],
  },
  {
    id: 'G.3',
    speaker: 'Kim',
    text: 'What’s your phone number?',
    translation: 'Qual é o seu telefone?',
    parts: ['What’s your ', { id: 'g3', answer: 'phone number' }, '?'],
  },
  {
    id: 'G.4',
    speaker: 'Ana',
    text: 'It’s 362 409 518.',
    translation: 'É 362 409 518.',
    parts: [{ id: 'g4', answer: 'It’s' }, ' 362 409 518.'],
  },
] as const
export const call = [
  { id: 'C.1', text: 'Hi, Ana! It’s Kim. I’m checking your contact details.' },
  { id: 'C.2', text: 'Your first name is E-N-A. Is that right?' },
  { id: 'C.3', text: 'Your last name is S-O-U-Z-A. Is that right?' },
  { id: 'C.4', text: 'Your phone number is 984 221 517. Is that right?' },
] as const
export const prompts = {
  review: [
    { id: 'review.1', prompt: 'What’s your name?', answer: 'My name is …' },
    { id: 'review.2', prompt: 'How are you?', answer: 'I’m … What about you?' },
    { id: 'review.3', prompt: 'Where are you from?', answer: 'I’m from …' },
  ],
  comprehension: [
    {
      id: 'comprehension.1',
      prompt: 'What’s Ana’s last name?',
      answer: 'It’s Souza.',
    },
    {
      id: 'comprehension.2',
      prompt: 'How do you spell Ana’s last name?',
      answer: 'S-O-U-Z-A.',
    },
    {
      id: 'comprehension.3',
      prompt: 'What’s Ana’s phone number?',
      answer: 'It’s 984 221 507.',
    },
  ],
  gaps: [
    {
      id: 'gaps.question.1',
      prompt: 'What’s Ana’s first name?',
      answer: 'It’s Ana.',
    },
    {
      id: 'gaps.question.2',
      prompt: 'What’s the phone number in this conversation?',
      answer: 'It’s 362 409 518.',
    },
  ],
  contact: [
    {
      id: 'contact.1',
      prompt: 'What’s your first name?',
      answer: 'My first name is …',
    },
    {
      id: 'contact.2',
      prompt: 'What’s your last name? How do you spell it?',
      answer: 'My last name is … / Say one letter at a time.',
    },
    {
      id: 'contact.3',
      prompt: 'What’s your phone number?',
      answer: 'It’s … / Say one digit at a time.',
    },
  ],
  exit: [
    {
      id: 'exit.1',
      prompt: 'Ask your teacher for a first name and a last name.',
      answer: 'What’s your first name? What’s your last name?',
    },
    {
      id: 'exit.2',
      prompt: 'Ask how to spell the last name.',
      answer: 'How do you spell it?',
    },
    {
      id: 'exit.3',
      prompt: 'Repeat a number. Check it with your teacher.',
      answer: '… Is that right? / Yes, that’s right. / No, sorry. It’s …',
    },
  ],
}
export const anaContact = [
  { id: 'first', label: 'First name', value: 'Ana' },
  { id: 'last', label: 'Last name', value: 'Souza' },
  { id: 'phone', label: 'Phone number', value: '984 221 507' },
]
export const emmaContact = [
  { id: 'first', label: 'First name', value: 'Emma' },
  { id: 'last', label: 'Last name', value: 'Grey' },
  { id: 'phone', label: 'Phone number', value: '312 466 908' },
]
export const pageOrder = Array.from(
  { length: 17 },
  (_, index) => `s${index + 1}`,
)
export const pageMinutes = [
  2, 3, 3, 1.5, 1.5, 4, 3, 4, 3, 3, 3, 2, 4, 5, 5, 2, 1,
]
