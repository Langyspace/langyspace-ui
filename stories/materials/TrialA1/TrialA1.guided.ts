import type { GuidedConversationContent } from '../shared/GuidedConversation.types'
import { kim } from '../shared/characterPortraits'

export const guidedConversation = {
  labels: {
    switcher: 'Etapas da conversa',
    model: 'Modelo',
    rehearse: 'Ensaio',
    independent: 'Sem roteiro',
    previous: 'Voltar',
    next: 'Próximo turno',
    turn: 'Turno',
    of: 'de',
    learner: 'Você',
    support: 'Ver apoio',
    hideSupport: 'Esconder apoio',
  },
  rehearsalInstruction:
    'A professora faz a fala da Kim. Responda sobre você; abra o apoio se precisar.',
  independentInstruction:
    'Repitam com outro assunto, sem ler as frases. Respondam sobre vocês e devolvam uma pergunta.',
  turns: [
    {
      id: 'like-music',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'Do you like music?',
      cue: 'Responda e pergunte: e você?',
      support: ['Yes, I do. / No, I don’t. And you?'],
    },
    {
      id: 'your-likes',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'I like music and books. What do you like?',
      cue: 'Conte do que você gosta.',
      support: ['I like … and … .'],
    },
    {
      id: 'react-soccer',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'I like soccer!',
      cue: 'Diga se vocês gostam da mesma coisa.',
      support: ['Me too! / I don’t like soccer.'],
    },
  ],
} satisfies GuidedConversationContent
