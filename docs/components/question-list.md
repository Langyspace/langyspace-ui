# QuestionList

Canonical factual/comprehension list. Items provide a stable id and prompt, with optional answer, cue and language hint. Author each question block with at least three meaningful questions and full-sentence factual answers. The list keeps all prompts visible; clicking/keyboard activation toggles an independent answer, and one existing bulb reveals hints in order then hides them. The hint and answer replace each other in the same reserved slot via RevealCard external guidance; a footer hint can replace an already-open answer without stacking them. Open source-analysis prompts have no fabricated answer action; live personal responses use the participant dialogue instead.

Use within SlidePage.questions or the side of VoiceMessageExercise. These columns stretch with their companion, and the QuestionList footer stays at the column end with flex layout. In a narrow stacked composition it follows the list naturally; no absolute positioning, internal scroll or fixed page height. PromptExercise is an authoring adapter to this component, not a second visual implementation.

One neutral border/dividers, Montserrat prompts, smaller answers/hints and white numbered markers on the existing pinkHover token (4.62:1 white contrast). Questions reuses SlidePage’s starred eyebrow, matching Guided conversation. Plain/light and MaterialTheme/dark appearances inherit existing slide tokens.

Use `density="compact"` for a longer list such as the six questions beside two recordings. It reduces vertical padding and the list-to-footer gap, preserving all text sizes, targets and the reserved answer slot. Keep three-question columns at their default density.

Use this list for factual comprehension and source-based analysis. Live oral replies and personal reviews belong to the canonical participant dialogue, even when authored as questions; MaterialQuestions supplies first-click response support. A new setting alone does not justify repeating an earlier introduction.
