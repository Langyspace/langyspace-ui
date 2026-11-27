# QuestionRoulette

Oral question drawing for a screen-shared lesson: the teacher spins, and the learner answers aloud. The component owns drawing, short wheel motion, the current question and optional speaking support. It never grades, records, requests microphone access or stores participant data.

```tsx
<QuestionRoulette
  topics={[
    {
      id: 'work',
      label: 'Work',
      questions: [
        {
          id: 'team',
          prompt: 'What makes a team work well together?',
          hint: 'Give a reason and a real example.',
        },
        {
          id: 'change',
          prompt: 'What would you change about your working week?',
        },
      ],
    },
  ]}
  disabled={!active}
  onDraw={({ question, topic, drawNumber }) =>
    reportDraw(question.id, topic.id, drawNumber)
  }
/>
```

Supply one to eight nonempty topics with short labels and meaningful, level-appropriate questions. Topic IDs are unique; question IDs are unique within a topic. Invalid/empty banks disable drawing and recover when replaced. Content changes start a fresh round; recreated equivalent arrays preserve the round. No domain-specific questions are embedded in the package.

Every remaining question has equal probability, including when topics have different bank sizes. A question is consumed only when revealed. The pointer lands on its actual topic. Questions do not repeat within a round. The last question remains visible after exhaustion; New round explicitly starts drawing from the full bank again. No silent repeat cycle or timer pressure.

The short 800 ms rotation uses the existing spinner duration token. Reduced-motion preferences reveal immediately. Rapid activation is locked during a draw. Leaving the activity cancels a pending draw without consuming it; use `disabled` for inactive material pages. Unmounting clears the timer. Final questions are announced once in a polite status region; focus stays on the spin button. The bulb reveals optional speaking strategy, not a fixed personal answer; it resets on each draw.

Use SlidePage for the title/instructions and a two-column exercise span. The wheel and question become one vertical column on narrow containers. All colors, type, focus and controls follow the existing slide theme, including light/dark materials. Do not add points, countdowns, lists of answers or multiple instructions around this oral activity.

References: Exercise/QuestionRoulette stories and Exercise/UX Lab → Question roulette. Local preview is prepared separately; no lesson or catalog is automatically changed.
