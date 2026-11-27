# QuestionRoulette

Oral question drawing for a screen-shared lesson: the teacher spins, and the learner answers aloud. The component owns drawing, wheel motion, the current question and optional speaking support. It never grades, records, requests microphone access or stores participant data.

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

Without explicit topic weights, every remaining question has equal probability. Optional positive `weight` values set relative sector area and topic draw probability; questions within a selected topic are drawn uniformly. Sector geometry remains fixed for the entire round, including after a topic is exhausted. Exhausted topics stay visible but cannot be drawn again until New round. A question is consumed only when revealed, and the pointer lands on its topic. For eight mirrored sectors, repeat the same four weights on opposite topics: `6, 5, 4, 3, 6, 5, 4, 3` produces `60°, 50°, 40°, 30°` twice. Sector and label colors stay constant after selection; the pointer and question header identify the result. Questions do not repeat within a round. The last question remains visible after exhaustion; New round explicitly starts drawing from the full bank again. No silent repeat cycle or timer pressure.

The 3.8-second draw uses six full turns and a long deceleration, with dedicated `exercises.rouletteSpinDuration`, `rouletteSpinEasing` and `rouletteSpinTurns` tokens. The question stays hidden until the spin completes, then appears with a short fade. A shared outer frame, layered wheel rim, fixed perimeter markers and small stand distinguish the game surface from a plain card. The center control is a compact 48px hub. Reduced-motion preferences reveal immediately. Rapid activation is locked during a draw. Leaving the activity cancels a pending draw without consuming it; use `disabled` for inactive material pages. Unmounting clears the timer. Final questions are announced once in a polite status region; focus stays on the spin button. The bulb reveals optional speaking strategy, not a fixed personal answer; it resets on each draw.

Use SlidePage for the title/instructions and a two-column exercise span. The wheel and question become one vertical column on narrow containers. All colors, type, focus and controls follow the existing slide theme, including light/dark materials. Do not add points, countdowns, lists of answers or multiple instructions around this oral activity.

References: Exercise/QuestionRoulette stories and Exercise/UX Lab → Question roulette. Local preview is prepared separately; no lesson or catalog is automatically changed.
