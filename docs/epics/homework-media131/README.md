# Homework media131

Rendered impact: direct — restore real card imagery and shadowing faces without changing the exercise design.

Baseline: UI fb5c8e3808f2b27656ac877f8025a60e5c65c165. Scope: all66 catalog materials; inspect existing homework only. Keep all original cards, recordings, identities, destinations and text. Alphabet/digit cards may retain meaningful visual labels. Reuse real matching assets or documented regions; do not fabricate placeholders or imply a person is another character.

Tasks: inventory all assignments and media paths; correct bundled/lookup resolution; map existing media; document genuine gaps for owner selection/generation; one focused test; hand off without commit/push/deploy or Student writes.

Acceptance: each assigned card has a coherent image or an intentional alphabet/digit visual; every shadowing speaker resolves to a real portrait; mapped local sources exist; remote assets need separate publication by root; owner performs final visual review.

Visual gate review: pending human

## Diagnosis and mapping

The source130 Dev module supplied `characterPortrait('Kim')` (a URL already resolved by Vite), but `LessonHomeworkGallery` looked up `images[speaker.avatarUrl]` and Dev provided an empty image map. The second lookup returned undefined. The same module created20 flashcards with visualLabel only, no imageSrc.

The other62 prepared JSON lessons have valid existing image-map entries and local portraits. The gap was127 JSON cards with no imageSrc:36 A102 alphabet/digits are intentional;91 other cards had only a word label. Including20 Dev cards gives111 missing picture bindings. The authored reuse selection recovers53 with existing scenes, atlas regions and native assets;50 new concepts cover the remaining58 bindings across9 generated atlases supplied by the designated image owner.

A new private resolver accepts a publication key through its explicit media map or an already resolved Vite URL. It leaves unmapped logical /flashcards and /course-practice keys missing rather than issuing a broken same-origin request. Dev now uses the same Kim publication key/portrait mapping as other lessons. Practice and shared Kim portraits are byte-identical (SHA25622b936311d5bf6fa2c61fe958871eccbb98e5e69808229a61fba9d8eda0732a0). The ordinal metadata is corrected to DEV.03; exercise IDs are unchanged.

The preview now renders the existing visualLabel for the36 deliberate letters/digits through the existing visual slot. It does not substitute arbitrary word labels or a decorative emoji for a missing picture.

## Bundle versus Student publication

PreparedPractice images maps logical publication paths to Vite-bundled URLs. Material previews therefore use the imported image bytes. Student activities consume imageSrc directly, rewrite /flashcards/ to /flashcards-transparent/, and use imageRegion. New card paths use /flashcards-transparent/course-practice/homework-media131/<sha256>/image.webp and must have matching immutable bytes/publication metadata before native Student release. The basename image.webp is required by the existing signer; a hash.webp basename is rejected. Portrait paths keep the separate exact /flashcards/course-characters/<slug>/image.webp contract. This front does not write Student or remote storage. Root owns synchronization, publication and final visual review. Existing published destinations and native audio remain unchanged.

The66-source review includes Frontend for preserved historical routes even when the parent removes it from the current catalog listing. The3 trial materials have no existing homework modules and receive no invented activities. All63 maintained homework modules are included in the focused check.


## Existing path repair and native raster export

The source130 data also contained83 picture bindings with non-signable paths:76 expanded124 hash.webp basenames and7 legacy Frontend UI assets (sixSVG plus oneWebP). The preview had local imports, which hid this Student delivery mismatch. All are normalized by the actual final image bytes to the signer contract, preserving native regions and source files. The sixSVGs are rendered into actual480×480 WebP assets through the existing approved Sharp0.34.5 runtime at density288. Three existing PNG scenes are encoded losslessly at full dimensions. The originals remain unchanged; `raster-exports131.json` records source and derived hashes, format and dimensions. No SVG/PNG is relabeled as WebP without conversion.

New generated atlases preserve the full1536×1024 original and use lossless WebP encoding only, with native3×2 image regions. Prompt/provenance/original PNGs remain in the image owner's output; `generated-media.adoption.json` ties each exact original batch/hash to the adopted full image and card bindings.


## Final source evidence

The single focused check passed: `pnpm exec vitest run --project unit test/materials/shared/HomeworkMedia131.test.ts` — onefile/onereal-data test, exit0,3.38s. It imports all63 prepared modules from the66-source review, resolves actual local image bytes, checks image signatures and valid native regions, validates card signer paths and speaker portrait paths, checks phrase-to-speaker references and exercises unchanged62-JSON content hashes with media fields excluded. It covers693 cards (657image cards+36intentional A102 visual labels) and125speaker bindings. There are no remaining missing picture/portrait bindings in the prepared source.

Nineteen homework sources changed.111missing images were filled (53existing-asset bindings+58bindings for50new concepts in9atlases). Another83existing picture bindings had invalid paths repaired, for194changed card bindings in total. DEV.03 metadata is corrected while all exercise/audio/card IDs remain unchanged. Frontend homework is preserved for historical routes although the parent removes it from the live catalog listing.

`publication-plan131.json` contains46unique actual WebP objects with canonical storage paths, hashes and source files, plus194precise native card field patches and the Dev Kim mapping. This is the root's publication input, not a claim of Student or cloud changes by this front. `inventory.final131.json` contains the66rows and `handoff.json` summarizes counts and limits. `path-aliases131.json` and `raster-exports131.json` preserve path and native-raster provenance. New atlas provenance remains in the designated image owner's output and is referenced by `generated-media.adoption.json`.

No browser, screenshot, playback, remote HTTP verification, broad suite, CI, Student writes, backend changes, commit, push or deploy was performed by this front. CI and deploy were not triggered. The parent owns product runtime and visual verification; generated conceptual images retain the image owner's disclosed limits.
