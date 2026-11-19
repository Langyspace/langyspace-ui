import type { GuidedConversationContent } from '../shared/GuidedConversation.types'
import { ana, kim } from '../shared/characterPortraits'

export const guidedConversation = {
  rehearsalInstruction:
    'Your teacher takes a view from the dialogue. Respond naturally; use the support only when needed.',
  independentInstruction:
    'Choose a view from the dialogue and discuss when it might work. Ask your teacher a question and respond to the answer.',
  turns: [
    {
      id: 'acknowledge-concern',
      partner: 'Kim',
      avatarUrl: kim,
      partnerLine:
        'I see your point, but I’d rather stay home. No commute, no noise, and I take a break when I want.',
      cue: 'Acknowledge one benefit, then raise a concern.',
      support: ['That’s true. One thing I’d miss, though, is … .'],
    },
    {
      id: 'qualify-answer',
      partner: 'Ana',
      avatarUrl: ana,
      partnerLine: 'Don’t you feel lonely sometimes?',
      cue: 'Give a qualified answer and ask for her experience.',
      support: ['Sometimes, but it depends on … . How do you …?'],
    },
    {
      id: 'build-on-view',
      partner: 'Ana',
      avatarUrl: ana,
      partnerLine:
        'For me, a good day is when I get things done and still have time for my friends.',
      cue: 'Build on her point and add a different priority.',
      support: ['I can relate to that. For me, … matters too.'],
    },
  ],
} satisfies GuidedConversationContent
