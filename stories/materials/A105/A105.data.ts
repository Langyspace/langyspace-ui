import type { ProduceItem } from './A105.types'
import kimAvatar from '../A101/assets/bust_kim.webp'
import anaAvatar from '../A101/assets/bust_ana.webp'

export const portraits = { Kim: kimAvatar, Ana: anaAvatar }
export const produce: readonly ProduceItem[] = [
  { id: 'banana', word: 'a banana', translation: 'banana', price: 2 },
  { id: 'apple', word: 'an apple', translation: 'maçã', price: 4 },
  { id: 'orange', word: 'an orange', translation: 'laranja', price: 5 },
  { id: 'mango', word: 'a mango', translation: 'manga', price: 3 },
  { id: 'pineapple', word: 'a pineapple', translation: 'abacaxi', price: 6 },
  { id: 'watermelon', word: 'a watermelon', translation: 'melancia', price: 8 },
  { id: 'tomato', word: 'a tomato', translation: 'tomate', price: 4 },
  { id: 'potato', word: 'a potato', translation: 'batata', price: 3 },
  { id: 'carrot', word: 'a carrot', translation: 'cenoura', price: 2 },
  { id: 'onion', word: 'an onion', translation: 'cebola', price: 3 },
  { id: 'lettuce', word: 'lettuce', translation: 'alface', price: 2 },
  { id: 'corn', word: 'corn', translation: 'milho', price: 5 },
]
const assets = import.meta.glob('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
export function scene(id: string) {
  const url = assets[`./assets/scene-${id}.webp`]
  if (!url) throw new Error(`Missing A1.05 illustration: ${id}`)
  return url
}
export const dialogue = [
  {
    id: 'D.1',
    speaker: 'Kim',
    text: 'This market is great! Do you like mangoes?',
    translation: 'Esta feira é ótima! Você gosta de manga?',
  },
  {
    id: 'D.2',
    speaker: 'Ana',
    text: 'Yes, I do. I love mangoes. What about you?',
    translation: 'Sim. Eu amo manga. E você?',
  },
  {
    id: 'D.3',
    speaker: 'Kim',
    text: 'I like mangoes, but I don’t like watermelons.',
    translation: 'Eu gosto de manga, mas não gosto de melancia.',
  },
  {
    id: 'D.4',
    speaker: 'Ana',
    text: 'My mother loves watermelons! Do you like carrots?',
    translation: 'Minha mãe ama melancia! Você gosta de cenoura?',
  },
  {
    id: 'D.5',
    speaker: 'Kim',
    text: 'Yes, I do. How much are they?',
    translation: 'Sim. Quanto custam?',
  },
  {
    id: 'D.6',
    speaker: 'Ana',
    text: 'They’re two dollars.',
    translation: 'São dois dólares.',
  },
] as const
export const gaps = [
  {
    id: 'G.1',
    speaker: 'Kim',
    text: 'Do you like apples?',
    translation: 'Você gosta de maçã?',
    parts: ['Do you ', { id: 'g1', answer: 'like' }, ' apples?'],
  },
  {
    id: 'G.2',
    speaker: 'Ana',
    text: 'Yes, I do. I love apples.',
    translation: 'Sim. Eu amo maçã.',
    parts: ['Yes, I ', { id: 'g2', answer: 'do' }, '. I love apples.'],
  },
  {
    id: 'G.3',
    speaker: 'Kim',
    text: 'My sister likes bananas. What about you?',
    translation: 'Minha irmã gosta de banana. E você?',
    parts: [
      'My sister ',
      { id: 'g3', answer: 'likes' },
      ' bananas. What about you?',
    ],
  },
  {
    id: 'G.4',
    speaker: 'Ana',
    text: 'I like bananas, but I don’t like onions.',
    translation: 'Eu gosto de banana, mas não gosto de cebola.',
    parts: [
      'I like bananas, but I ',
      { id: 'g4', answer: 'don’t like' },
      ' onions.',
    ],
  },
  {
    id: 'G.5',
    speaker: 'Kim',
    text: 'Does your mother like onions?',
    translation: 'Sua mãe gosta de cebola?',
    parts: ['Does your mother ', { id: 'g5', answer: 'like' }, ' onions?'],
  },
  {
    id: 'G.6',
    speaker: 'Ana',
    text: 'No, she doesn’t. She likes carrots.',
    translation: 'Não. Ela gosta de cenoura.',
    parts: [
      'No, she ',
      { id: 'g6', answer: 'doesn’t' },
      '. She likes carrots.',
    ],
  },
] as const
export const message =
  'Hi! See you on Saturday at the market. I need some fruit. I like bananas and green apples, but I don’t like oranges. My sister Jin loves mangoes. What fruit do you like?'
export const prompts = {
  warmup: [
    {
      id: 'warmup.1',
      prompt: 'Do you like fruit?',
      answer: 'Yes, I do. I like … / No, I don’t.',
    },
    { id: 'warmup.2', prompt: 'What fruit do you like?', answer: 'I like …' },
    {
      id: 'warmup.3',
      prompt: 'Do you buy fruit at a market or a supermarket?',
      answer: 'I buy fruit at a …',
    },
  ],
  preferences: [
    {
      id: 'preferences.1',
      prompt: 'Apples or bananas?',
      answer: 'I like … What about you?',
    },
    {
      id: 'preferences.2',
      prompt: 'What fruit don’t you like?',
      answer: 'I don’t like …',
    },
    {
      id: 'preferences.3',
      prompt: 'What fruit does your teacher like?',
      answer: 'Ask: Do you like …? Then say: My teacher likes …',
    },
  ],
  comprehension: [
    {
      id: 'comprehension.1',
      prompt: 'What fruit does Kim like?',
      answer: 'She likes mangoes.',
    },
    {
      id: 'comprehension.2',
      prompt: 'Does Kim like watermelons?',
      answer: 'No, she doesn’t.',
    },
    {
      id: 'comprehension.3',
      prompt: 'How much are the carrots?',
      answer: 'They’re two dollars.',
    },
  ],
  gaps: [
    {
      id: 'gaps.questions.1',
      prompt: 'Does Ana like apples?',
      answer: 'Yes, she does. She loves apples.',
    },
    {
      id: 'gaps.questions.2',
      prompt: 'What does Kim’s sister like?',
      answer: 'She likes bananas.',
    },
    {
      id: 'gaps.questions.3',
      prompt: 'What does Ana’s mother like?',
      answer: 'She likes carrots.',
    },
  ],
  personal: [
    {
      id: 'personal.1',
      prompt: 'What vegetables do you like?',
      answer: 'I like … and …',
    },
    {
      id: 'personal.2',
      prompt: 'What food does someone in your family love?',
      answer: 'My … loves …',
    },
    {
      id: 'personal.3',
      prompt: 'What food don’t you like?',
      answer: 'I don’t like … What about you?',
    },
  ],
  listening: [
    {
      id: 'listening.1',
      prompt: 'Is the market on Saturday or Sunday?',
      answer: 'On Saturday.',
    },
    {
      id: 'listening.2',
      prompt: 'What fruit does Kim like?',
      answer: 'She likes bananas and green apples.',
    },
    {
      id: 'listening.3',
      prompt: 'What fruit does Jin love?',
      answer: 'She loves mangoes.',
    },
  ],
  reply: [
    {
      id: 'reply.1',
      prompt: 'Tell Kim two fruits you like.',
      answer: 'Hi, Kim! I like … and …',
    },
    {
      id: 'reply.2',
      prompt: 'Tell her one fruit you don’t like.',
      answer: 'I don’t like …',
    },
    {
      id: 'reply.3',
      prompt: 'Ask Kim a question.',
      answer: 'Do you like …? / What vegetables do you like?',
    },
  ],
  review: [
    { id: 'review.1', prompt: 'I likes apples.', answer: 'I like apples.' },
    {
      id: 'review.2',
      prompt: 'Kim like bananas.',
      answer: 'Kim likes bananas.',
    },
    {
      id: 'review.3',
      prompt: 'She don’t like onions.',
      answer: 'She doesn’t like onions.',
    },
  ],
  conversation: [
    {
      id: 'conversation.1',
      prompt: 'What do you buy at the market?',
      answer: 'I buy … and …',
    },
    {
      id: 'conversation.2',
      prompt: 'What food do you and your teacher both like?',
      answer: 'We both like … Ask: Do you like …?',
    },
    {
      id: 'conversation.3',
      prompt: 'What does your family like to eat?',
      answer: 'My … likes … / We like …',
    },
  ],
}
export const homework = [
  {
    title: 'Vocabulary · Fruit and vegetables',
    description:
      'Say the twelve words. Choose three foods you like and three you don’t like.',
  },
  {
    title: 'Speaking · Your market visit',
    description:
      'Record a short message: say what you like, what your family likes and what you want to buy.',
  },
] as const
export const pageOrder = [
  's1',
  's2',
  's3',
  's4',
  's5',
  's6',
  's8',
  's82',
  's9',
  's91',
  's10',
  's11',
  's111',
  's12',
]
