/** Personal practice contains language models, not invented teacher preferences. */
export const rehearsalTurns = [
  {
    id: 'music',
    question: 'Do you like music?',
    cue: 'Answer and ask back.',
    hint: 'Diga se gosta de música e pergunte de volta.',
    model: 'Yes, I do. / No, I don’t. And you?',
  },
  {
    id: 'likes',
    question: 'What do you like?',
    cue: 'Say two things you like.',
    hint: 'Use I like para dizer duas coisas de que você gosta.',
    model: 'I like … and … .',
  },
  {
    id: 'soccer',
    question: 'Do you like soccer?',
    cue: 'Answer about yourself.',
    hint: 'Diga se gosta de futebol usando uma resposta curta.',
    model: 'Yes, I do. / No, I don’t.',
  },
] as const

/** Open stems illustrate turn-taking without fixing a topic or a personal answer. */
export const openTurns = [
  { id: 'ask', learner: true, text: 'Do you like …?' },
  { id: 'answer-back', learner: false, text: '… And you?' },
  { id: 'reply', learner: true, text: '…' },
  { id: 'follow-up', learner: false, text: 'What …?' },
  { id: 'expand', learner: true, text: 'I like …' },
  { id: 'react', learner: false, text: '…' },
] as const
