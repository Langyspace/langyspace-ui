const assets = import.meta.glob('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function scene(id: string) {
  const result = assets[`./assets/scene-${id}.webp`]
  if (!result) throw new Error(`Missing A1.06 generated scene: ${id}`)
  return result
}

export const pets = [
  { id: 'dog', word: 'a dog', translation: 'cachorro' },
  { id: 'cat', word: 'a cat', translation: 'gato' },
  { id: 'fish', word: 'a fish', translation: 'peixe' },
  { id: 'bird', word: 'a bird', translation: 'passarinho' },
  { id: 'rabbit', word: 'a rabbit', translation: 'coelho' },
  { id: 'turtle', word: 'a turtle', translation: 'tartaruga' },
] as const

export const furniture = [
  { id: 'bed', word: 'a bed', translation: 'cama' },
  { id: 'sofa', word: 'a sofa', translation: 'sofá' },
  { id: 'table', word: 'a table', translation: 'mesa' },
] as const

export const positions = [
  { id: 'cat-on', word: 'on', translation: 'em cima de' },
  { id: 'cat-in', word: 'in', translation: 'dentro de' },
  { id: 'cat-under', word: 'under', translation: 'embaixo de' },
  { id: 'cat-next', word: 'next to', translation: 'ao lado de' },
] as const

export const homeQuestions = [
  {
    id: 'thor',
    question: 'Where’s Thor?',
    answer: 'He’s on the sofa.',
    location: 'Sofa',
  },
  {
    id: 'mia',
    question: 'Where’s Mia?',
    answer: 'She’s in the box.',
    location: 'Box',
  },
  {
    id: 'fish',
    question: 'Where’s the fish?',
    answer: 'It’s on the table.',
    location: 'Table',
  },
  {
    id: 'box',
    question: 'Where’s the box?',
    answer: 'It’s next to the bed.',
    location: 'Bed',
  },
] as const

export const dialogue = [
  {
    id: 'D.1',
    speaker: 'Kim',
    text: 'Is this your dog?',
    translation: 'Esse é o seu cachorro?',
  },
  {
    id: 'D.2',
    speaker: 'Ana',
    text: 'Yes! This is Thor. He’s three.',
    translation: 'É! Esse é o Thor. Ele tem três anos.',
  },
  {
    id: 'D.3',
    speaker: 'Kim',
    text: 'Hi, Thor! Do you have a cat too?',
    translation: 'Oi, Thor! Você também tem gato?',
  },
  {
    id: 'D.4',
    speaker: 'Ana',
    text: 'Yes, I do. Her name is Mia. Mia! Where’s Mia?',
    translation: 'Tenho. O nome dela é Mia. Mia! Cadê a Mia?',
  },
  {
    id: 'D.5',
    speaker: 'Kim',
    text: 'Is she on the sofa?',
    translation: 'Ela está no sofá?',
  },
  {
    id: 'D.6',
    speaker: 'Ana',
    text: 'No, she isn’t. Look! She’s under the bed.',
    translation: 'Não. Olha! Ela está embaixo da cama.',
  },
  {
    id: 'D.7',
    speaker: 'Kim',
    text: 'Ha! My sister has two cats.',
    translation: 'Ha! A minha irmã tem dois gatos.',
  },
  {
    id: 'D.8',
    speaker: 'Ana',
    text: 'Two? Mia doesn’t like other cats!',
    translation: 'Dois? A Mia não gosta de outros gatos!',
  },
  {
    id: 'D.9',
    speaker: 'Kim',
    text: 'I love animals!',
    translation: 'Eu amo bichos!',
  },
  {
    id: 'D.10',
    speaker: 'Ana',
    text: 'Thor, no! Don’t run in the house!',
    translation: 'Thor, não! Não corre dentro de casa!',
  },
] as const

export const haveRows = [
  { who: 'I', word: 'have', example: 'I have a dog.', translation: 'eu tenho' },
  {
    who: 'you (pergunta)',
    word: 'Do … have',
    example: 'Do you have a pet?',
    translation: 'você tem?',
  },
  {
    who: 'she, he',
    word: 'has',
    example: 'My sister has two cats.',
    translation: 'ela tem, ele tem',
  },
  {
    who: 'she, he (não)',
    word: 'doesn’t have',
    example: 'Kim doesn’t have a pet.',
    translation: 'ela não tem',
  },
] as const

export const possessiveRows = [
  {
    who: 'Thor (he)',
    word: 'his',
    example: 'His name is Thor.',
    translation: 'o nome dele',
  },
  {
    who: 'Mia (she)',
    word: 'her',
    example: 'Her name is Mia.',
    translation: 'o nome dela',
  },
] as const

export const listeningMessage =
  'Hi! I like Thor and Mia! I love animals, but I don’t have a pet. My sister Jin has a cat and a dog. The dog is young, and the cat is ten!'

export const corrections = [
  {
    sentence: 'My daughter have a dog.',
    answer: 'My daughter has a dog.',
    correct: false,
    why: 'Com she, have vira has.',
  },
  {
    sentence: 'This is Mia. His name is Mia.',
    answer: 'This is Mia. Her name is Mia.',
    correct: false,
    why: 'A Mia é ela: her. Em português é “o nome”, mas em inglês muda com quem tem.',
  },
  {
    sentence: 'Thor is on the sofa.',
    answer: 'Thor is on the sofa.',
    correct: true,
    why: 'On é em cima.',
  },
  {
    sentence: 'Mia is on the box.',
    answer: 'Mia is in the box.',
    correct: false,
    why: 'Dentro da caixa é in. Em português, as duas são “na caixa”.',
  },
  {
    sentence: 'This is Thor. His three.',
    answer: 'This is Thor. He’s three.',
    correct: false,
    why: 'His é dele (his name). Para dizer ele tem três anos, é he’s, de he is. Na fala, os dois soam parecidos.',
  },
] as const

export const homework = [
  {
    title: 'Flashcards · Pets and home',
    description:
      '13 cartões e 5 de apoio · 5 min · Hoje, daqui a 2 dias e daqui a 6 dias.',
    url: 'https://student.langy.space/licoes?tab=flashcards&deck=deck-a1-06',
    line: '1. Flashcards (5 min)',
  },
  {
    title: 'Shadowing · Meet Thor',
    description: 'Fale junto com a Ana: falas 2, 4, 6, 8 e 10 · 5 min.',
    url: 'https://student.langy.space/licoes?tab=shadowing&item=a1-06',
    line: '2. Shadowing (5 min)',
  },
  {
    title: 'Quiz · have, has, on, in',
    description: '10 perguntas · 3 min.',
    url: 'https://student.langy.space/licoes?tab=quiz&item=a1-06',
    line: '3. Quiz (3 min)',
  },
] as const
