# A1.01 — Vocabulary and warm-up

Base: production UI `3bae8b9dc8491366e2a4a5b2143db885f1206194`. Developer-series105 remains isolated on its existing branch.

## Requested sequence

1. Cover, unchanged
2. Greetings: six contextual cards, original illustration prompt unchanged; four uniform native upper-right time badges; prepared recorded phrase on click
3. How do you feel?: six existing illustrations, word-only reveal and word-only recording
4. Six picture choices immediately after feelings: one character/feeling per page, complete pronoun-matched sentences and balanced answer positions
5. Countries: preserve Brazil, South Korea, the United States, Japan, Germany and France
6. Six country choices: existing five traditional/contemporary clothing scenes and a new Brazil/Ana scene; native official flag visible as the actual country evidence
7. Existing guided conversation, grammar, personal practice, listening, video, free conversation and homework retain content and IDs

## Canonical owners

`VocabularyGrid` owns card reveals, playback callbacks, help and time-badge alignment. `ExercisePanel` owns the warm-up media/counter and secondary flag cue; `QuizOption` owns answer feedback and sounds. `ReviewedLesson` adapts the authored data. No separate lesson layout or cloned quiz.

The flag determines the country answer; clothing is contextual illustration, not proof of nationality. Characters remain fictional exercise roles.

## Progress

- [x] Inspect current source, reusable illustrations, isolated recordings and component contracts
- [x] Freeze seven image requests with the canonical v1.8 prefix byte-for-byte
- [x] Integrate generated assets and six greeting recordings
- [x] Apply ordered vocabulary/choice content
- [x] Focused content, interaction and API verification; representative local preview
- [x] Scoped commit and draft review handoff prepared

No production publication requested in this change. Visual and perceptual review remain with Margarida.

## Evidence

- Five focused tests passed across VisualVocabulary107 and VocabularyContext
- TypeScript declaration build passed; additive optional API reviewed and API snapshot check passed (184 values / 307 types)
- Authoring check passed: 18 cards, six choices per group, two correct answers in each of the three positions, exact available audio bindings; remaining existing authored pages unchanged
- Browser: six greetings and uniform times, word-only feelings, country flag/reference and wrong/correct states rendered locally. Before/after vocabulary and representative new warm-ups are saved under `evidence/`
- Media: seven text-only image generations, six greeting recordings; all old recordings/images retained. Canonical style prefix hash remains `fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489`
- The browser automation's locator activation centers a control by scrolling the presentation container; physical coordinate clicks kept Greetings aligned. New-page screenshots show the full presentation. The vocabulary comparison captures are partial; they do not certify full viewport fit. No gesture/navigation code was changed
- This feature is based on the published104 source and therefore depends on the existing video-materials PR; developer-series105 is excluded

CI and deploy links are recorded in the final handoff. No Student activity, registry release, staging or production write is part of this delivery.

Visual gate review: pending human

## Saved media

All images were generated with built-in image_gen. [Exact prompt set](image-requests.json) and [image hashes](../../../stories/materials/A101/image-provenance107.json) preserve provenance; originals remain in the task output.

| Scene | Saved asset |
| --- | --- |
| Hello | [greeting-hello107.webp](../../../stories/materials/A101/assets/greeting-hello107.webp) |
| Good morning | [greeting-morning107.webp](../../../stories/materials/A101/assets/greeting-morning107.webp) |
| Good afternoon | [greeting-afternoon107.webp](../../../stories/materials/A101/assets/greeting-afternoon107.webp) |
| Good evening | [greeting-evening107.webp](../../../stories/materials/A101/assets/greeting-evening107.webp) |
| Good night | [greeting-night107.webp](../../../stories/materials/A101/assets/greeting-night107.webp) |
| Nice to meet you | [greeting-meeting107.webp](../../../stories/materials/A101/assets/greeting-meeting107.webp) |
| Brazil / Ana | [scene-brazil-ana107.webp](../../../stories/materials/A101/assets/scene-brazil-ana107.webp) |

The [greeting audio manifest](../../../stories/materials/A101/audio-provenance107.json) maps the six original provider MP3s. Feelings reuse the existing `ph_*` isolated recordings; no prior media was overwritten.
