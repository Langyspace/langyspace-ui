import type { GuidedConversationContent } from '../shared/GuidedConversation.types'
import { ana, kim } from '../shared/characterPortraits'

export const guidedConversation = {
  rehearsalInstruction:
    'Your teacher reads each line. React in your own words; use phrase support if needed.',
  independentInstruction:
    'Talk about a place you know. Share one experience, listen to your teacher’s reply and ask about a detail you hear.',
  turns: [
    {
      id: 'react-to-place',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine:
        'My best day out was a Sunday in Bom Retiro, in São Paulo. It felt like home!',
      cue: 'React and ask what she did there.',
      support: ['That sounds lovely! What did you do there?'],
    },
    {
      id: 'share-experience',
      partner: 'Ana',
      avatarUrl: ana,
      partnerLine:
        'Yes! It rained all day on Sunday, so we played cards at the hotel. What about you?',
      cue: 'Answer with a trip or a day out of your own.',
      support: ['I went to … . The best part was … .'],
    },
    {
      id: 'follow-up-plan',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine: 'I’d love to go to Salvador. The food looks amazing!',
      cue: 'Ask a follow-up question about her plan.',
      support: ['Who would you go with?', 'What would you like to try?'],
    },
  ],
} satisfies GuidedConversationContent
