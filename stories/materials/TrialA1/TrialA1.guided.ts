import type { GuidedConversationContent } from '../shared/GuidedConversation.types'
import { kim } from '../shared/characterPortraits'

export const guidedConversation = {
  rehearsalInstruction:
    'Your teacher is Kim. Answer about yourself. Use support if needed.',
  independentInstruction:
    'Try a new topic without reading. Answer and ask a question.',
  turns: [
    {
      id: 'like-music',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'Do you like music?',
      cue: 'Answer and ask: “And you?”',
      support: ['Yes, I do. / No, I don’t. And you?'],
    },
    {
      id: 'your-likes',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'I like music and books. What do you like?',
      cue: 'Say what you like.',
      support: ['I like … and … .'],
    },
    {
      id: 'react-soccer',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'I like soccer!',
      cue: 'Say if you like the same things.',
      support: ['Me too! / I don’t like soccer.'],
    },
  ],
} satisfies GuidedConversationContent
