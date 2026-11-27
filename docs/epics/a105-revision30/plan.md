# A1.05 — At the street market

Rendered impact: direct. User request: full pedagogical revision, component-library priority, transparent fruit illustrations and real ElevenLabs recordings. Target: a teacher-led individual A1 conversation lesson, 50 minutes. Staging only; the product owner performs tests and visual review. No production, Claude Design, UX Lab, backend, package publication or merge is included in this delivery.

| Page | Purpose                                                         | Minutes |
| ---- | --------------------------------------------------------------- | ------- |
| s1   | Activate personal food preferences and market context           | 3       |
| s2   | Recognize six fruits with whole transparent objects             | 5       |
| s3   | Move from naming to personal choices and asking back            | 3       |
| s4   | Recognize six vegetables, reusing valid images                  | 4       |
| s5   | Compare like/likes, negatives and short preference questions    | 3       |
| s6   | Understand a natural six-turn market dialogue                   | 4       |
| s61  | Retrieve three facts and answer in sentences                    | 3       |
| s8   | Complete a different four-turn dialogue                         | 3       |
| s81  | Check understanding of the second dialogue                      | 2       |
| s82  | Transfer the structures to personal preferences                 | 4       |
| s9   | Listen to Kim, answer three questions; transcript on third play | 5       |
| s91  | Give a short spoken reply to Kim                                | 2       |
| s10  | Repair three common like/likes mistakes orally                  | 2       |
| s11  | Choose two fruits, discuss prices and swap roles                | 4       |
| s111 | Have a short conversation with personal details                 | 2       |
| s12  | Continue practice through the existing homework destinations    | 1       |

All 16 pages individually revised. Removed repeated mango/orange identification, Show options, unsupported potato/tomato pronunciation comparison, redundant like/don’t drill, eight-turn replay with six pictures, and the list/checklist/input overload in Kim’s list. Current native wheel gesture logic is preserved; the content composition is reduced instead of weakening the page-navigation latch.

## UI Library ownership

- RevealCard prompt presentation: click the question to reveal support below, with centered markers and semibold Montserrat text. The existing shared AnswerDisclosure adapter delegates to this owner across maintained materials.
- SlidePage titleAudio: filled play beside the title, with pause/replay/error states. Historical title/action adapters delegate to canonical Slide helpers.
- VocabularyGrid: built-in bulb/eye controls, plain surfaces for transparent objects, larger whole-object framing, static cards for oral role-play. One click reveals and plays the prepared recording; no hover reveal on A1.05.
- LearningDialogue: controlled inline gaps with continuous lines and reserved answer width. Shared A1/A2 gap styles now delegate to the same owner.
- RolePlayExercise instructions presentation: three static steps and role labels, without completion counters or mandatory clicks.
- Native prepared-audio infrastructure is shared from src/internal; A1.05 owns its exact-text recording binding and stops playback on slide changes.

## Media and scope

The old A1.05 source used browser speech synthesis and had no MP3 assets. A bounded comparison of 212 provider manifests found no exact matching text/voice recordings for the 23 final utterances. Twenty-three real ElevenLabs files are supplied with text, voice, provider and hashes. No browser/macOS TTS fallback is used by this revised lesson. Six fruit objects are newly generated from text with transparency and no references; six vegetable scenes and existing Ana/Kim portraits are reused.

The three existing homework destinations are preserved; this delivery does not create or claim new student-portal exercises. Teacher guidance: alternate roles once, let the learner speak first, use question supports only as needed and record optional corrections in the existing lesson Notes popup. Notes remain teacher-owned and are not overwritten with a lesson script.

## Delivery

Only necessary package/export/Teacher staging builds and provider publication acknowledgement are performed. No tests, browser sessions, screenshots, playback QA or broad audits are run at the user’s request. Draft PRs remain unmerged. Visual review belongs to the user.
