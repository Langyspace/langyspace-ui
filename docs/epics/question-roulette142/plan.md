# Question roulette

Scope: new oral-practice component and its UX Lab/local preview only. Existing lessons and deployments are unchanged.

Provided facts: the teacher shares the screen and operates a few controls; experienced learners answer aloud. The requested activity randomly selects questions. No learner typing, scoring, recording or account data is needed.

Verified system: SlidePage owns title/instruction/columns; Button and VocabularyControls own controls; slide tokens own surfaces, type, colors and focus. Instructions remain in the page heading. One direction: six-topic wheel, one question panel, one spin control and optional bulb. No answer list, timer or competing task.

Wireframe: `[topic wheel + Spin] [topic / progress; selected question; optional hint]`. Narrow containers stack the same regions. The question remains readable; only the wheel turns.

Flow: ready → six-turn 3.8-second spin → one question → spin without repeats → all drawn → explicit new round. Select uniformly from remaining questions, not uniformly from topics. The pointer lands on the selected topic. Clear optional support on each draw. Invalid/empty banks disable drawing and recover when corrected. Cancel pending selection when inactive or unmounted. Reduced motion reveals immediately. Preserve keyboard focus on the spin control and announce only the final question.

Delivery steps:

1. Implement semantic public component/types, private selection logic and token-based styles.
2. Add a twelve-question B2 oral bank, stories (dark/light/narrow/empty), UX Lab entry and local preview.
3. Cover no repeats, pointer/selection agreement, restart, double activation, inactivity/unmount, changing banks, reduced motion, hints and SSR; register the real public contract and refresh API declarations.
4. Inspect the primary path locally at desktop/narrow widths and supported themes. Keep the PR draft pending owner review; no package publication or deploy.

Validation budget: one focused test invocation (component + manifest), one typecheck, mandatory declaration/API compatibility check. Browser coverage targets ready, draw, optional hint, next question, keyboard and narrow/light layout. Do not run broad gates or monitor CI.
