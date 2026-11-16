import type { ProduceItem } from './A105.types'

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
  const result = assets[`./assets/scene-${id}.webp`]
  if (!result) throw new Error(`Missing A1.05 generated scene: ${id}`)
  return result
}

export const dialogue = [
  {
    id: 'D.1',
    speaker: 'Kim',
    text: 'Wow! What’s this?',
    translation: 'Nossa! O que é isso?',
  },
  {
    id: 'D.2',
    speaker: 'Ana',
    text: 'It’s a mango. Try it! Do you like mangoes?',
    translation: 'É uma manga. Experimenta! Você gosta de manga?',
  },
  {
    id: 'D.3',
    speaker: 'Kim',
    text: 'I don’t know! How much is it?',
    translation: 'Não sei! Quanto custa?',
  },
  {
    id: 'D.4',
    speaker: 'Ana',
    text: 'It’s three reais.',
    translation: 'São três reais.',
  },
  {
    id: 'D.5',
    speaker: 'Kim',
    text: 'OK. And do you like pineapples?',
    translation: 'Tá. E você gosta de abacaxi?',
  },
  {
    id: 'D.6',
    speaker: 'Ana',
    text: 'Yes, I do. I love pineapples!',
    translation: 'Gosto. Eu amo abacaxi!',
  },
  {
    id: 'D.7',
    speaker: 'Kim',
    text: 'Me too. But I don’t like watermelons.',
    translation: 'Eu também. Mas eu não gosto de melancia.',
  },
  {
    id: 'D.8',
    speaker: 'Ana',
    text: 'Oh! My mother loves watermelons. She eats a lot!',
    translation: 'Ah! A minha mãe ama melancia. Ela come muito!',
  },
] as const

export const message =
  'Hi! See you on Saturday at the market. I need a lot of fruit! I like bananas and green apples. I don’t like oranges. And my sister Jin loves mangoes!'

export const grammar = [
  {
    who: 'I',
    word: 'like',
    example: 'I like mangoes.',
    translation: 'eu gosto',
  },
  {
    who: 'I (não)',
    word: 'don’t like',
    example: 'I don’t like watermelons.',
    translation: 'eu não gosto',
  },
  {
    who: 'she, he',
    word: 'likes',
    example: 'Kim likes pineapples.',
    translation: 'ela gosta, ele gosta',
  },
  {
    who: 'she, he (não)',
    word: 'doesn’t like',
    example: 'My mother doesn’t like onions.',
    translation: 'ela não gosta',
  },
] as const

export const corrections = [
  {
    sentence: 'I likes apples.',
    answer: 'I like apples.',
    correct: false,
    why: 'Com I, é like, sem s. O s é só para he, she ou um nome.',
  },
  {
    sentence: 'Kim like bananas.',
    answer: 'Kim likes bananas.',
    correct: false,
    why: 'Kim é ela: likes, com s.',
  },
  {
    sentence: 'My mother doesn’t like onions.',
    answer: 'My mother doesn’t like onions.',
    correct: true,
    why: 'Com she, o negativo é doesn’t.',
  },
  {
    sentence: 'She don’t like green apples.',
    answer: 'She doesn’t like green apples.',
    correct: false,
    why: 'Com she, é doesn’t, e não don’t.',
  },
  {
    sentence: 'It’s a orange.',
    answer: 'It’s an orange.',
    correct: false,
    why: 'Orange começa com som de vogal: an.',
  },
] as const

export const homework = [
  {
    title: 'Flashcards · Fruit and vegetables',
    description:
      '15 cartões e 5 de apoio · 5 min · Hoje, daqui a 2 dias e daqui a 6 dias.',
    url: 'https://student.langy.space/licoes?tab=flashcards&deck=deck-a1-05',
    line: '1. Flashcards (5 min)',
  },
  {
    title: 'Shadowing · At the street market',
    description: 'Fale junto com a Ana: falas 2, 4, 6 e 8 · 5 min.',
    url: 'https://student.langy.space/licoes?tab=shadowing&item=a1-05',
    line: '2. Shadowing (5 min)',
  },
  {
    title: 'Quiz · like and likes',
    description: '10 perguntas · 3 min.',
    url: 'https://student.langy.space/licoes?tab=quiz&item=a1-05',
    line: '3. Quiz (3 min)',
  },
] as const

export const homeworkMessage =
  'Lição de casa da aula A1.05 · At the street market\n' +
  homework.map((item) => `${item.line}: ${item.url}`).join('\n')
