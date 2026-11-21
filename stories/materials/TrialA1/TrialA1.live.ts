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

/** Learner cues first; optional help reveals language, never invented personal answers. */
export const openTurns = [
  {
    id: 'ask',
    learner: true,
    cue: 'Ask about something your teacher likes.',
    hint: 'Escolha um assunto e use Do you like para perguntar.',
    model: 'Do you like …?',
  },
  { id: 'answer-back', learner: false, cue: 'Answer, then ask: And you?' },
  {
    id: 'reply',
    learner: true,
    cue: 'Answer and add one thing you like.',
    hint: 'Use Yes, I do ou No, I don’t e acrescente algo de que você gosta.',
    model: 'Yes, I do. / No, I don’t. I like … .',
  },
  { id: 'follow-up', learner: false, cue: 'Ask about another topic.' },
  {
    id: 'expand',
    learner: true,
    cue: 'Give your opinion, then ask back.',
    hint: 'Diga sua opinião com I like / I don’t like e pergunte de volta.',
    model: 'I like … . / I don’t like … . And you?',
  },
  { id: 'react', learner: false, cue: 'Answer about yourself.' },
] as const
