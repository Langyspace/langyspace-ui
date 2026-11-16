# Technical plan

Direct visual impact, limited to the shared catalog and new components. Existing portal materials stay unchanged pending library approval/release.

Reuse SlideDeck, SlidePage, VoiceMessageExercise, Button, ChoiceCard, Avatar and QuizOption. Add ExercisePanel, VocabularyGrid, LearningDialogue, RevealCard and MatchPairs for independent reusable contracts. Extend QuizOption with an opt-in compact density; its existing default stays unchanged. Keep component types and styles separate and theme recipe values in foundations.

Catalog ownership: stories/materials/A101 contains source data, answer evaluation, matching state, speech orchestration, teacher-note window, homework clipboard fallback and all 26 page compositions. No lesson copy/answer keys enter src or root exports. Source images are extracted unchanged from the local published artifact; retain hashes/provenance.

Validation budget: one focused interaction/SSR/manifest and static/API check group; one browser and Storybook group covering source order, reveal/feedback/matching/gaps, slide-state persistence, transcript, audio cancellation, notes and copying. CI owns broad gates. Inspect rendered desktop/mobile pages and keep matching before/after evidence in PR #42.

Review: product scope follows the current 26 screens; no route/auth/data migrations. Technical ownership avoids a public A101 component and duplicate answer evaluators. Accessibility uses native buttons, labeled controls and explicit feedback. Package adoption remains a documented release dependency rather than a local-source alias or unpublished package pin.

## Final verification notes

The reference export was frozen after concurrent edits were detected. Before images show the local published prototype (including its local styling), not a claim of an immutable remote Claude file download. The latest USA distractor/feedback was adopted after dataset and asset comparison.

Initial checks exposed inherited dark-heading contrast, small goal-label contrast, an image-to-scene mapping error and media sizing; all were corrected. The asset loader now includes original WebP portraits and rejects missing fixture assets. Capture setup clears the prototype's session storage and waits for fonts/images. Checks were not disabled to hide these findings.

Teacher guidance for the voice note follows the user's second-listen transcript rule, superseding the prototype's extra manual transcript actions. Notes render in a separate document and are a teacher-only fixture concern; student composition must omit teaching guidance rather than hide it in its lesson DOM.
