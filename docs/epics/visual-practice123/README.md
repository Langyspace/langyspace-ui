# Visual references and light feedback

Baseline: `5b6ac53c55758bfca6e56d87bd7ecc3d72a4e666`. The previous readiness122 source review covers the maintained catalog. This delivery inspects the 140 active Course activity adapters, then corrects ten lessons where observable evidence was absent or an entire vocabulary atlas was shown as the activity.

## Product decisions

The learner participates by speaking while the teacher shares the screen. Add visual references, not more click sequences. Keep legitimate records, schedules, source messages, quotes and charts native. Do not replace the same missing picture with a decorative picture that the questions never use.

| Lesson | Correction |
| --- | --- |
| A1.08 | Select a shower/lamp scene, then report the problem. Room and requests stay native |
| A1.10 | Keep the menu; show the delivered drink and food as pictures when checking the tray |
| A1.11 | Show the selected garment with its actual size/price |
| A2.05 | Reuse only the relevant moving-help illustrations instead of showing the six-item atlas |
| B1.02 | Compare two actual neighbourhood views simultaneously; the factory-site change stays after listening |
| B1.04 | Observe the found objects and their identifying details; do not print the observation as the answer |
| B1.09 | Show the owner's reference bicycle; do not label it as the recovered bicycle |
| B2.04 | Observe the window, plant and receipt; keep the separate access log and unknown ownership native |
| B2.08 | Show the chosen apartment/work area with rent and location metadata |
| C1.05 | Show the earlier scarf photograph illustration only after the listening revelation |

Eight selected assets, nine built-in image generation calls, zero references. The first B2.04 picture was rejected because a visible spare key introduced an unconfirmed physical clue; its original and prompt are preserved. Every request starts with the unchanged 1909-byte illustration prompt. Proportional resize/WebP export only. The garment atlas is transparent; contextual scenes are opaque. Original PNG paths, hashes, prompts and final asset hashes are in `assets.manifest.json` and `unused-generation.json`.

## Shared components

- `PictureStrip.density='compact'` preserves complete image regions and leaves room for option metadata. The existing default remains regular; before/after stays simultaneous. Blank captions do not create empty caption rows. Stories cover comparison and compact variants.
- One hint earcon, 150 ms, quiet neutral acknowledgement. VocabularyControls, inline RevealCard and meeting support share the existing sound channel and mute. Native speech takes priority; no media is paused or changed by feedback. Cross-origin video is not observed.
- One reveal recipe, 150 ms fade only. Question answers, dialogue guidance/translations and gap answers reuse it. Reduced-motion disables it; no height, page, scroll or audio-control animation. Vocabulary labels remain static.

## Validation and remaining review

- Three focused visual-practice interaction tests passed: simultaneous comparison, product/metadata switching and pictured wrong delivery/reset.
- Hint agent: 23 tests in four focused files; its seven hint tests were rerun after correcting only fixture types. Animation agent: ten tests in four focused files. Reused passing results without broad suites.
- TypeScript passed after correcting the new test annotations; declarations compiled and optional API additions reviewed. API: 184 values, 307 types, 650 declarations. No new public exports.
- Local browser: comparison plus progressive help; computed answer fade confirmed at 0.15s; hotel/product alternatives; apartment evidence plus live dialogue at 1280×720; found objects; factual question reveal. No full catalog visual matrix or new audio transcription.
- Source inspection is not visual approval of all pages. Product owner still reviews image clarity, sound pleasantness and timing. The unrelated pre-existing A101 story/README changes remain outside this delivery.
- Local preview and draft visual PR only. No production/staging publication or merge requested in this turn.

## Tasks

- [x] Distinguish missing illustrated evidence from legitimate source data
- [x] Generate/reuse references and preserve the literal image prompt
- [x] Integrate in shared adapter without lesson-specific sound/motion handlers
- [x] Add focused stories and interaction evidence
- [x] Document rules in central authoring guideline
- [ ] Product-owner visual and listening review

Visual gate review: pending human
