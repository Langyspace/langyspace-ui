# QuestionList

Canonical factual/comprehension list. Each question is an independent, equal-width card with content-driven height. Use at least three meaningful questions and full-sentence factual answers. Clicking or keyboard activation toggles an independent answer; one bulb reveals language hints in order and then hides them. Hints replace answers in the same position without stacking. Hidden guidance occupies no reserved lines. `answerMinLines` remains accepted for compatibility but does not impose height on QuestionList cards; other RevealCard presentations keep their own sizing.

Use within SlidePage.questions or beside VoiceMessageExercise. The hint button sits immediately below the last card, aligned right with a single small gap. Do not push it to the column end or create another floating listening control. The list and each card fill the available column width regardless of question length. No fixed card heights, absolute footer positioning or internal scrolling.

Use Montserrat medium-weight prompts, smaller full-sentence answers and 24px pink numbered markers on a low-opacity primary background. Each card has its own subtle border and surface. Questions keeps SlidePage’s starred eyebrow, matching Guided conversation. Light and dark themes inherit the existing slide tokens. `density="compact"` reduces card padding while retaining text sizes and accessible trigger targets.

Live oral replies and personal reviews use the participant dialogue instead, even when authored as questions; MaterialQuestions supplies first-click response support. The list handles comprehension and source-based analysis, including video. Updating its appearance must not alter the selected video interval, authored questions or lesson instructions.
