# B1.01 review handoff

The catalog now includes the complete B1.01 “What have you been doing?”: 12 pedagogical pages in 17 screens. Source order, dialogue, questions, answer explanations, grammar contrasts, false-friend notes and homework copy come from the frozen local authoring export documented in `plan.md`. Claude inventory/version metadata was verified; its private content download failed. These captures compare the local export, not verified latest remote bytes. No Claude project was changed.

Reusable additions: `RevealSequenceCard`; split `SlidePage` and `ExercisePanel`; four-column and click-first vocabulary with phrase hints; compact/controlled learner turns in `LearningDialogue`; compact role-play steps and summary slot; consumer-owned question feedback; phone dimensions that respect theme overrides. Existing defaults remain. Hidden grammar intentionally gains strong table headers, plain meaning labels and one disclosure across concealed answer columns; its existing UX Lab story is included in the before/after matrix. A1.01 speech orchestration was moved to a shared catalog hook, preserving the original import and behavior.

## Media and state

Twelve opaque contextual scenes are saved under `stories/materials/B101/assets/scene-*.webp`. The built-in image generator produced one scene per asset, in the approved A1.01 style. `image-scenes.json` contains complete prompts, input roles, dimensions and original/output hashes. The first eight scenes describe the vocabulary activities; three ambiguous clues and the rainy bus-stop answer support the final role play. A1.01 images are unchanged. Generation never runs when opening the lesson, and lesson assets are not package exports.

The Leo MP3 is local synthesized demonstration speech using the exact source transcript, approximately 21 seconds; `audio-provenance.json` records its producer, duration and hash. Native playback, 0.75x speed, failure/retry, pause on departure and second-pass transcription use the existing phone contract. The automatic second-listen transcript follows the user's instruction instead of the prototype's additional manual reveal. No microphone is requested and no voice reply is fabricated. Vocabulary/dialogue continue to use browser speech; deterministic speech was used for comparison-state captures, with its orchestration separately unit-tested.

Answers, note text, role-play summary and checklist remain in memory while navigating the catalog. Notes are a visible free notepad, not private teacher guidance. Persistence, recording, content production and portal integration belong to the consumer applications. Homework destinations/counts are supplied source content; availability of those items in production was not verified here.

## Evidence

- `.github/evidence/b101-material/results.json`: 93 paired captures across 1280×800, 1280×620 and 390×844, including 12 existing-component comparisons; 12 additional isolated card-state screenshots. Each paired image has a SHA-256.
- `interactions.json`: 26 browser journeys across notebook/mobile, including wrong-answer recovery, score/translation, hidden grammar, role swap, answer retention, input-safe keyboard navigation, summary/checklist, free notes, actual clipboard plus failure fallback, real MP3 playback and second-listen transcript.
- `finish-b101.mjs`: final phrase-hint fidelity, stable card sizes, notes/isolated variants and a real native media failure followed by successful retry. The media route deliberately intercepts media requests only, preserving JavaScript imports.
- React default screens have no horizontal page or document overflow. The unmodified prototype itself overflows its document at 390px; its before screenshots preserve that defect. Tall mobile exercises scroll naturally within their page rather than shrinking their text.

Local checks: 52 directed contract/SSR/manifest/speech tests plus the added click-first vocabulary and repeated-pronunciation contracts (54 distinct cases); 82 affected stories, with the changed vocabulary story rechecked separately; typecheck, focused ESLint, styling/architecture audits, public API, all consumer bundle budgets and installed-package TS/SSR/build smoke passed. API: 167 values, 267 types, 557 declarations, with no removed existing public exports. CI owns full coverage and broad layout gates.

Root bundle: 288,904 raw / 70,650 gzip bytes. The proposed 71,500-byte root gzip allocation and its +969-byte feature footprint are explicitly documented for review in `plan.md`; all consumer-entry, raw-size, coverage and architecture budgets are preserved.

## Publication boundary

At the review handoff this was a feature-branch visual PR with no merge, tag, release or production deployment. The product owner subsequently authorized publication of PR #44. The approved rendered source and evidence remain `23b3ee5eab94f73cdb89fc71b07edc6ee73033bc`; release preparation changes only version and documentation to 4.4.0. Published 4.3.0 and its immutable assets stay intact. Package and catalog publication use the existing validated workflows. Product adoption is a separate consumer change.

Final review also exercised 12 pronunciation attempts, keeping eight recent results with stable unique keys. The ten existing default-composition comparisons have SSIM 1.000000 at the reported precision; the hidden-grammar changes are intentional. Before/after hashes and the 12 scene dimensions were rechecked. The Claude live version and local export hash remain unchanged at handoff.

When adding a theme token, restart the Storybook inlining compiler before capturing: its long-lived dev process can retain an earlier fallback object. The opening and notes captures were renewed after a fresh process confirmed the 1120px introduction width.
