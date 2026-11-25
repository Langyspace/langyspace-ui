# Questions cards and A1.01 oral practice — 25 November 2026

Baseline: cf2f3678d6939228f36535a336b6a979bb36ae70. Feature: feat/questions-cards110. Direct rendered impact. Local preview only; no product/package publication requested.

## Delivery

- Canonical QuestionList: individual equal-width cards, natural heights, smaller pink numbers on translucent primary, medium prompts. No hidden answer height. Hint button follows the last card immediately, right-aligned. Listening uses this same footer, eliminating its detached position without duplicating controls.
- A1.01 model and gap conversation use the supplied six turns. Six D110 recordings retain the Ana/Jessica and Kim/Sarah voices. Six meaningful gaps: Good morning / name / meet you / from / How are you / happy. Three comprehension answers refer only to the new model.
- Six country/emotion portraits form a PictureStrip gallery with native official flags. Learner chooses mentally; Teacher guesses, then roles swap. A separate challenge introduces the six people as friends. No learner playback or secret on-screen selector.
- PictureStrip adds one optional imageBadge object, compatible with existing items. Existing media/region/caption behavior remains.
- Meet Vanya JSON (video interval, copy and four questions) is preserved exactly. Only inherited QuestionList visuals change.

## Evidence and limits

Media: built-in image_gen, six text-only requests, canonical illustration prefix byte-identical (fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489). No references. Proportional WebP export only. Six ElevenLabs utterances, exact-text reuse lookup first; original provider bytes saved. Provider metadata is not a perceptual pronunciation guarantee.

Private originals, prompts, provider receipts, preservation snapshots and comparison evidence: /Users/margaridamartins/Documents/Codex/2026-11-18/new-chat-3/outputs/a101-questions110-20261125/.

Pre-existing README and A101.stories.tsx changes remain outside this delivery. The pre-existing A101Lesson activity binding is superseded by the newly requested roleplay. No unrelated dirty work discarded.

Focused verification and browser evidence are recorded with the final source revision. Full catalog/CI/runtime checks are not claimed. A visual PR remains draft until the product owner reviews it.

Verification: 21 focused QuestionList/PictureStrip/VoiceMessage tests passed; 16 inherited SlideDeck tests passed after removing two unsupported Testing Library option fields (no assertion semantics changed). TypeScript source check and declaration/API compatibility check passed (184 values / 307 types; only optional PictureStrip badge added). Targeted authored-copy/media hashes passed: 22 A101 authored pages, six model turns/six gaps, six recordings/six portraits, Meet Vanya JSON unchanged.

Browser: equal card widths, medium weight500, hidden guidance display:none, footer gap approximately8px and right inset0px were observed in Meet Vanya, including one answer revealed. Listening uses the same attached footer. Screenshot viewport was1066×600 for the video comparison; some other captures are bounded by the desktop pane, so do not claim full-width capture/fit from those alone. Mobile stacking was observed in the narrow pane. Perceptual audio and product-owner visual acceptance remain pending.

The branch inherits vocabulary107 and navigation108 work still in draft PRs57/58. This delivery does not merge them, publish a package or deploy Teacher.
