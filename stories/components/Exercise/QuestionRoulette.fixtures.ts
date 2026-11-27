import type { QuestionRouletteTopic } from '../../../src/components/Exercise/QuestionRoulette.types'

/** Sample oral B2 bank; each lesson owns its actual questions and level. */
export const conversationRouletteTopics: readonly QuestionRouletteTopic[] = [
  {
    id: 'work',
    label: 'Work',
    questions: [
      {
        id: 'team',
        prompt:
          'What makes a team work well together? Give an example from your own experience.',
        hint: 'Name one quality, describe a real situation and explain the result.',
      },
      {
        id: 'change',
        prompt:
          'If you could change one thing about the way people work, what would you change and why?',
        hint: 'Explain the problem first, then your change and who it would help.',
      },
    ],
  },
  {
    id: 'travel',
    label: 'Travel',
    questions: [
      {
        id: 'unexpected',
        prompt:
          'Tell me about a trip that did not go as planned. What happened, and how did you deal with it?',
        hint: 'Set the scene, explain the surprise and say what you did next.',
      },
      {
        id: 'return',
        prompt:
          'Would you rather return to a place you love or visit somewhere completely new? Why?',
        hint: 'Choose one, compare the two experiences and give an example.',
      },
    ],
  },
  {
    id: 'choices',
    label: 'Choices',
    questions: [
      {
        id: 'decision',
        prompt:
          'Tell me about a difficult decision you made. Looking back, would you make the same choice?',
        hint: 'Describe the options, explain your choice and reflect on the result.',
      },
      {
        id: 'time',
        prompt:
          'If you had one extra free day every week, how would you use it? What would you stop doing?',
        hint: 'Describe a realistic day and explain which priorities would change.',
      },
    ],
  },
  {
    id: 'people',
    label: 'People',
    questions: [
      {
        id: 'friend',
        prompt:
          'What quality do you value most in a friend? Tell me about someone who has it.',
        hint: 'Name the quality and show it through something the person did.',
      },
      {
        id: 'disagreement',
        prompt:
          'How do you handle a disagreement with someone you care about? Describe an approach that works for you.',
        hint: 'Explain how you listen, express your view and look for a solution.',
      },
    ],
  },
  {
    id: 'opinions',
    label: 'Opinions',
    questions: [
      {
        id: 'technology',
        prompt:
          'Has technology made it easier or harder to stay close to people? Explain your view.',
        hint: 'Give your view, a concrete example and one limitation of your argument.',
      },
      {
        id: 'plans',
        prompt:
          'Is it better to plan your free time or be spontaneous? What depends on the situation?',
        hint: 'Compare the advantages and describe when you would choose each approach.',
      },
    ],
  },
  {
    id: 'stories',
    label: 'Stories',
    questions: [
      {
        id: 'learn',
        prompt:
          'Tell me about a time you had to learn something quickly. How did you manage it?',
        hint: 'Explain the challenge, the steps you took and what helped most.',
      },
      {
        id: 'mistake',
        prompt:
          'Describe a small mistake that taught you something useful. What do you do differently now?',
        hint: 'Tell the story, explain what you learned and connect it to the present.',
      },
    ],
  },
]
