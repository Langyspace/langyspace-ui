export const firstTurns = [
  { speaker: 'Kim', text: 'Hi, Ana! Where are you?', audio: 'D.1' },
  {
    speaker: 'You',
    cue: 'diga onde você está agora',
    text: 'I’m at home. · I’m in …',
  },
  { speaker: 'Kim', text: 'What are you doing now?', audio: 'Y8.3' },
  {
    speaker: 'You',
    cue: 'diga o que você está fazendo',
    text: 'I’m studying. · I’m drinking coffee.',
  },
  {
    speaker: 'Kim',
    text: 'Sorry? Can you say that again?',
    audio: 'D.3',
    signal: true,
  },
  { speaker: 'You', cue: 'repita, mais devagar', text: 'I’m …' },
  { speaker: 'Kim', text: 'Yeah, great! And do you usually work from home?' },
  {
    speaker: 'You',
    cue: 'responda a verdade, ou invente, e diga como é esta semana',
    text: 'Yes, I do. · No, I don’t. · Sometimes. I usually work in … · This week I’m …',
  },
]
export const swappedTurns = [
  {
    speaker: 'You',
    cue: 'cumprimente e pergunte onde ela está',
    text: 'Hi! Where are you?',
  },
  { speaker: 'Teacher', text: 'Hi, Kim! I’m in Porto, next to the river.' },
  {
    speaker: 'You',
    cue: 'pergunte o que ela está fazendo',
    text: 'What are you doing now?',
  },
  {
    speaker: 'Teacher',
    text: 'I’m walking to my meeting. It’s at …',
    signal: true,
  },
  {
    speaker: 'You',
    cue: 'o sinal caiu: diga isso e peça para ela repetir',
    text: 'Bad signal! Sorry? Can you say that again?',
  },
  { speaker: 'Teacher', text: 'I’m walking to my meeting. It’s at ten.' },
  {
    speaker: 'You',
    cue: 'pergunte da rotina dela',
    text: 'Do you usually work from home?',
  },
]
