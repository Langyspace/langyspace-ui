# A1.02 — Your name and number

Rendered impact: direct. Same delivery policy as the approved A1.05 revision: reviewed UI Library first, concise English instructions, meaningful oral practice, only necessary builds and staging publication. User owns all tests, playback and visual review. Production, Claude Design, UX Lab remote and Student backend are outside this delivery.

## Source and decisions

Read the existing local A1.02 plan and `codigo/a1-02/int-a102.js`. Claude inventory identifies original `264afc6a-7152-48cd-9fca-bce45d587e08`, current listed version `1794932374-639e`, updated 2026-11-17. Authentication and version metadata were available, but inspect/files content downloads failed. This is a local-code/plan revision, not a claim of current remote-content fidelity or Claude synchronization. The original has not been changed.

The old plan puts almost19minutes of number/alphabet/pronunciation drills before the first contact exchange, uses browser speech, separates eight questions and answers, and packs a call, three cards and checklist into one view. Retain its useful information gap: teacher writes exactly what the learner says, then the learner confirms or corrects it.

The complete alphabet becomes optional lookup on one page, using the approved segmented control and groups of at most9letters. Default letters are those needed for Ana Souza. Do not require reciting or memorizing26letters. Remove the separate pair-drill pages, pseudo-Portuguese pronunciations, eight-by-eight matching, hidden options, scoreboards, correction banners and redundant confirmation counters. Keep actual listening distinctions in the number and surname tasks. No age, email or1–100 syllabus expansion.

## Page review and50minute plan

| Page | Purpose                                                                                         | Minutes |
| ---- | ----------------------------------------------------------------------------------------------- | ------- |
| s1   | Review greeting, name and origin with the contact context                                       | 2       |
| s2   | Recognize and say0–4 with native symbol tiles                                                   | 3       |
| s3   | Recognize and say5–9                                                                            | 3       |
| s4   | Listen to362 and choose the digit sequence                                                      | 1.5     |
| s5   | Listen to409, distinguishing zero and digit order                                               | 1.5     |
| s6   | Spell a name; teacher writes it; alphabet available by groups                                   | 4       |
| s7   | Save a dictated surname, LIMA, rather than guessing a spelling variant of the same name         | 3       |
| s8   | Understand a natural six-line contact exchange                                                  | 4       |
| s9   | Answer three comprehension questions on their own page                                          | 3       |
| s10  | Use my/your and It’s to give and request information                                            | 3       |
| s11  | Complete a different four-line conversation                                                     | 3       |
| s12  | Check the second dialogue and ask the teacher its questions                                     | 2       |
| s13  | Give a first name, surname/spelling and invented phone number; check the teacher’s three fields | 4       |
| s14  | Answer Kim’s four-turn call; correct ENA to ANA, confirm SOUZA, correct517 to507                | 5       |
| s15  | Become Kim and check Emma’s contact; swap roles with new details                                | 5       |
| s16  | Ask for information and confirm it without reading a full dialogue                              | 2       |
| s17  | Two concise independent practice tasks                                                          | 1       |

All17pages revised individually. Number and surname choices are visible from the start; feedback stays in the choices. Dialogues have title-adjacent play, per-line audio and translations below the English on click. Gap answers have continuous lines and stable width. The contact form has one purpose, three fields and no backend save or checklist. Call progression remains teacher-paced: answer, respond, then next question. No fake microphone, real call, automatic voice recognition or recording is implied.

## UI Library changes

- VocabularyGrid accepts native symbols as an alternative to an image, with compact typography, stable word reveal, the same click-to-play contract and existing bulb/eye controls. Digits/letters are text, not generated graphics.
- CallSimulation has an opt-in compact density resolved from the existing phone theme; the avatar and controls fit its smaller presentation. Empty elapsed labels omit the trailing separator at call end.
- KeyValueList has a material tone using the slide theme for readable labels, values and separators, preserving the default product appearance.
- Native prepared recording sequencing lives in src/internal/useRecordedAudio; A1.02 binds exact IDs/text/URLs and stops playback on page changes.

Existing SlidePage.titleAudio, RevealCard.prompt, LearningDialogue.parts, RolePlayExercise.instructions, GrammarTable, SegmentedControl, FieldRoot and TextInput are reused. No duplicate local exercise styling is introduced.

## Media and homework

53clip IDs resolve to52unique ElevenLabs recordings, including one identical D.5/G.3 recording reused inside the batch. The audio owner compared235local provider records and found no exact matching valid clips. Display text preserves digits and hyphenated spelling; separate synthesisInput/phoneticIntent records American letter names and digit-by-digit phones. Reuse Ana/Jessica and Kim/Sarah voices and existing approved portraits. One contextual illustration is generated from text without image references, used for the cover/introduction.

The old Student homework URLs are explicitly proposals in the local plan. Do not publish them as working activities. This delivery instead provides two useful offline homework tasks: practise the digits/letters in your name and give a new contact to someone who writes what they hear. No Student backend exercises are created or claimed.

Teacher guidance: accept a single everyday surname; spell letters one at a time; use an invented phone; only consult the letters needed for that learner. Keep optional teacher notes in the existing protected Notes popup. If time is tight, shorten alphabet lookup and preserve contact correction and the final role-play. Do not overwrite teacher notes with a script.

## Delivery evidence

Only package/export and Teacher staging builds, source/asset provenance and Hosting acknowledgement are used. No tests, browser, playback QA, screenshots or extra audits are run. Draft feature PRs remain unmerged; no package publication.
