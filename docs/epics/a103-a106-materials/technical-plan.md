# Technical plan

Rendered impact: direct. All implementation is private catalog composition in `stories/materials`; public source, exports, API snapshot, manifests and package version remain unchanged unless an independently reviewed contract gap requires a shared component.

## Composition

`shared/LessonDeck` adapts a typed ordered page definition to the existing `SlideDeck` and `SlidePage`. Pages keep stable source IDs, labels, width, title, instruction, lead and custom React content. `LessonExercises` supplies controlled vocabulary revelation, choice feedback, translated dialogue, reveal prompts and ordered gap filling using existing components. Distinct tasks can directly compose existing grammar, scene, roleplay and matching contracts rather than being flattened into quizzes.

`LessonActivities` coordinates shared private pronunciation, progressive grammar revelation, right/wrong review, clipboard homework and listening behavior. Listening reuses the existing VoiceMessage device styles without changing its public audio contract: these fixtures explicitly label browser speech synthesis, support pause/resume and 1x/0.75x, gate transcription behind correct answers and replay, and accept lesson-specific questions/reply support. They do not pretend that a prerecorded file or recording/persistence service exists. Pronunciation records the latest eight attempts; generated image prompts stay with each owning lesson.

`catalog/MaterialsCatalog` preserves the aggregate source's 82 material entries and levels, supports text search and empty states, and applies seven current verified titles: A1.01/A1.03/A1.04/A1.05/A1.06/A1.07/A2.01. Obsolete descriptions for the initial five overrides are omitted rather than invented; A1.07/A2.01 use the goals read verbatim from their current covers. Story modules are discovered by Vite; only the five implemented lesson stories receive navigation links. A1.07/A2.01 remain informative cards without story links because no implementation was added for them. The catalog is a Storybook fixture, not a portal route.

## Source provenance

- Original list: Langy Materiais, `ac20bc57-8c42-4611-ba9e-0bf5c49f5592`, version `1794858229-e02e`; index SHA-256 `aa7b8417ea179d686a822588624dfe470f580afce10b72fa7472deefb9b0ec96`, CLI readback verified.
- Current A1.03 metadata: People in my life, `093a990f-6e49-4341-ad68-f0571a6da917`.
- Current A1.04 metadata: My day and our time, `33b1889e-2d12-46ae-bc25-3719c83633f0`.
- Current A1.05 metadata: At the street market, `006e25a0-b664-4b02-b058-289a4a10506f`, version `1794857827-7627`; official browser HTML export obtained.
- Current A1.06 metadata: My home and my pet, `741ffddd-c412-41b0-8d70-5bb070a7d4e5`, version `1794857830-5282`; downloaded through the local read-only CLI compatibility wrapper, with `manifest_verified: false`.
- Current A1.01 metadata: `95f9c72e-a726-481f-ac56-c94c73b77047`; existing approved React lesson is retained.

Two additional current covers were read and confirmed for catalog-only updates:

- A1.07 At the airport: source `a107-current.html`, version `1794857832-f4aa`, downloaded-byte SHA-256 `929b1b6d245771caa29514cfe2ed6c2772ab17a9f020c617d084da74e67b3c6f`. Goal: “Entender e responder as perguntas da imigração, fazer as perguntas do agente e pegar um táxi.”
- A2.01 My routine and right now: source `a201-current.html`, version `1794793109-f5e3`, downloaded-byte SHA-256 `e92da2896ad91db66691a6e2be769dfe81c939b627b1741a7b9a7bdb3834d318`. Goal: “Falar da sua rotina e do que está acontecendo agora e nesses dias.”

These update the two existing catalog entries only. They add no lesson implementation, page, generated image or story link, and the catalog retains 82 entries. Downloaded-byte hashes identify the read sources; they are not an assertion of server-manifest verification.

A1.05 alone was acquired through the official HTML export. A1.03/A1.04/A1.06 use a local read-only compatibility wrapper over the same CLI, and their provenance explicitly records `manifest_verified: false`. On A1.05, the wrapper output was byte-for-byte identical to the official export after removing injected runtime code. This establishes that comparison only; it does not establish an official export or manifest verification for the other three lessons. The hashes below identify the actual downloaded bytes used for implementation, not server-manifest verification:

| Lesson | Current downloaded HTML SHA-256                                    | Pages | Generated scenes |
| ------ | ------------------------------------------------------------------ | ----- | ---------------- |
| A1.03  | `f05fcdea5d08c0dc011ed87cbc8ae8443912552008b2e54388320b754178e398` | 17    | 8                |
| A1.04  | `ff75f5737058386dc5c2074cf72838405ea19399d58e83cc14940a82da1ec105` | 16    | 6                |
| A1.05  | `ab6f85072f43a1c808d3c1169cbbc50730913e709cfc8e90286fc6b024b2e935` | 16    | 12               |
| A1.06  | `7ea090b6ca3453822342bf26b3d5f67c0a959c7c35ae23e57af71e6092331f83` | 20    | 18               |

Metadata alone is not a page-fidelity assertion; it was supplemented by those current-source downloads. The historical aggregate titles What do you like? and Where’s my bag? are not substituted for current A1.05/06. Complete prompts/base prompts for all 44 outputs live in each lesson's `image-scenes.json`, and actual output hashes, dimensions and conversion provenance are in `assets/generated-scenes.json`. A1.06 includes three final room-image edits supporting the four Mia locations and the hide state in Pet notes.

## Completed validation and evidence

Root centralized three scoped checks: TypeScript passed, ESLint over the new scope passed, and `scripts/verify-a103-a106.mjs` passed. The third check is justified by the high-risk combination of 69 pages, two widths and stateful interactions; no complete library gate or unrelated suite was run.

Browser assertions covered all 69 pages at 1280px and 390px, with zero broken images and horizontal overflow; Notes persistence/Clear/Escape; catalog search/empty/clear; and Mia's four locations plus hide. The evidence/report set under `.github/evidence/a103-a106` contains 294 files, including `report.json`, 138 matched before/after pairs and additional interaction captures. Automated checks and captures are evidence for review, not product-owner visual approval.

CI/deploy were not triggered by local verification. Root prepares one coherent commit/push on `feat/a103-a106-materials-20261116`; no merge of that branch or the original PR #42 branch, package publication or portal deployment is implied.

Visual gate review: pending human.
