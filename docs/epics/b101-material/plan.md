# B1.01 · What have you been doing?

Implement the supplied B1.01 as a complete React lesson in the shared catalog, following the A1.01 ownership model. Lesson copy, answer evaluation, speech and note state stay in `stories/materials/B101`; reusable presentation contracts belong to the library. Direct rendered impact. Feature branch based on approved library 4.3.0, main `1bb191ad5f66be08c97b17594a2b3906086fd09e`. This delivery prepares a visual PR; package publication and portal adoption are separate.

## Reference and boundaries

Claude artifact: https://claude.ai/code/artifact/18e473bc-f348-46f1-bbd7-eee1aed9d178, title “Langy B1.01 What have you been doing?”, live version `1794862095-f141` (2026-11-16T20:48:15Z), verified through the CLI inventory/version API. The authenticated content plane refused its download; no remote file bytes or visual preview are claimed verified.

The complete local authoring source exists in the user's workspace, `Planejamento Langy/codigo/b1-01/`. Frozen reference: `saida/langy-b1-01.html`, generated 2026-11-16T20:47:10Z, SHA-256 `e2bd40846092da0b7386d5ffd533b8c27d596490fd1cb6651d8321cdbd901f94`. `int-b101.js` SHA-256 `a9405823273ff9205d249ce84554a88077ef261fd1e50cc5e90e5aa3ae06ef24`; `b101.css` `08d26c7492d31138632d339e2209c1268318509432a13923905207abc440eef9`. Preserve the original under ignored `.local/b101/reference`; compare its actual rendered states with React, without changing the source. Matching the latest remote bytes remains unverified. Do not mutate Claude.

## Requirements and flow

12 pedagogical pages, 17 screens in exact order: `s1,s2,s31,s32,s33,s4,s51,s52,s6,s62,s61,s7,s8,s9,s10,s11,s12`.

- Review: split lesson title/goal and three source questions.
- Vocabulary: eight activity scenes, four desktop/two mobile columns; hover/focus translation, reveal, initial hints, show all and source false-friend note after completion.
- Warm-up: three independent choice sets, contextual error explanations, hidden options on screen 2, image miniatures and Now you after success.
- Now you: all four source questions and language support.
- Pronunciation: two pairs on separate screens, Listen target, score and retry; choosing before Listen previews the phrase without marking wrong.
- Dialogue: eleven lines divided 6/5, translations, line/sequence playback; separate comprehension with answer reveals.
- Grammar: four hidden rows, audio, explanatory panels; complete rows unlock the second rule and Now you with optional sentence starters.
- Your version: four source exchanges with clickable learner responses, English support initially visible, swapped roles retain independent progress, mini vocabulary.
- Listening: Leo's exact message, four Yes/No statements including inference, corrective feedback and spoken response. Reuse the real phone/native audio contract; transcript appears on second playback per the user's instruction. No fake recording or sent voice message.
- Review: five Right/Wrong sentences with source corrections/explanations plus the learner's sixth sentence.
- Role play: three monotonic closed → clue → answer cards, support, numbered mini vocabulary, editable four-field summary, clear with focus and three controlled checklist steps.
- Homework: source three tasks and exact links, copy with visible fallback on clipboard failure. Links describe supplied content; availability in the portal is not claimed verified.
- Free Notes: opens/closes, Escape and focus restoration, editable/resettable; catalog state is in-memory only, no private teaching instructions in the lesson DOM.
- Native scroll/PageDown/Back retain in-session answers and stop departing speech/audio; no sensitive state persisted.

## Reuse and validation

Reuse SlideDeck/Page, VocabularyGrid, ExercisePanel, QuizOption/Feedback, LearningDialogue, GrammarTable, MinimalPairExercise, RolePlayExercise, VoiceMessageExercise, Button, TextInput and TextareaInput. Add a reusable progressive reveal card; extend SlidePage with opt-in split layout and VocabularyGrid with four columns, preserving existing defaults. RolePlayExercise gets an optional tracker slot.

Generate one opaque contextual image per exercise asset using built-in image generation, in the approved A1.01 3D style. Eight activity scenes plus three ambiguous clue images and a rainy bus-stop answer; no emoji substitutes, no collages. Keep prompts, hashes, dimensions and provenance beside the fixture; generation never runs in the library or lesson browser. Existing A1.01 assets are unchanged.

Check groups (maximum three): (1) focused public contracts/SSR/API/manifest/type/static checks; (2) affected story interaction/a11y checks; (3) source/React screenshot and browser journeys across 1280×800, 1280×620 and 390×844. Cover retry, keyboard, state retention, slow/second audio, notes and copy failures. CI owns full gates. Before/after captures and report belong to `.github/evidence/b101-material`; PR body follows the repository's evidence-only template. Human visual review remains pending.

## Execution

- [x] Locate source, freeze hashes and inspect source interactions and existing contracts.
- [x] Finish and inspect the split opening against the reference.
- [x] Compose all remaining screens with shared contracts; generate and inspect scenes.
- [x] Run scoped checks, capture paired evidence and review the diff.
- [x] Commit/push once and open a visual PR for product-owner review.

## Explicit package allocation for review

The approved 4.3.0 root package measured 69,681 gzip bytes against a 70,000-byte limit. This delivery adds one public progressive-disclosure contract and opt-in presentation/interaction contracts for split layouts, four-column vocabulary, compact learner turns and role-play steps, consumer summary/feedback slots and phone dimensions. Its measured root is 70,650 gzip bytes (+969 bytes, 1.39%). The proposed root allocation is 71,500 bytes, leaving 850 bytes; the raw root limit and every consumer-entry, coverage and architecture budget are unchanged. This is an intentional feature-footprint allocation for review in this PR, not a waiver of a failing existing surface. Do not merge or publish before the product owner's review of this revision.
