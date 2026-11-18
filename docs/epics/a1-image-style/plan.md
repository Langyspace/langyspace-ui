# A1 illustration style refresh

The 2026-11-17 user-supplied fixed 3D animated-film prompt supersedes the previous scene art direction. Scope: the 59 exercise scenes in the five implemented lessons A1.01/A1.03/A1.04/A1.05/A1.06. Keep lesson semantics, counts, answer keys, exact flag assets, public library API and layout intact. Keep the prompt base verbatim and save every actual generation/edit prompt, source/output hashes and reference relationships.

Rendered impact: direct, fixture images only. Continue feature branch `feat/a103-a106-materials-20261116` and draft PR #43; no merge or release. Baseline before this round: `76c471cb0a8546dc21cb9a2cc8573f1988fb2f5b`.

## Ordered tasks

- [x] Capture matching desktop/mobile lesson evidence before replacing assets.
- [x] Generate and inspect separate images using the supplied prompt and the approved character rendering; retain 3:2 sources, convert proportionally to 768px WebP quality 86.
- [x] Preserve Ana across routine scenes and Mia/room geometry across location edits. Verify teaching cues and cropping in the existing cards.
- [x] Save base, full prompts, references and updated provenance beside the assets.
- [ ] Update the existing Claude artifacts with the same generated images through verified CLI reads/writes and render checks.
- [x] Run focused asset/browser verification and typecheck.
- [ ] Refresh PR evidence, commit and push once.

## Remote state

Artifact authentication succeeds (contract 0.2.96). The CLI 1.8.0 cannot load the file manifest of current A1 lesson artifacts: `Artifact content fetch failed; capability URLs were not exposed.` Inspect/files/authoring-context failed before writes. Do not bypass manifest integrity, replace the artifacts, change sharing or report them synchronized. Local implementation can continue; remote lane remains incomplete until verified transport works.

Affected current artifacts: A1.01 `95f9c72e-a726-481f-ac56-c94c73b77047`, A1.03 `093a990f-6e49-4341-ad68-f0571a6da917`, A1.04 `33b1889e-2d12-46ae-bc25-3719c83633f0`, A1.05 `006e25a0-b664-4b02-b058-289a4a10506f`, A1.06 `741ffddd-c412-41b0-8d70-5bb070a7d4e5`. None was written, uploaded to, deleted, or shared. The aggregate Langy Materiais has a verified inventory, but its older embedded lessons do not substitute for the current prototypes and were not overwritten.

## Validation and deliverables

`capture-a1-image-style.mjs after` passed: all 59 WebP hashes, dimensions 768×512, opaque backgrounds, prompt/history records, 88 desktop/mobile screenshots including four Pet notes locations, no missing images, horizontal overflow or runtime errors. Before evidence: 80 default screenshots plus eight room states. TypeScript passed. Images were inspected in lesson contact sheets and representative real desktop/mobile frames. Prompt string normalization afterward did not change images, semantics or rendering, so successful checks remain applicable.

Generation used built-in `image_gen`, one asset per call. No Gemini/API backend or UI source changes. PNG originals and portable prompt sets are in workspace `outputs/a1-imagens-estilo-3d`; WebPs and full prompt provenance are versioned in each lesson. Existing flag SVGs and UI/avatar assets retain their original purpose. A103/A104 legacy `basePrompt` fields now match the new canonical style instead of retaining contradictory prior instructions.

The local image delivery is ready for review. The complete user request remains incomplete because existing Claude prototypes could not be updated through the required verified transport. Product-owner visual gate remains pending human.

## Acceptance

All 59 scene files resolve, their semantic cues survive desktop/mobile crops, exact requested targets remain legible, prompts and hashes match outputs, and no unrelated source changes occur. Claude synchronization additionally requires successful readback/render evidence. Product-owner visual review remains required before merge.
