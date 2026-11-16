# Progress

Current delivery implemented: complete 26-screen A1.01 catalog fixture and five reusable exercise contracts, continuing UI PR #42. Product lesson content remains outside package exports. No remote design mutation or portal deployment.

Image revision requested by the user: prototype emojis were examples. Added 15 generated, opaque contextual illustrations covering six emotion warm-ups/vocabulary, six country warm-ups and the six Guess who guests (with three additional emotion/person scenes). The first generated Tom scene provides the style reference. Prompts, meaning, alt text, page mapping, source/output hashes and compression settings are retained in `image-scenes.json` and `assets/generated-scenes.json`; final 768px WebPs total 1,539,820 bytes. The existing student flashcard producer was inspected but not modified or called. See `image-generation.md` for the distinct scene profile and future provider adapter; generation in this delivery used built-in image_gen.

Country clues now use the same flag-icons 7.5.0 source as the flashcard producer, preserving all symbols and carrying its license/hashes. Original prototype assets remain preserved. Added optional `VocabularyGrid imageVariant="scene"`; its default isolated framing is retained. Contextual imagery stays outside package exports and generation credentials never enter the UI.

Image revision validation passed: TypeScript, scoped ESLint, six focused exercise-contract cases, emitted declarations and the additive API snapshot (153 values / 241 types / 509 declarations). The only public contract addition is the optional vocabulary image variant. The dedicated browser capture verified 15 asset hashes/dimensions/opaque backgrounds, 38 paired screen/state captures at desktop/mobile, six new scene variants (light, dark and narrow), keyboard reveal persistence, warm-up wrong/correct feedback, guest marking and no horizontal overflow. The capture's initial SVG assertion expected a file URL; it was corrected to recognize Vite's inline SVG transport. New evidence is under `.github/evidence/a101-scenes`; previous captures remain historical.

Completed: reusable components and compact QuizOption; all source-order pages and original assets; vocabulary/hints, warm-up feedback, dialogue/translation/speech pause, grammar, gaps, matching, native voice-note replay transcript, Guess who, question conversion, conversation marking, homework clipboard and separate teacher notes/timer.

Validation: 11 focused component/manifest tests; three speech-orchestration cases; all 19 affected Storybook variants exercised, with targeted reruns after fixes. Final API report: 153 values, 241 types, 509 declarations. TypeScript and scoped ESLint passed. Full CI remains responsible for unrelated gates.

Browser evidence: 72 paired reference/React captures at 1280×720 and 390×844, plus native second-listen transcript, private notes and component theme/narrow previews. All four media/navigation/clipboard/private-window journeys passed. Matching received a final mobile layout check covering all eight questions within the viewport; the affected captures and dark/narrow cases were refreshed.

The local published prototype changed during capture. Literal datasets were compared: only the USA warm-up incorrect choice and its feedback changed. That update was incorporated; binary assets and SVG flag builders were unchanged. Comparisons now use a frozen export (SHA-256 in evidence provenance), preserving its local styling. The rendered Claude page supplied the visual target and initial 26-screen inventory; private artifact file transport remained unavailable. No full remote file synchronization is claimed.

Next subtask: product-owner visual review of the current PR #42 revision. After approval, prepare the official library release and then a teacher adoption PR against staging. Teacher currently consumes UI 4.1.0; no unreleased source alias, unpublished package pin, portal route or learner-data write was introduced.

Remaining material assets: browser speech for vocabulary/dialogue and a local Samantha demonstration for the phone. Final recordings remain pending. Student homework URLs are copied exactly from the source; production destination behavior is not claimed by this library preview.

Visual gate review: pending human.
