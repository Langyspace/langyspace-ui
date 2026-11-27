import type { QuestionRouletteTopic } from '../../../src/components/Exercise/QuestionRoulette.types'

/** Sample oral B2 bank; each lesson owns its actual questions and level. */
export const conversationRouletteTopics: readonly QuestionRouletteTopic[] = [
  {
    id: 'work',
    weight: 6,
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
      {
        id: 'skills',
        prompt:
          'Would you rather be very good at one skill or reasonably good at many? How would that affect your working life?',
        hint: 'Compare both options, then connect your choice to a realistic situation.',
      },
    ],
  },
  {
    id: 'travel',
    weight: 5,
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
    weight: 4,
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
      {
        id: 'value',
        prompt:
          'When is it worth paying more for something? Describe a purchase you would save up for.',
        hint: 'Explain what matters to you and compare price with long-term value.',
      },
      {
        id: 'risk',
        prompt:
          'Would you choose a safe option or take a risk to reach a personal goal? What would help you decide?',
        hint: 'Describe the goal, compare the possible outcomes and explain your priorities.',
      },
    ],
  },
  {
    id: 'people',
    weight: 3,
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
    weight: 6,
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
      {
        id: 'advice',
        prompt:
          'Should people always follow the advice of someone more experienced? When might you disagree?',
        hint: 'Give a balanced view, describe an exception and explain your reasoning.',
      },
    ],
  },
  {
    id: 'stories',
    weight: 5,
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
  {
    id: 'learning',
    label: 'Learning',
    weight: 4,
    questions: [
      {
        id: 'difficult',
        prompt:
          'What is something you found difficult at first but now enjoy doing? What made the difference?',
        hint: 'Describe the first challenge, the turning point and how you feel about it now.',
      },
      {
        id: 'skill',
        prompt:
          'If you could learn one new skill this year, what would you choose and how would you practise it?',
        hint: 'Explain why the skill matters and suggest a realistic way to get started.',
      },
    ],
  },
  {
    id: 'future',
    label: 'Future',
    weight: 3,
    questions: [
      {
        id: 'change',
        prompt:
          'What do you think will change most in everyday life over the next ten years? Why?',
        hint: 'Make a prediction, explain what makes it likely and consider one possible drawback.',
      },
      {
        id: 'advice',
        prompt:
          'If you could send one piece of advice to your future self, what would it be?',
        hint: 'Choose something meaningful, explain the reason and give an example from your life today.',
      },
    ],
  },
]
